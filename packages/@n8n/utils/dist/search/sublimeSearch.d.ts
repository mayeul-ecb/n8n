declare const DEFAULT_KEYS: {
    key: string;
    weight: number;
}[];
declare function sublimeSearch<T extends object>(filter: string, data: readonly T[], keys?: Array<{
    key: string;
    weight: number;
}>): Array<{
    score: number;
    item: T;
}>;

export { DEFAULT_KEYS, sublimeSearch };
