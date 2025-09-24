import { IRestApiContext } from '../types.js';

declare function getThirdPartyLicenses(context: IRestApiContext): Promise<string>;

export { getThirdPartyLicenses };
