"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk76QO7IXKcjs = require('./chunk-76QO7IXK.cjs');

// src/api/events.ts
async function sessionStarted(context) {
  return await _chunk76QO7IXKcjs.makeRestApiRequest.call(void 0, context, "GET", "/events/session-started");
}



exports.sessionStarted = sessionStarted;
//# sourceMappingURL=chunk-VFQIXX6C.cjs.map