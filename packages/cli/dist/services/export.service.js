"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExportService = void 0;
const backend_common_1 = require("@n8n/backend-common");
const promises_1 = require("fs/promises");
const path_1 = __importDefault(require("path"));
const di_1 = require("@n8n/di");
let ExportService = class ExportService {
    constructor(logger, dataSource) {
        this.logger = logger;
        this.dataSource = dataSource;
    }
    async clearExistingEntityFiles(outputDir, entityName) {
        const existingFiles = await (0, promises_1.readdir)(outputDir);
        const entityFiles = existingFiles.filter((file) => file.startsWith(`${entityName}.`) && file.endsWith('.jsonl'));
        if (entityFiles.length > 0) {
            this.logger.info(`   🗑️  Found ${entityFiles.length} existing file(s) for ${entityName}, deleting...`);
            for (const file of entityFiles) {
                await (0, promises_1.rm)(path_1.default.join(outputDir, file));
                this.logger.info(`      Deleted: ${file}`);
            }
        }
    }
    async exportEntities(outputDir) {
        this.logger.info('\n⚠️⚠️ This feature is currently under development. ⚠️⚠️');
        this.logger.info('\n🚀 Starting entity export...');
        this.logger.info(`📁 Output directory: ${outputDir}`);
        await (0, promises_1.mkdir)(outputDir, { recursive: true });
        const entityMetadatas = this.dataSource.entityMetadatas;
        this.logger.info('\n📋 Exporting entities from all tables:');
        this.logger.info('====================================');
        let totalTablesProcessed = 0;
        let totalEntitiesExported = 0;
        const pageSize = 500;
        const entitiesPerFile = 10000;
        for (const metadata of entityMetadatas) {
            const tableName = metadata.tableName;
            const entityName = metadata.name.toLowerCase();
            this.logger.info(`\n📊 Processing table: ${tableName} (${entityName})`);
            await this.clearExistingEntityFiles(outputDir, entityName);
            const columns = metadata.columns.map((col) => col.databaseName).join(', ');
            this.logger.info(`   💭 Columns: ${columns}`);
            let offset = 0;
            let totalEntityCount = 0;
            let hasNextPage = true;
            let fileIndex = 1;
            let currentFileEntityCount = 0;
            do {
                const pageEntities = await this.dataSource.query(`SELECT ${columns} FROM ${tableName} LIMIT ${pageSize} OFFSET ${offset}`);
                if (pageEntities.length === 0) {
                    this.logger.info(`      No more entities available at offset ${offset}`);
                    hasNextPage = false;
                    break;
                }
                const targetFileIndex = Math.floor(totalEntityCount / entitiesPerFile) + 1;
                const fileName = targetFileIndex === 1 ? `${entityName}.jsonl` : `${entityName}.${targetFileIndex}.jsonl`;
                const filePath = path_1.default.join(outputDir, fileName);
                if (targetFileIndex > fileIndex) {
                    this.logger.info(`   ✅ Completed file ${fileIndex}: ${currentFileEntityCount} entities`);
                    fileIndex = targetFileIndex;
                    currentFileEntityCount = 0;
                }
                const entitiesJsonl = pageEntities
                    .map((entity) => JSON.stringify(entity))
                    .join('\n');
                await (0, promises_1.appendFile)(filePath, entitiesJsonl + '\n', 'utf8');
                totalEntityCount += pageEntities.length;
                currentFileEntityCount += pageEntities.length;
                offset += pageEntities.length;
                this.logger.info(`      Fetched page containing ${pageEntities.length} entities (page size: ${pageSize}, offset: ${offset - pageEntities.length}, total processed: ${totalEntityCount})`);
                if (pageEntities.length < pageSize) {
                    this.logger.info(`      Reached end of dataset (got ${pageEntities.length} < ${pageSize} requested)`);
                    hasNextPage = false;
                }
            } while (hasNextPage);
            if (currentFileEntityCount > 0) {
                this.logger.info(`   ✅ Completed file ${fileIndex}: ${currentFileEntityCount} entities`);
            }
            this.logger.info(`   ✅ Completed export for ${tableName}: ${totalEntityCount} entities in ${fileIndex} file(s)`);
            totalTablesProcessed++;
            totalEntitiesExported += totalEntityCount;
        }
        this.logger.info('\n📊 Export Summary:');
        this.logger.info(`   Tables processed: ${totalTablesProcessed}`);
        this.logger.info(`   Total entities exported: ${totalEntitiesExported}`);
        this.logger.info(`   Output directory: ${outputDir}`);
        this.logger.info('✅ Task completed successfully! \n');
    }
};
exports.ExportService = ExportService;
exports.ExportService = ExportService = __decorate([
    (0, di_1.Service)(),
    __metadata("design:paramtypes", [backend_common_1.Logger, Function])
], ExportService);
//# sourceMappingURL=export.service.js.map