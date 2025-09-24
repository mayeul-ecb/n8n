declare function getConfigFromMetaTag(configName: string): string | null;
declare function getAndParseConfigFromMetaTag<T>(configName: string): T | null;

export { getAndParseConfigFromMetaTag, getConfigFromMetaTag };
