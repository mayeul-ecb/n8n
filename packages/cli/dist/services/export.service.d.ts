import { Logger } from '@n8n/backend-common';
import { type DataSource } from '@n8n/db';
export declare class ExportService {
    private readonly logger;
    private readonly dataSource;
    constructor(logger: Logger, dataSource: DataSource);
    private clearExistingEntityFiles;
    exportEntities(outputDir: string): Promise<void>;
}
