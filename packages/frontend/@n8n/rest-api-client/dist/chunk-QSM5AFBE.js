import {
  makeRestApiRequest
} from "./chunk-NTAW2A35.js";

// src/api/module-settings.ts
async function getModuleSettings(context) {
  return await makeRestApiRequest(context, "GET", "/module-settings");
}

export {
  getModuleSettings
};
//# sourceMappingURL=chunk-QSM5AFBE.js.map