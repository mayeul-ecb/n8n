"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _chunk76QO7IXKcjs = require('./chunk-76QO7IXK.cjs');

// src/api/nodeTypes.ts
var _axios = require('axios'); var _axios2 = _interopRequireDefault(_axios);
var _n8nworkflow = require('n8n-workflow');
async function fetchNodeTypesJsonWithRetry(url, retries = 5, delay = 500) {
  for (let attempt = 0; attempt < retries; attempt++) {
    const response = await _axios2.default.get(url, { withCredentials: true });
    if (typeof response.data === "object" && response.data !== null) {
      return response.data;
    }
    await _n8nworkflow.sleep.call(void 0, delay * attempt);
  }
  throw new Error("Could not fetch node types");
}
async function getNodeTypes(baseUrl) {
  return await fetchNodeTypesJsonWithRetry(baseUrl + "types/nodes.json");
}
async function fetchCommunityNodeTypes(context) {
  return await _chunk76QO7IXKcjs.makeRestApiRequest.call(void 0, context, "GET", "/community-node-types");
}
async function fetchCommunityNodeAttributes(context, type) {
  return await _chunk76QO7IXKcjs.makeRestApiRequest.call(void 0, 
    context,
    "GET",
    `/community-node-types/${encodeURIComponent(type)}`
  );
}
async function getNodeTranslationHeaders(context) {
  return await _chunk76QO7IXKcjs.makeRestApiRequest.call(void 0, context, "GET", "/node-translation-headers");
}
async function getNodesInformation(context, nodeInfos) {
  return await _chunk76QO7IXKcjs.makeRestApiRequest.call(void 0, context, "POST", "/node-types", { nodeInfos });
}
async function getNodeParameterOptions(context, sendData) {
  return await _chunk76QO7IXKcjs.makeRestApiRequest.call(void 0, context, "POST", "/dynamic-node-parameters/options", sendData);
}
async function getResourceLocatorResults(context, sendData) {
  return await _chunk76QO7IXKcjs.makeRestApiRequest.call(void 0, 
    context,
    "POST",
    "/dynamic-node-parameters/resource-locator-results",
    sendData
  );
}
async function getResourceMapperFields(context, sendData) {
  return await _chunk76QO7IXKcjs.makeRestApiRequest.call(void 0, 
    context,
    "POST",
    "/dynamic-node-parameters/resource-mapper-fields",
    sendData
  );
}
async function getLocalResourceMapperFields(context, sendData) {
  return await _chunk76QO7IXKcjs.makeRestApiRequest.call(void 0, 
    context,
    "POST",
    "/dynamic-node-parameters/local-resource-mapper-fields",
    sendData
  );
}
async function getNodeParameterActionResult(context, sendData) {
  return await _chunk76QO7IXKcjs.makeRestApiRequest.call(void 0, 
    context,
    "POST",
    "/dynamic-node-parameters/action-result",
    sendData
  );
}












exports.getNodeTypes = getNodeTypes; exports.fetchCommunityNodeTypes = fetchCommunityNodeTypes; exports.fetchCommunityNodeAttributes = fetchCommunityNodeAttributes; exports.getNodeTranslationHeaders = getNodeTranslationHeaders; exports.getNodesInformation = getNodesInformation; exports.getNodeParameterOptions = getNodeParameterOptions; exports.getResourceLocatorResults = getResourceLocatorResults; exports.getResourceMapperFields = getResourceMapperFields; exports.getLocalResourceMapperFields = getLocalResourceMapperFields; exports.getNodeParameterActionResult = getNodeParameterActionResult;
//# sourceMappingURL=chunk-ICKNSBDI.cjs.map