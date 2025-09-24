"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk76QO7IXKcjs = require('./chunk-76QO7IXK.cjs');

// src/api/eventbus.ee.ts
function hasDestinationId(destination) {
  return destination.id !== void 0;
}
async function saveDestinationToDb(context, destination, subscribedEvents = []) {
  const data = {
    ...destination,
    subscribedEvents
  };
  return await _chunk76QO7IXKcjs.makeRestApiRequest.call(void 0, context, "POST", "/eventbus/destination", data);
}
async function deleteDestinationFromDb(context, destinationId) {
  return await _chunk76QO7IXKcjs.makeRestApiRequest.call(void 0, context, "DELETE", `/eventbus/destination?id=${destinationId}`);
}
async function sendTestMessageToDestination(context, destination) {
  const data = {
    ...destination
  };
  return await _chunk76QO7IXKcjs.makeRestApiRequest.call(void 0, context, "GET", "/eventbus/testmessage", data);
}
async function getEventNamesFromBackend(context) {
  return await _chunk76QO7IXKcjs.makeRestApiRequest.call(void 0, context, "GET", "/eventbus/eventnames");
}
async function getDestinationsFromBackend(context) {
  return await _chunk76QO7IXKcjs.makeRestApiRequest.call(void 0, context, "GET", "/eventbus/destination");
}








exports.hasDestinationId = hasDestinationId; exports.saveDestinationToDb = saveDestinationToDb; exports.deleteDestinationFromDb = deleteDestinationFromDb; exports.sendTestMessageToDestination = sendTestMessageToDestination; exports.getEventNamesFromBackend = getEventNamesFromBackend; exports.getDestinationsFromBackend = getDestinationsFromBackend;
//# sourceMappingURL=chunk-TWENYPGK.cjs.map