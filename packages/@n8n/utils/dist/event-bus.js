// src/event-bus.ts
function createEventBus() {
  const handlers = /* @__PURE__ */ new Map();
  return {
    on(eventName, fn) {
      let eventFns = handlers.get(eventName);
      if (!eventFns) {
        eventFns = [fn];
      } else {
        eventFns.push(fn);
      }
      handlers.set(eventName, eventFns);
    },
    once(eventName, fn) {
      const handler = (payload) => {
        this.off(eventName, handler);
        fn(payload);
      };
      this.on(eventName, handler);
    },
    off(eventName, fn) {
      const eventFns = handlers.get(eventName);
      if (eventFns) {
        eventFns.splice(eventFns.indexOf(fn) >>> 0, 1);
      }
    },
    emit(eventName, event) {
      const eventFns = handlers.get(eventName);
      if (eventFns) {
        eventFns.slice().forEach((handler) => {
          handler(event);
        });
      }
    }
  };
}
export {
  createEventBus
};
//# sourceMappingURL=event-bus.js.map