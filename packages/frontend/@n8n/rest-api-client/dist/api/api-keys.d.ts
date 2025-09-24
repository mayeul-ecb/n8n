import { ApiKey, CreateApiKeyRequestDto, ApiKeyWithRawValue, UpdateApiKeyRequestDto } from '@n8n/api-types';
import { ApiKeyScope } from '@n8n/permissions';
import { IRestApiContext } from '../types.js';

declare function getApiKeys(context: IRestApiContext): Promise<ApiKey[]>;
declare function getApiKeyScopes(context: IRestApiContext): Promise<ApiKeyScope[]>;
declare function createApiKey(context: IRestApiContext, payload: CreateApiKeyRequestDto): Promise<ApiKeyWithRawValue>;
declare function deleteApiKey(context: IRestApiContext, id: string): Promise<{
    success: boolean;
}>;
declare function updateApiKey(context: IRestApiContext, id: string, payload: UpdateApiKeyRequestDto): Promise<{
    success: boolean;
}>;

export { createApiKey, deleteApiKey, getApiKeyScopes, getApiKeys, updateApiKey };
