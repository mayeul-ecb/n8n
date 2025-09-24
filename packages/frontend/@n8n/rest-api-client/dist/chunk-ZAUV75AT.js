import {
  get,
  post
} from "./chunk-NTAW2A35.js";

// src/api/cloudPlans.ts
async function getCurrentPlan(context) {
  return await get(context.baseUrl, "/admin/cloud-plan");
}
async function getCurrentUsage(context) {
  return await get(context.baseUrl, "/cloud/limits");
}
async function getCloudUserInfo(context) {
  return await get(context.baseUrl, "/cloud/proxy/user/me");
}
async function sendConfirmationEmail(context) {
  return await post(context.baseUrl, "/cloud/proxy/user/resend-confirmation-email");
}
async function getAdminPanelLoginCode(context) {
  return await get(context.baseUrl, "/cloud/proxy/login/code");
}

export {
  getCurrentPlan,
  getCurrentUsage,
  getCloudUserInfo,
  sendConfirmationEmail,
  getAdminPanelLoginCode
};
//# sourceMappingURL=chunk-ZAUV75AT.js.map