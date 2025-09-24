import { IRestApiContext } from '../types.cjs';

declare function canEnableMFA(context: IRestApiContext): Promise<unknown>;
declare function getMfaQR(context: IRestApiContext): Promise<{
    qrCode: string;
    secret: string;
    recoveryCodes: string[];
}>;
declare function enableMfa(context: IRestApiContext, data: {
    mfaCode: string;
}): Promise<void>;
declare function verifyMfaCode(context: IRestApiContext, data: {
    mfaCode: string;
}): Promise<void>;
type DisableMfaParams = {
    mfaCode?: string;
    mfaRecoveryCode?: string;
};
declare function disableMfa(context: IRestApiContext, data: DisableMfaParams): Promise<void>;
declare function updateEnforceMfa(context: IRestApiContext, enforce: boolean): Promise<void>;

export { type DisableMfaParams, canEnableMFA, disableMfa, enableMfa, getMfaQR, updateEnforceMfa, verifyMfaCode };
