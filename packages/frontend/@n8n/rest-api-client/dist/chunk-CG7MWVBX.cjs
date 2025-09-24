"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk76QO7IXKcjs = require('./chunk-76QO7IXK.cjs');

// src/api/versions.ts
var _constants = require('@n8n/constants');
async function getNextVersions(endpoint, currentVersion, instanceId) {
  const headers = { [_constants.INSTANCE_ID_HEADER]: instanceId };
  return await _chunk76QO7IXKcjs.get.call(void 0, endpoint, currentVersion, {}, headers);
}
async function getWhatsNewSection(endpoint, currentVersion, instanceId) {
  const headers = {
    [_constants.INSTANCE_ID_HEADER]: instanceId,
    [_constants.INSTANCE_VERSION_HEADER]: currentVersion
  };
  return await _chunk76QO7IXKcjs.get.call(void 0, endpoint, "", {}, headers);
}




exports.getNextVersions = getNextVersions; exports.getWhatsNewSection = getWhatsNewSection;
//# sourceMappingURL=chunk-CG7MWVBX.cjs.map