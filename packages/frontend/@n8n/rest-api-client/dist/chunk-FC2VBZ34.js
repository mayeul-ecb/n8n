import {
  get,
  makeRestApiRequest,
  post
} from "./chunk-NTAW2A35.js";

// src/api/communityNodes.ts
import { NPM_COMMUNITY_NODE_SEARCH_API_URL } from "@n8n/constants";
async function getInstalledCommunityNodes(context) {
  const response = await get(context.baseUrl, "/community-packages");
  return response.data || [];
}
async function installNewPackage(context, name, verify, version) {
  return await post(context.baseUrl, "/community-packages", { name, verify, version });
}
async function uninstallPackage(context, name) {
  return await makeRestApiRequest(context, "DELETE", "/community-packages", { name });
}
async function updatePackage(context, name, version, checksum) {
  return await makeRestApiRequest(context, "PATCH", "/community-packages", {
    name,
    version,
    checksum
  });
}
async function getAvailableCommunityPackageCount() {
  const response = await get(
    NPM_COMMUNITY_NODE_SEARCH_API_URL,
    "search?q=keywords:n8n-community-node-package"
  );
  return response.total || 0;
}

export {
  getInstalledCommunityNodes,
  installNewPackage,
  uninstallPackage,
  updatePackage,
  getAvailableCommunityPackageCount
};
//# sourceMappingURL=chunk-FC2VBZ34.js.map