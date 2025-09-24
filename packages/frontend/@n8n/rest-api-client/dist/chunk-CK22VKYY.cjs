"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk76QO7IXKcjs = require('./chunk-76QO7IXK.cjs');

// src/api/api-keys.ts
async function getApiKeys(context) {
  return await _chunk76QO7IXKcjs.makeRestApiRequest.call(void 0, context, "GET", "/api-keys");
}
async function getApiKeyScopes(context) {
  return await _chunk76QO7IXKcjs.makeRestApiRequest.call(void 0, context, "GET", "/api-keys/scopes");
}
async function createApiKey(context, payload) {
  return await _chunk76QO7IXKcjs.makeRestApiRequest.call(void 0, context, "POST", "/api-keys", payload);
}
async function deleteApiKey(context, id) {
  return await _chunk76QO7IXKcjs.makeRestApiRequest.call(void 0, context, "DELETE", `/api-keys/${id}`);
}
async function updateApiKey(context, id, payload) {
  return await _chunk76QO7IXKcjs.makeRestApiRequest.call(void 0, context, "PATCH", `/api-keys/${id}`, payload);
}







exports.getApiKeys = getApiKeys; exports.getApiKeyScopes = getApiKeyScopes; exports.createApiKey = createApiKey; exports.deleteApiKey = deleteApiKey; exports.updateApiKey = updateApiKey;
//# sourceMappingURL=chunk-CK22VKYY.cjs.map