import {
  makeRestApiRequest
} from "./chunk-NTAW2A35.js";

// src/api/sso.ts
var initSSO = async (context, redirectUrl = "") => {
  return await makeRestApiRequest(context, "GET", `/sso/saml/initsso?redirect=${redirectUrl}`);
};
var getSamlMetadata = async (context) => {
  return await makeRestApiRequest(context, "GET", "/sso/saml/metadata");
};
var getSamlConfig = async (context) => {
  return await makeRestApiRequest(context, "GET", "/sso/saml/config");
};
var saveSamlConfig = async (context, data) => {
  return await makeRestApiRequest(context, "POST", "/sso/saml/config", data);
};
var toggleSamlConfig = async (context, data) => {
  return await makeRestApiRequest(context, "POST", "/sso/saml/config/toggle", data);
};
var testSamlConfig = async (context) => {
  return await makeRestApiRequest(context, "GET", "/sso/saml/config/test");
};
var getOidcConfig = async (context) => {
  return await makeRestApiRequest(context, "GET", "/sso/oidc/config");
};
var saveOidcConfig = async (context, data) => {
  return await makeRestApiRequest(context, "POST", "/sso/oidc/config", data);
};
var initOidcLogin = async (context) => {
  return await makeRestApiRequest(context, "GET", "/sso/oidc/login");
};

export {
  initSSO,
  getSamlMetadata,
  getSamlConfig,
  saveSamlConfig,
  toggleSamlConfig,
  testSamlConfig,
  getOidcConfig,
  saveOidcConfig,
  initOidcLogin
};
//# sourceMappingURL=chunk-NXNKIFZJ.js.map