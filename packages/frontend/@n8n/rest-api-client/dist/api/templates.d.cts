import { RawAxiosRequestHeaders } from 'axios';
import { INode, INodeCredentialsDetails } from 'n8n-workflow';
import { VersionNode } from './versions.cjs';
import { WorkflowData } from './workflows.cjs';
import './tags.cjs';

interface IWorkflowTemplateNode extends Pick<INode, 'name' | 'type' | 'position' | 'parameters' | 'typeVersion' | 'webhookId' | 'id' | 'disabled'> {
    credentials?: IWorkflowTemplateNodeCredentials;
}
interface IWorkflowTemplateNodeCredentials {
    [key: string]: string | INodeCredentialsDetails;
}
interface IWorkflowTemplate {
    id: number;
    name: string;
    workflow: Pick<WorkflowData, 'connections' | 'settings' | 'pinData'> & {
        nodes: IWorkflowTemplateNode[];
    };
}
interface ITemplatesNode extends VersionNode {
    id: number;
    categories?: ITemplatesCategory[];
}
interface ITemplatesCollection {
    id: number;
    name: string;
    nodes: ITemplatesNode[];
    workflows: Array<{
        id: number;
    }>;
}
interface ITemplatesImage {
    id: number;
    url: string;
}
interface ITemplatesCollectionExtended extends ITemplatesCollection {
    description: string | null;
    image: ITemplatesImage[];
    categories: ITemplatesCategory[];
    createdAt: string;
}
interface ITemplatesCollectionFull extends ITemplatesCollectionExtended {
    full: true;
}
interface ITemplatesCollectionResponse extends ITemplatesCollectionExtended {
    workflows: ITemplatesWorkflow[];
}
interface ITemplatesWorkflow {
    id: number;
    createdAt: string;
    name: string;
    nodes: ITemplatesNode[];
    totalViews: number;
    user: {
        username: string;
    };
}
interface ITemplatesWorkflowInfo {
    nodeCount: number;
    nodeTypes: {
        [key: string]: {
            count: number;
        };
    };
}
type TemplateSearchFacet = {
    field_name: string;
    sampled: boolean;
    stats: {
        total_values: number;
    };
    counts: Array<{
        count: number;
        highlighted: string;
        value: string;
    }>;
};
interface ITemplatesWorkflowResponse extends ITemplatesWorkflow, IWorkflowTemplate {
    description: string | null;
    image: ITemplatesImage[];
    categories: ITemplatesCategory[];
    workflowInfo: ITemplatesWorkflowInfo;
}
interface ITemplatesWorkflowFull extends ITemplatesWorkflowResponse {
    full: true;
}
interface ITemplatesQuery {
    categories: string[];
    search: string;
    apps?: string[];
    nodes?: string[];
    sort?: string;
    combineWith?: string;
}
interface ITemplatesCategory {
    id: number;
    name: string;
}
declare function testHealthEndpoint(apiEndpoint: string): Promise<any>;
declare function getCategories(apiEndpoint: string, headers?: RawAxiosRequestHeaders): Promise<{
    categories: ITemplatesCategory[];
}>;
declare function getCollections(apiEndpoint: string, query: ITemplatesQuery, headers?: RawAxiosRequestHeaders): Promise<{
    collections: ITemplatesCollection[];
}>;
declare function getWorkflows(apiEndpoint: string, query: {
    page: number;
    limit: number;
    categories: string[];
    search: string;
    sort?: string;
    apps?: string[];
    nodes?: string[];
    combineWith?: string;
}, headers?: RawAxiosRequestHeaders): Promise<{
    totalWorkflows: number;
    workflows: ITemplatesWorkflow[];
    filters: TemplateSearchFacet[];
}>;
declare function getCollectionById(apiEndpoint: string, collectionId: string, headers?: RawAxiosRequestHeaders): Promise<{
    collection: ITemplatesCollectionResponse;
}>;
declare function getTemplateById(apiEndpoint: string, templateId: string, headers?: RawAxiosRequestHeaders): Promise<{
    workflow: ITemplatesWorkflowResponse;
}>;
declare function getWorkflowTemplate(apiEndpoint: string, templateId: string, headers?: RawAxiosRequestHeaders): Promise<IWorkflowTemplate>;

export { type ITemplatesCategory, type ITemplatesCollection, type ITemplatesCollectionFull, type ITemplatesCollectionResponse, type ITemplatesNode, type ITemplatesQuery, type ITemplatesWorkflow, type ITemplatesWorkflowFull, type ITemplatesWorkflowInfo, type ITemplatesWorkflowResponse, type IWorkflowTemplate, type IWorkflowTemplateNode, type IWorkflowTemplateNodeCredentials, type TemplateSearchFacet, getCategories, getCollectionById, getCollections, getTemplateById, getWorkflowTemplate, getWorkflows, testHealthEndpoint };
