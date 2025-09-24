"use strict";Object.defineProperty(exports, "__esModule", {value: true});



var _chunk76QO7IXKcjs = require('./chunk-76QO7IXK.cjs');

// src/api/communityNodes.ts
var _constants = require('@n8n/constants');
async function getInstalledCommunityNodes(context) {
  const response = await _chunk76QO7IXKcjs.get.call(void 0, context.baseUrl, "/community-packages");
  return response.data || [];
}
async function installNewPackage(context, name, verify, version) {
  return await _chunk76QO7IXKcjs.post.call(void 0, context.baseUrl, "/community-packages", { name, verify, version });
}
async function uninstallPackage(context, name) {
  return await _chunk76QO7IXKcjs.makeRestApiRequest.call(void 0, context, "DELETE", "/community-packages", { name });
}
async function updatePackage(context, name, version, checksum) {
  return await _chunk76QO7IXKcjs.makeRestApiRequest.call(void 0, context, "PATCH", "/community-packages", {
    name,
    version,
    checksum
  });
}
async function getAvailableCommunityPackageCount() {
  const response = await _chunk76QO7IXKcjs.get.call(void 0, 
    _constants.NPM_COMMUNITY_NODE_SEARCH_API_URL,
    "search?q=keywords:n8n-community-node-package"
  );
  return response.total || 0;
}







exports.getInstalledCommunityNodes = getInstalledCommunityNodes; exports.installNewPackage = installNewPackage; exports.uninstallPackage = uninstallPackage; exports.updatePackage = updatePackage; exports.getAvailableCommunityPackageCount = getAvailableCommunityPackageCount;
//# sourceMappingURL=chunk-UJI6HACT.cjs.map