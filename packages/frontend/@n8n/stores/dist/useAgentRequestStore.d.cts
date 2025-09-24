import * as pinia from 'pinia';
import * as _vueuse_core from '@vueuse/core';
import { INodeParameters, NodeParameterValueType } from 'n8n-workflow';

interface IAgentRequest {
    query: INodeParameters | string;
    toolName?: string;
}
interface IAgentRequestStoreState {
    [workflowId: string]: {
        [nodeName: string]: IAgentRequest;
    };
}
declare const useAgentRequestStore: pinia.StoreDefinition<"agentRequest", Pick<{
    agentRequests: _vueuse_core.RemovableRef<IAgentRequestStoreState>;
    getAgentRequests: (workflowId: string, nodeId: string) => INodeParameters | string;
    getQueryValue: (workflowId: string, nodeId: string, paramName: string) => NodeParameterValueType | undefined;
    setAgentRequestForNode: (workflowId: string, nodeId: string, request: IAgentRequest) => void;
    clearAgentRequests: (workflowId: string, nodeId: string) => void;
    clearAllAgentRequests: (workflowId?: string) => void;
    getAgentRequest: (workflowId: string, nodeId: string) => IAgentRequest | undefined;
}, "agentRequests">, Pick<{
    agentRequests: _vueuse_core.RemovableRef<IAgentRequestStoreState>;
    getAgentRequests: (workflowId: string, nodeId: string) => INodeParameters | string;
    getQueryValue: (workflowId: string, nodeId: string, paramName: string) => NodeParameterValueType | undefined;
    setAgentRequestForNode: (workflowId: string, nodeId: string, request: IAgentRequest) => void;
    clearAgentRequests: (workflowId: string, nodeId: string) => void;
    clearAllAgentRequests: (workflowId?: string) => void;
    getAgentRequest: (workflowId: string, nodeId: string) => IAgentRequest | undefined;
}, never>, Pick<{
    agentRequests: _vueuse_core.RemovableRef<IAgentRequestStoreState>;
    getAgentRequests: (workflowId: string, nodeId: string) => INodeParameters | string;
    getQueryValue: (workflowId: string, nodeId: string, paramName: string) => NodeParameterValueType | undefined;
    setAgentRequestForNode: (workflowId: string, nodeId: string, request: IAgentRequest) => void;
    clearAgentRequests: (workflowId: string, nodeId: string) => void;
    clearAllAgentRequests: (workflowId?: string) => void;
    getAgentRequest: (workflowId: string, nodeId: string) => IAgentRequest | undefined;
}, "getAgentRequests" | "getQueryValue" | "setAgentRequestForNode" | "clearAgentRequests" | "clearAllAgentRequests" | "getAgentRequest">>;

export { type IAgentRequest, type IAgentRequestStoreState, useAgentRequestStore };
