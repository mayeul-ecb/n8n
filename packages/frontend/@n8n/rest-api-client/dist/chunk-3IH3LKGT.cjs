"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _chunk76QO7IXKcjs = require('./chunk-76QO7IXK.cjs');

// src/api/cloudPlans.ts
async function getCurrentPlan(context) {
  return await _chunk76QO7IXKcjs.get.call(void 0, context.baseUrl, "/admin/cloud-plan");
}
async function getCurrentUsage(context) {
  return await _chunk76QO7IXKcjs.get.call(void 0, context.baseUrl, "/cloud/limits");
}
async function getCloudUserInfo(context) {
  return await _chunk76QO7IXKcjs.get.call(void 0, context.baseUrl, "/cloud/proxy/user/me");
}
async function sendConfirmationEmail(context) {
  return await _chunk76QO7IXKcjs.post.call(void 0, context.baseUrl, "/cloud/proxy/user/resend-confirmation-email");
}
async function getAdminPanelLoginCode(context) {
  return await _chunk76QO7IXKcjs.get.call(void 0, context.baseUrl, "/cloud/proxy/login/code");
}







exports.getCurrentPlan = getCurrentPlan; exports.getCurrentUsage = getCurrentUsage; exports.getCloudUserInfo = getCloudUserInfo; exports.sendConfirmationEmail = sendConfirmationEmail; exports.getAdminPanelLoginCode = getAdminPanelLoginCode;
//# sourceMappingURL=chunk-3IH3LKGT.cjs.map