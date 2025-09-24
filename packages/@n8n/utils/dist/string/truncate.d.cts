declare const truncate: (text: string, length?: number) => string;
declare function truncateBeforeLast(text: string, maxLength: number): string;

export { truncate, truncateBeforeLast };
