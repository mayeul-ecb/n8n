import {
  makeRestApiRequest
} from "./chunk-NTAW2A35.js";

// src/api/webhooks.ts
var findWebhook = async (context, data) => {
  return await makeRestApiRequest(context, "POST", "/webhooks/find", data);
};

export {
  findWebhook
};
//# sourceMappingURL=chunk-DF4BVDPB.js.map