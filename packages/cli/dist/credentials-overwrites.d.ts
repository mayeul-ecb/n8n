import { Logger } from '@n8n/backend-common';
import { GlobalConfig } from '@n8n/config';
import type { ICredentialDataDecryptedObject } from 'n8n-workflow';
import { CredentialTypes } from './credential-types';
import type { ICredentialsOverwrite } from './interfaces';
import { Request, Response, NextFunction } from 'express';
export declare class CredentialsOverwrites {
    private readonly globalConfig;
    private readonly credentialTypes;
    private readonly logger;
    private overwriteData;
    private resolvedTypes;
    constructor(globalConfig: GlobalConfig, credentialTypes: CredentialTypes, logger: Logger);
    getOverwriteEndpointMiddleware(): ((req: Request, res: Response, next: NextFunction) => void) | null;
    setData(overwriteData: ICredentialsOverwrite): void;
    applyOverwrite(type: string, data: ICredentialDataDecryptedObject): ICredentialDataDecryptedObject;
    getOverwrites(type: string): ICredentialDataDecryptedObject | undefined;
    private get;
    getAll(): ICredentialsOverwrite;
}
