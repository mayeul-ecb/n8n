import { AllRolesMap } from '@n8n/permissions';
import { IRestApiContext } from '../types.cjs';

declare const getRoles: (context: IRestApiContext) => Promise<AllRolesMap>;

export { getRoles };
