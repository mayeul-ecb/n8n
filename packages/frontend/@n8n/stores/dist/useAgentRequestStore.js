// src/useAgentRequestStore.ts
import { useLocalStorage } from "@vueuse/core";
import { defineStore } from "pinia";
var LOCAL_STORAGE_AGENT_REQUESTS = "N8N_AGENT_REQUESTS";
var useAgentRequestStore = defineStore("agentRequest", () => {
  const agentRequests = useLocalStorage(LOCAL_STORAGE_AGENT_REQUESTS, {});
  const ensureWorkflowAndNodeExist = (workflowId, nodeId) => {
    if (!agentRequests.value[workflowId]) {
      agentRequests.value[workflowId] = {};
    }
    if (!agentRequests.value[workflowId][nodeId]) {
      agentRequests.value[workflowId][nodeId] = { query: {} };
    }
  };
  const getAgentRequests = (workflowId, nodeId) => {
    return agentRequests.value[workflowId]?.[nodeId]?.query || {};
  };
  const getQueryValue = (workflowId, nodeId, paramName) => {
    const query = agentRequests.value[workflowId]?.[nodeId]?.query;
    if (typeof query === "string") {
      return void 0;
    }
    return query?.[paramName];
  };
  const setAgentRequestForNode = (workflowId, nodeId, request) => {
    ensureWorkflowAndNodeExist(workflowId, nodeId);
    agentRequests.value[workflowId][nodeId] = {
      ...request,
      query: typeof request.query === "string" ? request.query : { ...request.query }
    };
  };
  const clearAgentRequests = (workflowId, nodeId) => {
    if (agentRequests.value[workflowId]) {
      agentRequests.value[workflowId][nodeId] = { query: {} };
    }
  };
  const clearAllAgentRequests = (workflowId) => {
    if (workflowId) {
      agentRequests.value[workflowId] = {};
    } else {
      agentRequests.value = {};
    }
  };
  const getAgentRequest = (workflowId, nodeId) => {
    if (agentRequests.value[workflowId]) return agentRequests.value[workflowId]?.[nodeId];
    return void 0;
  };
  return {
    agentRequests,
    getAgentRequests,
    getQueryValue,
    setAgentRequestForNode,
    clearAgentRequests,
    clearAllAgentRequests,
    getAgentRequest
  };
});
export {
  useAgentRequestStore
};
//# sourceMappingURL=useAgentRequestStore.js.map