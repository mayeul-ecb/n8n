import {
  makeRestApiRequest
} from "./chunk-NTAW2A35.js";

// src/api/api-keys.ts
async function getApiKeys(context) {
  return await makeRestApiRequest(context, "GET", "/api-keys");
}
async function getApiKeyScopes(context) {
  return await makeRestApiRequest(context, "GET", "/api-keys/scopes");
}
async function createApiKey(context, payload) {
  return await makeRestApiRequest(context, "POST", "/api-keys", payload);
}
async function deleteApiKey(context, id) {
  return await makeRestApiRequest(context, "DELETE", `/api-keys/${id}`);
}
async function updateApiKey(context, id, payload) {
  return await makeRestApiRequest(context, "PATCH", `/api-keys/${id}`, payload);
}

export {
  getApiKeys,
  getApiKeyScopes,
  createApiKey,
  deleteApiKey,
  updateApiKey
};
//# sourceMappingURL=chunk-2SKC47YZ.js.map