import {
  makeRestApiRequest
} from "./chunk-NTAW2A35.js";

// src/api/npsSurvey.ts
async function updateNpsSurveyState(context, state) {
  await makeRestApiRequest(context, "PATCH", "/user-settings/nps-survey", state);
}

export {
  updateNpsSurveyState
};
//# sourceMappingURL=chunk-QBXXTACM.js.map