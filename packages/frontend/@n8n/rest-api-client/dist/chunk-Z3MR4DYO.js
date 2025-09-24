import {
  get
} from "./chunk-NTAW2A35.js";

// src/api/workflowHistory.ts
var getWorkflowHistory = async (context, workflowId, queryParams) => {
  const { data } = await get(
    context.baseUrl,
    `/workflow-history/workflow/${workflowId}`,
    queryParams
  );
  return data;
};
var getWorkflowVersion = async (context, workflowId, versionId) => {
  const { data } = await get(
    context.baseUrl,
    `/workflow-history/workflow/${workflowId}/version/${versionId}`
  );
  return data;
};

export {
  getWorkflowHistory,
  getWorkflowVersion
};
//# sourceMappingURL=chunk-Z3MR4DYO.js.map