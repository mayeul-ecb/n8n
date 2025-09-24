import { CommunityNodeType, OptionsRequestDto, ResourceLocatorRequestDto, ResourceMapperFieldsRequestDto, ActionResultRequestDto } from '@n8n/api-types';
import { INodeTranslationHeaders } from '@n8n/i18n';
import { INodeTypeNameVersion, INodeTypeDescription, INodePropertyOptions, INodeListSearchResult, ResourceMapperFields, NodeParameterValueType } from 'n8n-workflow';
import { IRestApiContext } from '../types.cjs';

declare function getNodeTypes(baseUrl: string): Promise<any>;
declare function fetchCommunityNodeTypes(context: IRestApiContext): Promise<CommunityNodeType[]>;
declare function fetchCommunityNodeAttributes(context: IRestApiContext, type: string): Promise<CommunityNodeType | null>;
declare function getNodeTranslationHeaders(context: IRestApiContext): Promise<INodeTranslationHeaders | undefined>;
declare function getNodesInformation(context: IRestApiContext, nodeInfos: INodeTypeNameVersion[]): Promise<INodeTypeDescription[]>;
declare function getNodeParameterOptions(context: IRestApiContext, sendData: OptionsRequestDto): Promise<INodePropertyOptions[]>;
declare function getResourceLocatorResults(context: IRestApiContext, sendData: ResourceLocatorRequestDto): Promise<INodeListSearchResult>;
declare function getResourceMapperFields(context: IRestApiContext, sendData: ResourceMapperFieldsRequestDto): Promise<ResourceMapperFields>;
declare function getLocalResourceMapperFields(context: IRestApiContext, sendData: ResourceMapperFieldsRequestDto): Promise<ResourceMapperFields>;
declare function getNodeParameterActionResult(context: IRestApiContext, sendData: ActionResultRequestDto): Promise<NodeParameterValueType>;

export { fetchCommunityNodeAttributes, fetchCommunityNodeTypes, getLocalResourceMapperFields, getNodeParameterActionResult, getNodeParameterOptions, getNodeTranslationHeaders, getNodeTypes, getNodesInformation, getResourceLocatorResults, getResourceMapperFields };
