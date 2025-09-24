import type { Workflow, Credential } from '../n8n-api-client/n8n-api-client.types';
import type { Scenario } from '../types/scenario';
export type LoadableScenarioData = {
    workflows: Workflow[];
    credentials: Credential[];
};
export declare class ScenarioDataFileLoader {
    loadDataForScenario(scenario: Scenario): Promise<LoadableScenarioData>;
    private loadSingleCredentialFromFile;
    private loadSingleWorkflowFromFile;
}
