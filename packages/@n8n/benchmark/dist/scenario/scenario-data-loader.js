"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScenarioDataFileLoader = void 0;
const fs = __importStar(require("node:fs"));
const path = __importStar(require("node:path"));
class ScenarioDataFileLoader {
    async loadDataForScenario(scenario) {
        const workflows = await Promise.all(scenario.scenarioData.workflowFiles?.map((workflowFilePath) => this.loadSingleWorkflowFromFile(path.join(scenario.scenarioDirPath, workflowFilePath))) ?? []);
        const credentials = await Promise.all(scenario.scenarioData.credentialFiles?.map((credentialFilePath) => this.loadSingleCredentialFromFile(path.join(scenario.scenarioDirPath, credentialFilePath))) ?? []);
        return {
            workflows,
            credentials,
        };
    }
    loadSingleCredentialFromFile(credentialFilePath) {
        const fileContent = fs.readFileSync(credentialFilePath, 'utf8');
        try {
            return JSON.parse(fileContent);
        }
        catch (error) {
            const e = error;
            throw new Error(`Failed to parse credential file ${credentialFilePath}: ${e.message}`);
        }
    }
    loadSingleWorkflowFromFile(workflowFilePath) {
        const fileContent = fs.readFileSync(workflowFilePath, 'utf8');
        try {
            return JSON.parse(fileContent);
        }
        catch (error) {
            const e = error;
            throw new Error(`Failed to parse workflow file ${workflowFilePath}: ${e.message}`);
        }
    }
}
exports.ScenarioDataFileLoader = ScenarioDataFileLoader;
//# sourceMappingURL=scenario-data-loader.js.map