"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk76QO7IXKcjs = require('./chunk-76QO7IXK.cjs');

// src/api/mfa.ts
async function canEnableMFA(context) {
  return await _chunk76QO7IXKcjs.makeRestApiRequest.call(void 0, context, "POST", "/mfa/can-enable");
}
async function getMfaQR(context) {
  return await _chunk76QO7IXKcjs.makeRestApiRequest.call(void 0, context, "GET", "/mfa/qr");
}
async function enableMfa(context, data) {
  return await _chunk76QO7IXKcjs.makeRestApiRequest.call(void 0, context, "POST", "/mfa/enable", data);
}
async function verifyMfaCode(context, data) {
  return await _chunk76QO7IXKcjs.makeRestApiRequest.call(void 0, context, "POST", "/mfa/verify", data);
}
async function disableMfa(context, data) {
  return await _chunk76QO7IXKcjs.makeRestApiRequest.call(void 0, context, "POST", "/mfa/disable", data);
}
async function updateEnforceMfa(context, enforce) {
  return await _chunk76QO7IXKcjs.makeRestApiRequest.call(void 0, context, "POST", "/mfa/enforce-mfa", {
    enforce
  });
}








exports.canEnableMFA = canEnableMFA; exports.getMfaQR = getMfaQR; exports.enableMfa = enableMfa; exports.verifyMfaCode = verifyMfaCode; exports.disableMfa = disableMfa; exports.updateEnforceMfa = updateEnforceMfa;
//# sourceMappingURL=chunk-6ZTX4I3G.cjs.map