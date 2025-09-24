"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/event-queue.ts
function createEventQueue(processEvent) {
  const queue = [];
  let processing = false;
  async function processNext() {
    if (processing || queue.length === 0) {
      return;
    }
    processing = true;
    const currentEvent = queue.shift();
    if (currentEvent !== void 0) {
      try {
        await processEvent(currentEvent);
      } catch (error) {
        console.error("Error processing event:", error);
      }
    }
    processing = false;
    await processNext();
  }
  function enqueue(event) {
    queue.push(event);
    void processNext();
  }
  return { enqueue };
}


exports.createEventQueue = createEventQueue;
//# sourceMappingURL=event-queue.cjs.map