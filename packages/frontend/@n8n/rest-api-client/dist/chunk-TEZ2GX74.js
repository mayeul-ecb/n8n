import {
  makeRestApiRequest
} from "./chunk-NTAW2A35.js";

// src/api/eventbus.ee.ts
function hasDestinationId(destination) {
  return destination.id !== void 0;
}
async function saveDestinationToDb(context, destination, subscribedEvents = []) {
  const data = {
    ...destination,
    subscribedEvents
  };
  return await makeRestApiRequest(context, "POST", "/eventbus/destination", data);
}
async function deleteDestinationFromDb(context, destinationId) {
  return await makeRestApiRequest(context, "DELETE", `/eventbus/destination?id=${destinationId}`);
}
async function sendTestMessageToDestination(context, destination) {
  const data = {
    ...destination
  };
  return await makeRestApiRequest(context, "GET", "/eventbus/testmessage", data);
}
async function getEventNamesFromBackend(context) {
  return await makeRestApiRequest(context, "GET", "/eventbus/eventnames");
}
async function getDestinationsFromBackend(context) {
  return await makeRestApiRequest(context, "GET", "/eventbus/destination");
}

export {
  hasDestinationId,
  saveDestinationToDb,
  deleteDestinationFromDb,
  sendTestMessageToDestination,
  getEventNamesFromBackend,
  getDestinationsFromBackend
};
//# sourceMappingURL=chunk-TEZ2GX74.js.map