"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk76QO7IXKcjs = require('./chunk-76QO7IXK.cjs');

// src/api/sso.ts
var initSSO = async (context, redirectUrl = "") => {
  return await _chunk76QO7IXKcjs.makeRestApiRequest.call(void 0, context, "GET", `/sso/saml/initsso?redirect=${redirectUrl}`);
};
var getSamlMetadata = async (context) => {
  return await _chunk76QO7IXKcjs.makeRestApiRequest.call(void 0, context, "GET", "/sso/saml/metadata");
};
var getSamlConfig = async (context) => {
  return await _chunk76QO7IXKcjs.makeRestApiRequest.call(void 0, context, "GET", "/sso/saml/config");
};
var saveSamlConfig = async (context, data) => {
  return await _chunk76QO7IXKcjs.makeRestApiRequest.call(void 0, context, "POST", "/sso/saml/config", data);
};
var toggleSamlConfig = async (context, data) => {
  return await _chunk76QO7IXKcjs.makeRestApiRequest.call(void 0, context, "POST", "/sso/saml/config/toggle", data);
};
var testSamlConfig = async (context) => {
  return await _chunk76QO7IXKcjs.makeRestApiRequest.call(void 0, context, "GET", "/sso/saml/config/test");
};
var getOidcConfig = async (context) => {
  return await _chunk76QO7IXKcjs.makeRestApiRequest.call(void 0, context, "GET", "/sso/oidc/config");
};
var saveOidcConfig = async (context, data) => {
  return await _chunk76QO7IXKcjs.makeRestApiRequest.call(void 0, context, "POST", "/sso/oidc/config", data);
};
var initOidcLogin = async (context) => {
  return await _chunk76QO7IXKcjs.makeRestApiRequest.call(void 0, context, "GET", "/sso/oidc/login");
};











exports.initSSO = initSSO; exports.getSamlMetadata = getSamlMetadata; exports.getSamlConfig = getSamlConfig; exports.saveSamlConfig = saveSamlConfig; exports.toggleSamlConfig = toggleSamlConfig; exports.testSamlConfig = testSamlConfig; exports.getOidcConfig = getOidcConfig; exports.saveOidcConfig = saveOidcConfig; exports.initOidcLogin = initOidcLogin;
//# sourceMappingURL=chunk-HVKVUYHG.cjs.map