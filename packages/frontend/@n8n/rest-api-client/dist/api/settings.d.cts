import { FrontendSettings } from '@n8n/api-types';
import { IRestApiContext } from '../types.cjs';

declare function getSettings(context: IRestApiContext): Promise<FrontendSettings>;

export { getSettings };
