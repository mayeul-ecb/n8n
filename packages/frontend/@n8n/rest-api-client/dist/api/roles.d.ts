import { AllRolesMap } from '@n8n/permissions';
import { IRestApiContext } from '../types.js';

declare const getRoles: (context: IRestApiContext) => Promise<AllRolesMap>;

export { getRoles };
