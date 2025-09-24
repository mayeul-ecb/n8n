"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } }

var _chunkLL25Q6HOcjs = require('./chunk-LL25Q6HO.cjs');


var _chunkTI4WVUCBcjs = require('./chunk-TI4WVUCB.cjs');

// src/useRootStore.ts
var _n8nworkflow = require('n8n-workflow');
var _pinia = require('pinia');
var _vue = require('vue');
var { VUE_APP_URL_BASE_API } = import.meta.env;
var useRootStore = _pinia.defineStore.call(void 0, _chunkLL25Q6HOcjs.STORES.ROOT, () => {
  const state = _vue.ref.call(void 0, {
    baseUrl: _nullishCoalesce(VUE_APP_URL_BASE_API, () => ( window.BASE_PATH)),
    restEndpoint: _nullishCoalesce(_chunkTI4WVUCBcjs.getConfigFromMetaTag.call(void 0, "rest-endpoint"), () => ( "rest")),
    defaultLocale: "en",
    endpointForm: "form",
    endpointFormTest: "form-test",
    endpointFormWaiting: "form-waiting",
    endpointMcp: "mcp",
    endpointMcpTest: "mcp-test",
    endpointWebhook: "webhook",
    endpointWebhookTest: "webhook-test",
    endpointWebhookWaiting: "webhook-waiting",
    timezone: "America/New_York",
    executionTimeout: -1,
    maxExecutionTimeout: Number.MAX_SAFE_INTEGER,
    versionCli: "0.0.0",
    oauthCallbackUrls: {},
    n8nMetadata: {},
    pushRef: _n8nworkflow.randomString.call(void 0, 10).toLowerCase(),
    urlBaseWebhook: "http://localhost:5678/",
    urlBaseEditor: "http://localhost:5678",
    instanceId: "",
    binaryDataMode: "default"
  });
  const baseUrl = _vue.computed.call(void 0, () => state.value.baseUrl);
  const formUrl = _vue.computed.call(void 0, () => `${state.value.urlBaseWebhook}${state.value.endpointForm}`);
  const formTestUrl = _vue.computed.call(void 0, () => `${state.value.urlBaseEditor}${state.value.endpointFormTest}`);
  const formWaitingUrl = _vue.computed.call(void 0, 
    () => `${state.value.urlBaseEditor}${state.value.endpointFormWaiting}`
  );
  const webhookUrl = _vue.computed.call(void 0, () => `${state.value.urlBaseWebhook}${state.value.endpointWebhook}`);
  const webhookTestUrl = _vue.computed.call(void 0, 
    () => `${state.value.urlBaseEditor}${state.value.endpointWebhookTest}`
  );
  const webhookWaitingUrl = _vue.computed.call(void 0, 
    () => `${state.value.urlBaseEditor}${state.value.endpointWebhookWaiting}`
  );
  const mcpUrl = _vue.computed.call(void 0, () => `${state.value.urlBaseWebhook}${state.value.endpointMcp}`);
  const mcpTestUrl = _vue.computed.call(void 0, () => `${state.value.urlBaseEditor}${state.value.endpointMcpTest}`);
  const pushRef = _vue.computed.call(void 0, () => state.value.pushRef);
  const binaryDataMode = _vue.computed.call(void 0, () => state.value.binaryDataMode);
  const defaultLocale = _vue.computed.call(void 0, () => state.value.defaultLocale);
  const urlBaseEditor = _vue.computed.call(void 0, () => state.value.urlBaseEditor);
  const instanceId = _vue.computed.call(void 0, () => state.value.instanceId);
  const versionCli = _vue.computed.call(void 0, () => state.value.versionCli);
  const OAuthCallbackUrls = _vue.computed.call(void 0, () => state.value.oauthCallbackUrls);
  const restUrl = _vue.computed.call(void 0, () => `${state.value.baseUrl}${state.value.restEndpoint}`);
  const executionTimeout = _vue.computed.call(void 0, () => state.value.executionTimeout);
  const maxExecutionTimeout = _vue.computed.call(void 0, () => state.value.maxExecutionTimeout);
  const timezone = _vue.computed.call(void 0, () => state.value.timezone);
  const restApiContext = _vue.computed.call(void 0, () => ({
    baseUrl: restUrl.value,
    pushRef: state.value.pushRef
  }));
  const setUrlBaseWebhook = (value) => {
    const url = value.endsWith("/") ? value : `${value}/`;
    state.value.urlBaseWebhook = url;
  };
  const setUrlBaseEditor = (value) => {
    const url = value.endsWith("/") ? value : `${value}/`;
    state.value.urlBaseEditor = url;
  };
  const setEndpointForm = (value) => {
    state.value.endpointForm = value;
  };
  const setEndpointFormTest = (value) => {
    state.value.endpointFormTest = value;
  };
  const setEndpointFormWaiting = (value) => {
    state.value.endpointFormWaiting = value;
  };
  const setEndpointWebhook = (value) => {
    state.value.endpointWebhook = value;
  };
  const setEndpointWebhookTest = (value) => {
    state.value.endpointWebhookTest = value;
  };
  const setEndpointWebhookWaiting = (value) => {
    state.value.endpointWebhookWaiting = value;
  };
  const setEndpointMcp = (value) => {
    state.value.endpointMcp = value;
  };
  const setEndpointMcpTest = (value) => {
    state.value.endpointMcpTest = value;
  };
  const setTimezone = (value) => {
    state.value.timezone = value;
    _n8nworkflow.setGlobalState.call(void 0, { defaultTimezone: value });
  };
  const setExecutionTimeout = (value) => {
    state.value.executionTimeout = value;
  };
  const setMaxExecutionTimeout = (value) => {
    state.value.maxExecutionTimeout = value;
  };
  const setVersionCli = (value) => {
    state.value.versionCli = value;
  };
  const setInstanceId = (value) => {
    state.value.instanceId = value;
  };
  const setOauthCallbackUrls = (value) => {
    state.value.oauthCallbackUrls = value;
  };
  const setN8nMetadata = (value) => {
    state.value.n8nMetadata = value;
  };
  const setDefaultLocale = (value) => {
    state.value.defaultLocale = value;
  };
  const setBinaryDataMode = (value) => {
    state.value.binaryDataMode = value;
  };
  return {
    baseUrl,
    formUrl,
    formTestUrl,
    formWaitingUrl,
    mcpUrl,
    mcpTestUrl,
    webhookUrl,
    webhookTestUrl,
    webhookWaitingUrl,
    restUrl,
    restApiContext,
    urlBaseEditor,
    versionCli,
    instanceId,
    pushRef,
    defaultLocale,
    binaryDataMode,
    OAuthCallbackUrls,
    executionTimeout,
    maxExecutionTimeout,
    timezone,
    setUrlBaseWebhook,
    setUrlBaseEditor,
    setEndpointForm,
    setEndpointFormTest,
    setEndpointFormWaiting,
    setEndpointWebhook,
    setEndpointWebhookTest,
    setEndpointWebhookWaiting,
    setEndpointMcp,
    setEndpointMcpTest,
    setTimezone,
    setExecutionTimeout,
    setMaxExecutionTimeout,
    setVersionCli,
    setInstanceId,
    setOauthCallbackUrls,
    setN8nMetadata,
    setDefaultLocale,
    setBinaryDataMode
  };
});


exports.useRootStore = useRootStore;
//# sourceMappingURL=useRootStore.cjs.map