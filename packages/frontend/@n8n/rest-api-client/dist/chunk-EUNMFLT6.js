import {
  get,
  post
} from "./chunk-NTAW2A35.js";

// src/api/prompts.ts
import { N8N_IO_BASE_URL } from "@n8n/constants";
async function getPromptsData(instanceId, userId) {
  return await get(
    N8N_IO_BASE_URL,
    "/prompts",
    {},
    { "n8n-instance-id": instanceId, "n8n-user-id": userId }
  );
}
async function submitContactInfo(instanceId, userId, email) {
  return await post(
    N8N_IO_BASE_URL,
    "/prompt",
    { email },
    { "n8n-instance-id": instanceId, "n8n-user-id": userId }
  );
}

export {
  getPromptsData,
  submitContactInfo
};
//# sourceMappingURL=chunk-EUNMFLT6.js.map