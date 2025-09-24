import { IRestApiContext } from '../types.cjs';

declare function getThirdPartyLicenses(context: IRestApiContext): Promise<string>;

export { getThirdPartyLicenses };
