import {
  makeRestApiRequest
} from "./chunk-NTAW2A35.js";

// src/api/settings.ts
async function getSettings(context) {
  return await makeRestApiRequest(context, "GET", "/settings");
}

export {
  getSettings
};
//# sourceMappingURL=chunk-YRSZGEY2.js.map