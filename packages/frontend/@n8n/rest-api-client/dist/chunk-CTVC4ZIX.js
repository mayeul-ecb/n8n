import {
  makeRestApiRequest
} from "./chunk-NTAW2A35.js";

// src/api/ldap.ts
async function getLdapConfig(context) {
  return await makeRestApiRequest(context, "GET", "/ldap/config");
}
async function testLdapConnection(context) {
  return await makeRestApiRequest(context, "POST", "/ldap/test-connection");
}
async function updateLdapConfig(context, adConfig) {
  return await makeRestApiRequest(
    context,
    "PUT",
    "/ldap/config",
    adConfig
  );
}
async function runLdapSync(context, data) {
  return await makeRestApiRequest(context, "POST", "/ldap/sync", data);
}
async function getLdapSynchronizations(context, pagination) {
  return await makeRestApiRequest(context, "GET", "/ldap/sync", pagination);
}

export {
  getLdapConfig,
  testLdapConnection,
  updateLdapConfig,
  runLdapSync,
  getLdapSynchronizations
};
//# sourceMappingURL=chunk-CTVC4ZIX.js.map