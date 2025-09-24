import { SamlPreferences, SamlToggleDto, OidcConfigDto } from '@n8n/api-types';
import { IRestApiContext } from '../types.js';

type SamlPreferencesExtractedData = {
    entityID: string;
    returnUrl: string;
};
declare const initSSO: (context: IRestApiContext, redirectUrl?: string) => Promise<string>;
declare const getSamlMetadata: (context: IRestApiContext) => Promise<SamlPreferences>;
declare const getSamlConfig: (context: IRestApiContext) => Promise<SamlPreferences & SamlPreferencesExtractedData>;
declare const saveSamlConfig: (context: IRestApiContext, data: Partial<SamlPreferences>) => Promise<SamlPreferences | undefined>;
declare const toggleSamlConfig: (context: IRestApiContext, data: SamlToggleDto) => Promise<void>;
declare const testSamlConfig: (context: IRestApiContext) => Promise<string>;
declare const getOidcConfig: (context: IRestApiContext) => Promise<OidcConfigDto>;
declare const saveOidcConfig: (context: IRestApiContext, data: OidcConfigDto) => Promise<OidcConfigDto>;
declare const initOidcLogin: (context: IRestApiContext) => Promise<string>;

export { type SamlPreferencesExtractedData, getOidcConfig, getSamlConfig, getSamlMetadata, initOidcLogin, initSSO, saveOidcConfig, saveSamlConfig, testSamlConfig, toggleSamlConfig };
