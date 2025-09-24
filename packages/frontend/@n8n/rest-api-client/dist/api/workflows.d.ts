import { INode, IConnections, IWorkflowSettings, IPinData } from 'n8n-workflow';
import { ITag } from './tags.js';

interface WorkflowMetadata {
    onboardingId?: string;
    templateId?: string;
    instanceId?: string;
    templateCredsSetupCompleted?: boolean;
}
interface WorkflowData {
    id?: string;
    name?: string;
    active?: boolean;
    nodes: INode[];
    connections: IConnections;
    settings?: IWorkflowSettings;
    tags?: string[];
    pinData?: IPinData;
    versionId?: string;
    meta?: WorkflowMetadata;
}
interface WorkflowDataUpdate {
    id?: string;
    name?: string;
    nodes?: INode[];
    connections?: IConnections;
    settings?: IWorkflowSettings;
    active?: boolean;
    tags?: ITag[] | string[];
    pinData?: IPinData;
    versionId?: string;
    meta?: WorkflowMetadata;
    parentFolderId?: string;
    uiContext?: string;
}
interface WorkflowDataCreate extends WorkflowDataUpdate {
    projectId?: string;
}

export type { WorkflowData, WorkflowDataCreate, WorkflowDataUpdate, WorkflowMetadata };
