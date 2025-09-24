declare function reRankSearchResults<T extends {
    key: string;
}>(searchResults: Array<{
    score: number;
    item: T;
}>, additionalFactors: Record<string, Record<string, number>>): Array<{
    score: number;
    item: T;
}>;

export { reRankSearchResults };
