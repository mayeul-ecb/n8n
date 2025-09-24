"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk76QO7IXKcjs = require('./chunk-76QO7IXK.cjs');

// src/api/webhooks.ts
var findWebhook = async (context, data) => {
  return await _chunk76QO7IXKcjs.makeRestApiRequest.call(void 0, context, "POST", "/webhooks/find", data);
};



exports.findWebhook = findWebhook;
//# sourceMappingURL=chunk-6EOXPQPA.cjs.map