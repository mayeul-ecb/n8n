import {
  get
} from "./chunk-NTAW2A35.js";

// src/api/versions.ts
import { INSTANCE_ID_HEADER, INSTANCE_VERSION_HEADER } from "@n8n/constants";
async function getNextVersions(endpoint, currentVersion, instanceId) {
  const headers = { [INSTANCE_ID_HEADER]: instanceId };
  return await get(endpoint, currentVersion, {}, headers);
}
async function getWhatsNewSection(endpoint, currentVersion, instanceId) {
  const headers = {
    [INSTANCE_ID_HEADER]: instanceId,
    [INSTANCE_VERSION_HEADER]: currentVersion
  };
  return await get(endpoint, "", {}, headers);
}

export {
  getNextVersions,
  getWhatsNewSection
};
//# sourceMappingURL=chunk-CNMQ7SBK.js.map