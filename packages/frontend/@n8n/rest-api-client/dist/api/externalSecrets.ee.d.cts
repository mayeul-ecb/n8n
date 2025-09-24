import { ExternalSecretsProvider } from '@n8n/api-types';
import { IRestApiContext } from '../types.cjs';

declare const getExternalSecrets: (context: IRestApiContext) => Promise<Record<string, string[]>>;
declare const getExternalSecretsProviders: (context: IRestApiContext) => Promise<ExternalSecretsProvider[]>;
declare const getExternalSecretsProvider: (context: IRestApiContext, id: string) => Promise<ExternalSecretsProvider>;
declare const testExternalSecretsProviderConnection: (context: IRestApiContext, id: string, data: ExternalSecretsProvider["data"]) => Promise<{
    testState: ExternalSecretsProvider["state"];
}>;
declare const updateProvider: (context: IRestApiContext, id: string, data: ExternalSecretsProvider["data"]) => Promise<boolean>;
declare const reloadProvider: (context: IRestApiContext, id: string) => Promise<{
    updated: boolean;
}>;
declare const connectProvider: (context: IRestApiContext, id: string, connected: boolean) => Promise<boolean>;

export { connectProvider, getExternalSecrets, getExternalSecretsProvider, getExternalSecretsProviders, reloadProvider, testExternalSecretsProviderConnection, updateProvider };
