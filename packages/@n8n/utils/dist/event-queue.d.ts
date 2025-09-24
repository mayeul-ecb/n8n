declare function createEventQueue<T>(processEvent: (event: T) => Promise<void>): {
    enqueue: (event: T) => void;
};

export { createEventQueue };
