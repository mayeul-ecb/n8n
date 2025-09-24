import { FrontendModuleSettings } from '@n8n/api-types';
import { IRestApiContext } from '../types.js';

declare function getModuleSettings(context: IRestApiContext): Promise<FrontendModuleSettings>;

export { getModuleSettings };
