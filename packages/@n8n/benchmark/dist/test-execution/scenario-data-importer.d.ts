import type { AuthenticatedN8nApiClient } from '../n8n-api-client/authenticated-n8n-api-client';
import type { LoadableScenarioData } from '../scenario/scenario-data-loader';
export declare class ScenarioDataImporter {
    private readonly workflowApiClient;
    private readonly credentialApiClient;
    constructor(n8nApiClient: AuthenticatedN8nApiClient);
    private replaceValuesInObject;
    importTestScenarioData(data: LoadableScenarioData): Promise<void>;
    private importCredentials;
    private importWorkflow;
    private findExistingCredentials;
    private findExistingWorkflows;
    private getBenchmarkCredentialName;
    private getBenchmarkWorkflowName;
}
