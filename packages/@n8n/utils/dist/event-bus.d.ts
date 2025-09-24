type CallbackFn = (...args: any[]) => any;
type Payloads<ListenerMap> = {
    [E in keyof ListenerMap]: unknown;
};
type Listener<Payload> = (payload: Payload) => void;
interface EventBus<ListenerMap extends Payloads<ListenerMap> = Record<string, any>> {
    on<EventName extends keyof ListenerMap & string>(eventName: EventName, fn: Listener<ListenerMap[EventName]>): void;
    once<EventName extends keyof ListenerMap & string>(eventName: EventName, fn: Listener<ListenerMap[EventName]>): void;
    off<EventName extends keyof ListenerMap & string>(eventName: EventName, fn: Listener<ListenerMap[EventName]>): void;
    emit<EventName extends keyof ListenerMap & string>(eventName: EventName, event?: ListenerMap[EventName]): void;
}
declare function createEventBus<ListenerMap extends Payloads<ListenerMap> = Record<string, any>>(): EventBus<ListenerMap>;

export { type CallbackFn, type EventBus, createEventBus };
