export type ScenarioData = {
    workflowFiles?: string[];
    credentialFiles?: string[];
};
export type ScenarioManifest = {
    name: string;
    description: string;
    scriptPath: string;
    scenarioData: ScenarioData;
};
export type Scenario = ScenarioManifest & {
    id: string;
    scenarioDirPath: string;
};
