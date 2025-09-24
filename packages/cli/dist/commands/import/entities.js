"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImportEntitiesCommand = void 0;
const decorators_1 = require("@n8n/decorators");
const zod_1 = require("zod");
const path_1 = __importDefault(require("path"));
const base_command_1 = require("../base-command");
const flagsSchema = zod_1.z.object({
    inputDir: zod_1.z
        .string()
        .describe('Input directory that holds output files for import')
        .default(path_1.default.join(__dirname, './outputs')),
});
let ImportEntitiesCommand = class ImportEntitiesCommand extends base_command_1.BaseCommand {
    async run() {
        const inputDir = this.flags.inputDir;
        this.logger.info('\n⚠️⚠️ This feature is currently under development. ⚠️⚠️');
        this.logger.info('\n🚀 Starting entity import...');
        this.logger.info(`📁 Input directory: ${inputDir}`);
        this.logger.info('✅ Task completed successfully! \n');
    }
    catch(error) {
        this.logger.error('❌ Error importing entities. See log messages for details. \n');
        this.logger.error('Error details:');
        this.logger.error('\n====================================\n');
        this.logger.error(`${error.message} \n`);
    }
};
exports.ImportEntitiesCommand = ImportEntitiesCommand;
exports.ImportEntitiesCommand = ImportEntitiesCommand = __decorate([
    (0, decorators_1.Command)({
        name: 'import:entities',
        description: 'Import database entities from JSON files',
        examples: ['', '--inputDir=./exports', '--inputDir=/path/to/backup'],
        flagsSchema,
    })
], ImportEntitiesCommand);
//# sourceMappingURL=entities.js.map