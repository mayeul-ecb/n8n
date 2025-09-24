// src/utils.ts
import { BROWSER_ID_STORAGE_KEY } from "@n8n/constants";
import { assert } from "@n8n/utils/assert";
import axios from "axios";
import { ApplicationError, jsonParse } from "n8n-workflow";
var getBrowserId = () => {
  let browserId = localStorage.getItem(BROWSER_ID_STORAGE_KEY);
  if (!browserId) {
    browserId = crypto.randomUUID();
    localStorage.setItem(BROWSER_ID_STORAGE_KEY, browserId);
  }
  return browserId;
};
var NO_NETWORK_ERROR_CODE = 999;
var STREAM_SEPERATOR = "\u29C9\u21CB\u21CB\u27BD\u2311\u29C9\xA7\xA7\n";
var MfaRequiredError = class extends ApplicationError {
  constructor() {
    super("MFA is required to access this resource. Please set up MFA in your user settings.");
    this.name = "MfaRequiredError";
  }
};
var ResponseError = class extends ApplicationError {
  // The HTTP status code of response
  httpStatusCode;
  // The error code in the response
  errorCode;
  // The stack trace of the server
  serverStackTrace;
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
    headers: headers ?? {}
  };
  if (baseURL.startsWith("/")) {
    options.headers["browser-id"] = getBrowserId();
  }
  if (import.meta.env.NODE_ENV !== "production" && !baseURL.includes("api.n8n.io") && !baseURL.includes("n8n.cloud")) {
    options.withCredentials = options.withCredentials ?? true;
  }
  if (["POST", "PATCH", "PUT"].includes(method)) {
    options.data = data;
  } else if (data) {
    options.params = data;
    options.paramsSerializer = legacyParamSerializer;
  }
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    if (error.message === "Network Error") {
      throw new ResponseError("Can't connect to n8n.", {
        errorCode: NO_NETWORK_ERROR_CODE
      });
    }
    const errorResponseData = error.response?.data;
    if (errorResponseData?.mfaRequired === true) {
      throw new MfaRequiredError();
    }
    if (errorResponseData?.message !== void 0) {
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
          onDone?.();
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
              data = jsonParse(splitChunk, { errorMessage: "Invalid json" });
            } catch (e) {
              buffer += splitChunk;
              continue;
            }
            try {
              if (response.ok) {
                onChunk?.(data);
              } else {
                const message = "message" in data ? data.message : response.statusText;
                onError?.(
                  new ResponseError(String(message), {
                    httpStatusCode: response.status
                  })
                );
              }
            } catch (e) {
              if (e instanceof Error) {
                onError?.(e);
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
    assert(e instanceof Error);
    onError?.(e);
  }
}

export {
  NO_NETWORK_ERROR_CODE,
  STREAM_SEPERATOR,
  MfaRequiredError,
  ResponseError,
  request,
  getFullApiResponse,
  makeRestApiRequest,
  get,
  post,
  patch,
  streamRequest
};
//# sourceMappingURL=chunk-NTAW2A35.js.map