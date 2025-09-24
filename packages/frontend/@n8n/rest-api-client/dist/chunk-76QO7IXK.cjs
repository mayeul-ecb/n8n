"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }// src/utils.ts
var _constants = require('@n8n/constants');
var _assert = require('@n8n/utils/assert');
var _axios = require('axios'); var _axios2 = _interopRequireDefault(_axios);
var _n8nworkflow = require('n8n-workflow');
var getBrowserId = () => {
  let browserId = localStorage.getItem(_constants.BROWSER_ID_STORAGE_KEY);
  if (!browserId) {
    browserId = crypto.randomUUID();
    localStorage.setItem(_constants.BROWSER_ID_STORAGE_KEY, browserId);
  }
  return browserId;
};
var NO_NETWORK_ERROR_CODE = 999;
var STREAM_SEPERATOR = "\u29C9\u21CB\u21CB\u27BD\u2311\u29C9\xA7\xA7\n";
var MfaRequiredError = class extends _n8nworkflow.ApplicationError {
  constructor() {
    super("MFA is required to access this resource. Please set up MFA in your user settings.");
    this.name = "MfaRequiredError";
  }
};
var ResponseError = class extends _n8nworkflow.ApplicationError {
  // The HTTP status code of response
  
  // The error code in the response
  
  // The stack trace of the server
  
  /**
   * Creates an instance of ResponseError.
   * @param {string} message The error message
   * @param {number} [errorCode] The error code which can be used by frontend to identify the actual error
   * @param {number} [httpStatusCode] The HTTP status code the response should have
   * @param {string} [stack] The stack trace
   */
  constructor(message, options = {}) {
    super(message);
    this.name = "ResponseError";
    const { errorCode, httpStatusCode, stack } = options;
    if (errorCode) {
      this.errorCode = errorCode;
    }
    if (httpStatusCode) {
      this.httpStatusCode = httpStatusCode;
    }
    if (stack) {
      this.serverStackTrace = stack;
    }
  }
};
var legacyParamSerializer = (params) => Object.keys(params).filter((key) => params[key] !== void 0).map((key) => {
  if (Array.isArray(params[key])) {
    return params[key].map((v) => `${key}[]=${encodeURIComponent(v)}`).join("&");
  }
  if (typeof params[key] === "object") {
    params[key] = JSON.stringify(params[key]);
  }
  return `${key}=${encodeURIComponent(params[key])}`;
}).join("&");
async function request(config) {
  const { method, baseURL, endpoint, headers, data } = config;
  const options = {
    method,
    url: endpoint,
    baseURL,
    headers: _nullishCoalesce(headers, () => ( {}))
  };
  if (baseURL.startsWith("/")) {
    options.headers["browser-id"] = getBrowserId();
  }
  if (import.meta.env.NODE_ENV !== "production" && !baseURL.includes("api.n8n.io") && !baseURL.includes("n8n.cloud")) {
    options.withCredentials = _nullishCoalesce(options.withCredentials, () => ( true));
  }
  if (["POST", "PATCH", "PUT"].includes(method)) {
    options.data = data;
  } else if (data) {
    options.params = data;
    options.paramsSerializer = legacyParamSerializer;
  }
  try {
    const response = await _axios2.default.request(options);
    return response.data;
  } catch (error) {
    if (error.message === "Network Error") {
      throw new ResponseError("Can't connect to n8n.", {
        errorCode: NO_NETWORK_ERROR_CODE
      });
    }
    const errorResponseData = _optionalChain([error, 'access', _ => _.response, 'optionalAccess', _2 => _2.data]);
    if (_optionalChain([errorResponseData, 'optionalAccess', _3 => _3.mfaRequired]) === true) {
      throw new MfaRequiredError();
    }
    if (_optionalChain([errorResponseData, 'optionalAccess', _4 => _4.message]) !== void 0) {
      if (errorResponseData.name === "NodeApiError") {
        errorResponseData.httpStatusCode = error.response.status;
        throw errorResponseData;
      }
      throw new ResponseError(errorResponseData.message, {
        errorCode: errorResponseData.code,
        httpStatusCode: error.response.status,
        stack: errorResponseData.stack
      });
    }
    throw error;
  }
}
async function getFullApiResponse(context, method, endpoint, data) {
  const response = await request({
    method,
    baseURL: context.baseUrl,
    endpoint,
    headers: { "push-ref": context.pushRef },
    data
  });
  return response;
}
async function makeRestApiRequest(context, method, endpoint, data) {
  const response = await request({
    method,
    baseURL: context.baseUrl,
    endpoint,
    headers: { "push-ref": context.pushRef },
    data
  });
  return response.data;
}
async function get(baseURL, endpoint, params, headers) {
  return await request({ method: "GET", baseURL, endpoint, headers, data: params });
}
async function post(baseURL, endpoint, params, headers) {
  return await request({ method: "POST", baseURL, endpoint, headers, data: params });
}
async function patch(baseURL, endpoint, params, headers) {
  return await request({ method: "PATCH", baseURL, endpoint, headers, data: params });
}
async function streamRequest(context, apiEndpoint, payload, onChunk, onDone, onError, separator = STREAM_SEPERATOR, abortSignal) {
  const headers = {
    "browser-id": getBrowserId(),
    "Content-Type": "application/json"
  };
  const assistantRequest = {
    headers,
    method: "POST",
    credentials: "include",
    body: JSON.stringify(payload),
    signal: abortSignal
  };
  try {
    const response = await fetch(`${context.baseUrl}${apiEndpoint}`, assistantRequest);
    if (response.body) {
      const reader = response.body.getReader();
      const decoder = new TextDecoder("utf-8");
      let buffer = "";
      async function readStream() {
        const { done, value } = await reader.read();
        if (done) {
          _optionalChain([onDone, 'optionalCall', _5 => _5()]);
          return;
        }
        const chunk = decoder.decode(value);
        buffer += chunk;
        const splitChunks = buffer.split(separator);
        buffer = "";
        for (const splitChunk of splitChunks) {
          if (splitChunk) {
            let data;
            try {
              data = _n8nworkflow.jsonParse.call(void 0, splitChunk, { errorMessage: "Invalid json" });
            } catch (e) {
              buffer += splitChunk;
              continue;
            }
            try {
              if (response.ok) {
                _optionalChain([onChunk, 'optionalCall', _6 => _6(data)]);
              } else {
                const message = "message" in data ? data.message : response.statusText;
                _optionalChain([onError, 'optionalCall', _7 => _7(
                  new ResponseError(String(message), {
                    httpStatusCode: response.status
                  })
                )]);
              }
            } catch (e) {
              if (e instanceof Error) {
                _optionalChain([onError, 'optionalCall', _8 => _8(e)]);
              }
            }
          }
        }
        await readStream();
      }
      await readStream();
    } else if (onError) {
      onError(new Error(response.statusText));
    }
  } catch (e) {
    _assert.assert.call(void 0, e instanceof Error);
    _optionalChain([onError, 'optionalCall', _9 => _9(e)]);
  }
}













exports.NO_NETWORK_ERROR_CODE = NO_NETWORK_ERROR_CODE; exports.STREAM_SEPERATOR = STREAM_SEPERATOR; exports.MfaRequiredError = MfaRequiredError; exports.ResponseError = ResponseError; exports.request = request; exports.getFullApiResponse = getFullApiResponse; exports.makeRestApiRequest = makeRestApiRequest; exports.get = get; exports.post = post; exports.patch = patch; exports.streamRequest = streamRequest;
//# sourceMappingURL=chunk-76QO7IXK.cjs.map