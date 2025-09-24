import { FrontendModuleSettings } from '@n8n/api-types';
import { IRestApiContext } from '../types.cjs';

declare function getModuleSettings(context: IRestApiContext): Promise<FrontendModuleSettings>;

export { getModuleSettings };
