"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }// src/useAgentRequestStore.ts
var _core = require('@vueuse/core');
var _pinia = require('pinia');
var LOCAL_STORAGE_AGENT_REQUESTS = "N8N_AGENT_REQUESTS";
var useAgentRequestStore = _pinia.defineStore.call(void 0, "agentRequest", () => {
  const agentRequests = _core.useLocalStorage.call(void 0, LOCAL_STORAGE_AGENT_REQUESTS, {});
  const ensureWorkflowAndNodeExist = (workflowId, nodeId) => {
    if (!agentRequests.value[workflowId]) {
      agentRequests.value[workflowId] = {};
    }
    if (!agentRequests.value[workflowId][nodeId]) {
      agentRequests.value[workflowId][nodeId] = { query: {} };
    }
  };
  const getAgentRequests = (workflowId, nodeId) => {
    return _optionalChain([agentRequests, 'access', _ => _.value, 'access', _2 => _2[workflowId], 'optionalAccess', _3 => _3[nodeId], 'optionalAccess', _4 => _4.query]) || {};
  };
  const getQueryValue = (workflowId, nodeId, paramName) => {
    const query = _optionalChain([agentRequests, 'access', _5 => _5.value, 'access', _6 => _6[workflowId], 'optionalAccess', _7 => _7[nodeId], 'optionalAccess', _8 => _8.query]);
    if (typeof query === "string") {
      return void 0;
    }
    return _optionalChain([query, 'optionalAccess', _9 => _9[paramName]]);
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
    if (agentRequests.value[workflowId]) return _optionalChain([agentRequests, 'access', _10 => _10.value, 'access', _11 => _11[workflowId], 'optionalAccess', _12 => _12[nodeId]]);
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


exports.useAgentRequestStore = useAgentRequestStore;
//# sourceMappingURL=useAgentRequestStore.cjs.map