import { z } from 'zod';
import { BaseCommand } from '../base-command';
declare const flagsSchema: z.ZodObject<{
    inputDir: z.ZodDefault<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    inputDir: string;
}, {
    inputDir?: string | undefined;
}>;
export declare class ImportEntitiesCommand extends BaseCommand<z.infer<typeof flagsSchema>> {
    run(): Promise<void>;
    catch(error: Error): void;
}
export {};
