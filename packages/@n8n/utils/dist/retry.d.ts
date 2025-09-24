type RetryFn = () => boolean | Promise<boolean>;
declare function retry(fn: RetryFn, interval?: number, maxRetries?: number, backoff?: 'exponential' | 'linear' | null): Promise<boolean>;

export { retry };
