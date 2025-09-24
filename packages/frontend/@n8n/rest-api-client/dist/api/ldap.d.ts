import { IDataObject } from 'n8n-workflow';
import { IRestApiContext } from '../types.js';

interface LdapSyncData {
    id: number;
    startedAt: string;
    endedAt: string;
    created: number;
    updated: number;
    disabled: number;
    scanned: number;
    status: string;
    error: string;
    runMode: string;
}
interface LdapSyncTable {
    status: string;
    endedAt: string;
    runTime: string;
    runMode: string;
    details: string;
}
interface LdapConfig {
    loginEnabled: boolean;
    loginLabel: string;
    connectionUrl: string;
    allowUnauthorizedCerts: boolean;
    connectionSecurity: string;
    connectionPort: number;
    baseDn: string;
    bindingAdminDn: string;
    bindingAdminPassword: string;
    firstNameAttribute: string;
    lastNameAttribute: string;
    emailAttribute: string;
    loginIdAttribute: string;
    ldapIdAttribute: string;
    userFilter: string;
    synchronizationEnabled: boolean;
    synchronizationInterval: number;
    searchPageSize: number;
    searchTimeout: number;
}
declare function getLdapConfig(context: IRestApiContext): Promise<LdapConfig>;
declare function testLdapConnection(context: IRestApiContext): Promise<{}>;
declare function updateLdapConfig(context: IRestApiContext, adConfig: LdapConfig): Promise<LdapConfig>;
declare function runLdapSync(context: IRestApiContext, data: IDataObject): Promise<{}>;
declare function getLdapSynchronizations(context: IRestApiContext, pagination: {
    page: number;
}): Promise<LdapSyncData[]>;

export { type LdapConfig, type LdapSyncData, type LdapSyncTable, getLdapConfig, getLdapSynchronizations, runLdapSync, testLdapConnection, updateLdapConfig };
