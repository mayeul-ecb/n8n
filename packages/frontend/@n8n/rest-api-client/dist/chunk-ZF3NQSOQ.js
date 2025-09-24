import {
  makeRestApiRequest
} from "./chunk-NTAW2A35.js";

// src/api/nodeTypes.ts
import axios from "axios";
import { sleep } from "n8n-workflow";
async function fetchNodeTypesJsonWithRetry(url, retries = 5, delay = 500) {
  for (let attempt = 0; attempt < retries; attempt++) {
    const response = await axios.get(url, { withCredentials: true });
    if (typeof response.data === "object" && response.data !== null) {
      return response.data;
    }
    await sleep(delay * attempt);
  }
  throw new Error("Could not fetch node types");
}
async function getNodeTypes(baseUrl) {
  return await fetchNodeTypesJsonWithRetry(baseUrl + "types/nodes.json");
}
async function fetchCommunityNodeTypes(context) {
  return await makeRestApiRequest(context, "GET", "/community-node-types");
}
async function fetchCommunityNodeAttributes(context, type) {
  return await makeRestApiRequest(
    context,
    "GET",
    `/community-node-types/${encodeURIComponent(type)}`
  );
}
async function getNodeTranslationHeaders(context) {
  return await makeRestApiRequest(context, "GET", "/node-translation-headers");
}
async function getNodesInformation(context, nodeInfos) {
  return await makeRestApiRequest(context, "POST", "/node-types", { nodeInfos });
}
async function getNodeParameterOptions(context, sendData) {
  return await makeRestApiRequest(context, "POST", "/dynamic-node-parameters/options", sendData);
}
async function getResourceLocatorResults(context, sendData) {
  return await makeRestApiRequest(
    context,
    "POST",
    "/dynamic-node-parameters/resource-locator-results",
    sendData
  );
}
async function getResourceMapperFields(context, sendData) {
  return await makeRestApiRequest(
    context,
    "POST",
    "/dynamic-node-parameters/resource-mapper-fields",
    sendData
  );
}
async function getLocalResourceMapperFields(context, sendData) {
  return await makeRestApiRequest(
    context,
    "POST",
    "/dynamic-node-parameters/local-resource-mapper-fields",
    sendData
  );
}
async function getNodeParameterActionResult(context, sendData) {
  return await makeRestApiRequest(
    context,
    "POST",
    "/dynamic-node-parameters/action-result",
    sendData
  );
}

export {
  getNodeTypes,
  fetchCommunityNodeTypes,
  fetchCommunityNodeAttributes,
  getNodeTranslationHeaders,
  getNodesInformation,
  getNodeParameterOptions,
  getResourceLocatorResults,
  getResourceMapperFields,
  getLocalResourceMapperFields,
  getNodeParameterActionResult
};
//# sourceMappingURL=chunk-ZF3NQSOQ.js.map