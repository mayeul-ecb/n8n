declare function deriveMiddleKey(path: string, parameter: {
    name: string;
    type?: string;
}): string;
declare const isNestedInCollectionLike: (path: string) => boolean;
declare const normalize: (path: string) => string;
declare const insertOptionsAndValues: (pathSegments: string[]) => string[];

export { deriveMiddleKey, insertOptionsAndValues, isNestedInCollectionLike, normalize };
