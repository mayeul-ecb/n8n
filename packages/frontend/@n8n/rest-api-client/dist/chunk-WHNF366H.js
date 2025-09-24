import {
  makeRestApiRequest
} from "./chunk-NTAW2A35.js";

// src/api/mfa.ts
async function canEnableMFA(context) {
  return await makeRestApiRequest(context, "POST", "/mfa/can-enable");
}
async function getMfaQR(context) {
  return await makeRestApiRequest(context, "GET", "/mfa/qr");
}
async function enableMfa(context, data) {
  return await makeRestApiRequest(context, "POST", "/mfa/enable", data);
}
async function verifyMfaCode(context, data) {
  return await makeRestApiRequest(context, "POST", "/mfa/verify", data);
}
async function disableMfa(context, data) {
  return await makeRestApiRequest(context, "POST", "/mfa/disable", data);
}
async function updateEnforceMfa(context, enforce) {
  return await makeRestApiRequest(context, "POST", "/mfa/enforce-mfa", {
    enforce
  });
}

export {
  canEnableMFA,
  getMfaQR,
  enableMfa,
  verifyMfaCode,
  disableMfa,
  updateEnforceMfa
};
//# sourceMappingURL=chunk-WHNF366H.js.map