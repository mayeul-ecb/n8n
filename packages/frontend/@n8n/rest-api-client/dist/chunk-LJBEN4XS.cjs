"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk76QO7IXKcjs = require('./chunk-76QO7IXK.cjs');

// src/api/orchestration.ts
var GET_STATUS_ENDPOINT = "/orchestration/worker/status";
var sendGetWorkerStatus = async (context) => {
  await _chunk76QO7IXKcjs.makeRestApiRequest.call(void 0, context, "POST", GET_STATUS_ENDPOINT);
};



exports.sendGetWorkerStatus = sendGetWorkerStatus;
//# sourceMappingURL=chunk-LJBEN4XS.cjs.map