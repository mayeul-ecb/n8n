"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk76QO7IXKcjs = require('./chunk-76QO7IXK.cjs');

// src/api/externalSecrets.ee.ts
var getExternalSecrets = async (context) => {
  return await _chunk76QO7IXKcjs.makeRestApiRequest.call(void 0, context, "GET", "/external-secrets/secrets");
};
var getExternalSecretsProviders = async (context) => {
  return await _chunk76QO7IXKcjs.makeRestApiRequest.call(void 0, context, "GET", "/external-secrets/providers");
};
var getExternalSecretsProvider = async (context, id) => {
  return await _chunk76QO7IXKcjs.makeRestApiRequest.call(void 0, context, "GET", `/external-secrets/providers/${id}`);
};
var testExternalSecretsProviderConnection = async (context, id, data) => {
  return await _chunk76QO7IXKcjs.makeRestApiRequest.call(void 0, context, "POST", `/external-secrets/providers/${id}/test`, data);
};
var updateProvider = async (context, id, data) => {
  return await _chunk76QO7IXKcjs.makeRestApiRequest.call(void 0, context, "POST", `/external-secrets/providers/${id}`, data);
};
var reloadProvider = async (context, id) => {
  return await _chunk76QO7IXKcjs.makeRestApiRequest.call(void 0, context, "POST", `/external-secrets/providers/${id}/update`);
};
var connectProvider = async (context, id, connected) => {
  return await _chunk76QO7IXKcjs.makeRestApiRequest.call(void 0, context, "POST", `/external-secrets/providers/${id}/connect`, {
    connected
  });
};









exports.getExternalSecrets = getExternalSecrets; exports.getExternalSecretsProviders = getExternalSecretsProviders; exports.getExternalSecretsProvider = getExternalSecretsProvider; exports.testExternalSecretsProviderConnection = testExternalSecretsProviderConnection; exports.updateProvider = updateProvider; exports.reloadProvider = reloadProvider; exports.connectProvider = connectProvider;
//# sourceMappingURL=chunk-HVYFFT5M.cjs.map