"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk76QO7IXKcjs = require('./chunk-76QO7IXK.cjs');

// src/api/ldap.ts
async function getLdapConfig(context) {
  return await _chunk76QO7IXKcjs.makeRestApiRequest.call(void 0, context, "GET", "/ldap/config");
}
async function testLdapConnection(context) {
  return await _chunk76QO7IXKcjs.makeRestApiRequest.call(void 0, context, "POST", "/ldap/test-connection");
}
async function updateLdapConfig(context, adConfig) {
  return await _chunk76QO7IXKcjs.makeRestApiRequest.call(void 0, 
    context,
    "PUT",
    "/ldap/config",
    adConfig
  );
}
async function runLdapSync(context, data) {
  return await _chunk76QO7IXKcjs.makeRestApiRequest.call(void 0, context, "POST", "/ldap/sync", data);
}
async function getLdapSynchronizations(context, pagination) {
  return await _chunk76QO7IXKcjs.makeRestApiRequest.call(void 0, context, "GET", "/ldap/sync", pagination);
}







exports.getLdapConfig = getLdapConfig; exports.testLdapConnection = testLdapConnection; exports.updateLdapConfig = updateLdapConfig; exports.runLdapSync = runLdapSync; exports.getLdapSynchronizations = getLdapSynchronizations;
//# sourceMappingURL=chunk-FQANWCTG.cjs.map