import {
  makeRestApiRequest
} from "./chunk-NTAW2A35.js";

// src/api/events.ts
async function sessionStarted(context) {
  return await makeRestApiRequest(context, "GET", "/events/session-started");
}

export {
  sessionStarted
};
//# sourceMappingURL=chunk-VOYJTRVH.js.map