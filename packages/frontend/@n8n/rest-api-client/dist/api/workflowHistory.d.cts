import { INode, IConnections } from 'n8n-workflow';
import { IRestApiContext } from '../types.cjs';

type WorkflowHistory = {
    versionId: string;
    authors: string;
    createdAt: string;
    updatedAt: string;
};
type WorkflowVersionId = WorkflowHistory['versionId'];
type WorkflowVersion = WorkflowHistory & {
    workflowId: string;
    nodes: INode[];
    connections: IConnections;
};
type WorkflowHistoryActionTypes = ['restore', 'clone', 'open', 'download'];
type WorkflowHistoryRequestParams = {
    take: number;
    skip?: number;
};
declare const getWorkflowHistory: (context: IRestApiContext, workflowId: string, queryParams: WorkflowHistoryRequestParams) => Promise<WorkflowHistory[]>;
declare const getWorkflowVersion: (context: IRestApiContext, workflowId: string, versionId: string) => Promise<WorkflowVersion>;

export { type WorkflowHistory, type WorkflowHistoryActionTypes, type WorkflowHistoryRequestParams, type WorkflowVersion, type WorkflowVersionId, getWorkflowHistory, getWorkflowVersion };
