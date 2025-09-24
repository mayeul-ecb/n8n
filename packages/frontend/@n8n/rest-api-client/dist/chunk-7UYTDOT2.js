import {
  makeRestApiRequest
} from "./chunk-NTAW2A35.js";

// src/api/externalSecrets.ee.ts
var getExternalSecrets = async (context) => {
  return await makeRestApiRequest(context, "GET", "/external-secrets/secrets");
};
var getExternalSecretsProviders = async (context) => {
  return await makeRestApiRequest(context, "GET", "/external-secrets/providers");
};
var getExternalSecretsProvider = async (context, id) => {
  return await makeRestApiRequest(context, "GET", `/external-secrets/providers/${id}`);
};
var testExternalSecretsProviderConnection = async (context, id, data) => {
  return await makeRestApiRequest(context, "POST", `/external-secrets/providers/${id}/test`, data);
};
var updateProvider = async (context, id, data) => {
  return await makeRestApiRequest(context, "POST", `/external-secrets/providers/${id}`, data);
};
var reloadProvider = async (context, id) => {
  return await makeRestApiRequest(context, "POST", `/external-secrets/providers/${id}/update`);
};
var connectProvider = async (context, id, connected) => {
  return await makeRestApiRequest(context, "POST", `/external-secrets/providers/${id}/connect`, {
    connected
  });
};

export {
  getExternalSecrets,
  getExternalSecretsProviders,
  getExternalSecretsProvider,
  testExternalSecretsProviderConnection,
  updateProvider,
  reloadProvider,
  connectProvider
};
//# sourceMappingURL=chunk-7UYTDOT2.js.map