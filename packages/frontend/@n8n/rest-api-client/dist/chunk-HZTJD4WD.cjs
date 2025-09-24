"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk76QO7IXKcjs = require('./chunk-76QO7IXK.cjs');

// src/api/users.ts
async function loginCurrentUser(context) {
  return await _chunk76QO7IXKcjs.makeRestApiRequest.call(void 0, context, "GET", "/login");
}
async function login(context, params) {
  return await _chunk76QO7IXKcjs.makeRestApiRequest.call(void 0, context, "POST", "/login", params);
}
async function logout(context) {
  await _chunk76QO7IXKcjs.makeRestApiRequest.call(void 0, context, "POST", "/logout");
}
async function setupOwner(context, params) {
  return await _chunk76QO7IXKcjs.makeRestApiRequest.call(void 0, 
    context,
    "POST",
    "/owner/setup",
    params
  );
}
async function validateSignupToken(context, params) {
  return await _chunk76QO7IXKcjs.makeRestApiRequest.call(void 0, context, "GET", "/resolve-signup-token", params);
}
async function signup(context, params) {
  const { inviteeId, ...props } = params;
  return await _chunk76QO7IXKcjs.makeRestApiRequest.call(void 0, 
    context,
    "POST",
    `/users/${params.inviteeId}`,
    props
  );
}
async function sendForgotPasswordEmail(context, params) {
  await _chunk76QO7IXKcjs.makeRestApiRequest.call(void 0, context, "POST", "/forgot-password", params);
}
async function validatePasswordToken(context, params) {
  await _chunk76QO7IXKcjs.makeRestApiRequest.call(void 0, context, "GET", "/resolve-password-token", params);
}
async function changePassword(context, params) {
  await _chunk76QO7IXKcjs.makeRestApiRequest.call(void 0, context, "POST", "/change-password", params);
}
async function updateCurrentUser(context, params) {
  return await _chunk76QO7IXKcjs.makeRestApiRequest.call(void 0, context, "PATCH", "/me", params);
}
async function updateCurrentUserSettings(context, settings) {
  return await _chunk76QO7IXKcjs.makeRestApiRequest.call(void 0, context, "PATCH", "/me/settings", settings);
}
async function updateOtherUserSettings(context, userId, settings) {
  return await _chunk76QO7IXKcjs.makeRestApiRequest.call(void 0, context, "PATCH", `/users/${userId}/settings`, settings);
}
async function updateCurrentUserPassword(context, params) {
  return await _chunk76QO7IXKcjs.makeRestApiRequest.call(void 0, context, "PATCH", "/me/password", params);
}
async function deleteUser(context, { id, transferId }) {
  await _chunk76QO7IXKcjs.makeRestApiRequest.call(void 0, context, "DELETE", `/users/${id}`, transferId ? { transferId } : {});
}
async function getUsers(context, filter) {
  return await _chunk76QO7IXKcjs.makeRestApiRequest.call(void 0, context, "GET", "/users", filter);
}
async function getInviteLink(context, { id }) {
  return await _chunk76QO7IXKcjs.makeRestApiRequest.call(void 0, context, "GET", `/users/${id}/invite-link`);
}
async function getPasswordResetLink(context, { id }) {
  return await _chunk76QO7IXKcjs.makeRestApiRequest.call(void 0, context, "GET", `/users/${id}/password-reset-link`);
}
async function submitPersonalizationSurvey(context, params) {
  await _chunk76QO7IXKcjs.makeRestApiRequest.call(void 0, context, "POST", "/me/survey", params);
}
async function updateGlobalRole(context, { id, newRoleName }) {
  return await _chunk76QO7IXKcjs.makeRestApiRequest.call(void 0, context, "PATCH", `/users/${id}/role`, { newRoleName });
}





















exports.loginCurrentUser = loginCurrentUser; exports.login = login; exports.logout = logout; exports.setupOwner = setupOwner; exports.validateSignupToken = validateSignupToken; exports.signup = signup; exports.sendForgotPasswordEmail = sendForgotPasswordEmail; exports.validatePasswordToken = validatePasswordToken; exports.changePassword = changePassword; exports.updateCurrentUser = updateCurrentUser; exports.updateCurrentUserSettings = updateCurrentUserSettings; exports.updateOtherUserSettings = updateOtherUserSettings; exports.updateCurrentUserPassword = updateCurrentUserPassword; exports.deleteUser = deleteUser; exports.getUsers = getUsers; exports.getInviteLink = getInviteLink; exports.getPasswordResetLink = getPasswordResetLink; exports.submitPersonalizationSurvey = submitPersonalizationSurvey; exports.updateGlobalRole = updateGlobalRole;
//# sourceMappingURL=chunk-HZTJD4WD.cjs.map