import {
  makeRestApiRequest
} from "./chunk-NTAW2A35.js";

// src/api/orchestration.ts
var GET_STATUS_ENDPOINT = "/orchestration/worker/status";
var sendGetWorkerStatus = async (context) => {
  await makeRestApiRequest(context, "POST", GET_STATUS_ENDPOINT);
};

export {
  sendGetWorkerStatus
};
//# sourceMappingURL=chunk-5WLGK635.js.map