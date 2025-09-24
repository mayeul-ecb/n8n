import { PublicInstalledPackage } from 'n8n-workflow';
import { IRestApiContext } from '../types.cjs';

declare function getInstalledCommunityNodes(context: IRestApiContext): Promise<PublicInstalledPackage[]>;
declare function installNewPackage(context: IRestApiContext, name: string, verify?: boolean, version?: string): Promise<PublicInstalledPackage>;
declare function uninstallPackage(context: IRestApiContext, name: string): Promise<void>;
declare function updatePackage(context: IRestApiContext, name: string, version?: string, checksum?: string): Promise<PublicInstalledPackage>;
declare function getAvailableCommunityPackageCount(): Promise<number>;

export { getAvailableCommunityPackageCount, getInstalledCommunityNodes, installNewPackage, uninstallPackage, updatePackage };
