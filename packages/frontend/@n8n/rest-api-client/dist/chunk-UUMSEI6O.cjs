"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk76QO7IXKcjs = require('./chunk-76QO7IXK.cjs');

// src/api/npsSurvey.ts
async function updateNpsSurveyState(context, state) {
  await _chunk76QO7IXKcjs.makeRestApiRequest.call(void 0, context, "PATCH", "/user-settings/nps-survey", state);
}



exports.updateNpsSurveyState = updateNpsSurveyState;
//# sourceMappingURL=chunk-UUMSEI6O.cjs.map