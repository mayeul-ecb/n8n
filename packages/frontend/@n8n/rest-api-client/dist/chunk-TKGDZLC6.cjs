"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _chunk76QO7IXKcjs = require('./chunk-76QO7IXK.cjs');

// src/api/prompts.ts
var _constants = require('@n8n/constants');
async function getPromptsData(instanceId, userId) {
  return await _chunk76QO7IXKcjs.get.call(void 0, 
    _constants.N8N_IO_BASE_URL,
    "/prompts",
    {},
    { "n8n-instance-id": instanceId, "n8n-user-id": userId }
  );
}
async function submitContactInfo(instanceId, userId, email) {
  return await _chunk76QO7IXKcjs.post.call(void 0, 
    _constants.N8N_IO_BASE_URL,
    "/prompt",
    { email },
    { "n8n-instance-id": instanceId, "n8n-user-id": userId }
  );
}




exports.getPromptsData = getPromptsData; exports.submitContactInfo = submitContactInfo;
//# sourceMappingURL=chunk-TKGDZLC6.cjs.map