import { IRestApiContext } from '../types.cjs';

declare namespace Cloud {
    interface PlanData {
        planId: number;
        monthlyExecutionsLimit: number;
        activeWorkflowsLimit: number;
        credentialsLimit: number;
        isActive: boolean;
        displayName: string;
        expirationDate: string;
        metadata: PlanMetadata;
    }
    interface PlanMetadata {
        version: 'v1';
        group: 'opt-out' | 'opt-in' | 'trial';
        slug: 'pro-1' | 'pro-2' | 'starter' | 'trial-1';
        trial?: Trial;
    }
    interface Trial {
        length: number;
        gracePeriod: number;
    }
    type UserAccount = {
        confirmed: boolean;
        username: string;
        email: string;
        hasEarlyAccess?: boolean;
        role?: string;
        selectedApps?: string[];
        information?: {
            [key: string]: string | string[];
        };
    };
}
interface InstanceUsage {
    timeframe?: string;
    executions: number;
    activeWorkflows: number;
}
declare function getCurrentPlan(context: IRestApiContext): Promise<Cloud.PlanData>;
declare function getCurrentUsage(context: IRestApiContext): Promise<InstanceUsage>;
declare function getCloudUserInfo(context: IRestApiContext): Promise<Cloud.UserAccount>;
declare function sendConfirmationEmail(context: IRestApiContext): Promise<Cloud.UserAccount>;
declare function getAdminPanelLoginCode(context: IRestApiContext): Promise<{
    code: string;
}>;

export { Cloud, type InstanceUsage, getAdminPanelLoginCode, getCloudUserInfo, getCurrentPlan, getCurrentUsage, sendConfirmationEmail };
