"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk76QO7IXKcjs = require('./chunk-76QO7IXK.cjs');

// src/api/workflowHistory.ts
var getWorkflowHistory = async (context, workflowId, queryParams) => {
  const { data } = await _chunk76QO7IXKcjs.get.call(void 0, 
    context.baseUrl,
    `/workflow-history/workflow/${workflowId}`,
    queryParams
  );
  return data;
};
var getWorkflowVersion = async (context, workflowId, versionId) => {
  const { data } = await _chunk76QO7IXKcjs.get.call(void 0, 
    context.baseUrl,
    `/workflow-history/workflow/${workflowId}/version/${versionId}`
  );
  return data;
};




exports.getWorkflowHistory = getWorkflowHistory; exports.getWorkflowVersion = getWorkflowVersion;
//# sourceMappingURL=chunk-BWR373PP.cjs.map