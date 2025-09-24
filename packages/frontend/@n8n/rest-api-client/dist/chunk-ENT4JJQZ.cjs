"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk76QO7IXKcjs = require('./chunk-76QO7IXK.cjs');

// src/api/third-party-licenses.ts
async function getThirdPartyLicenses(context) {
  return await _chunk76QO7IXKcjs.request.call(void 0, {
    method: "GET",
    baseURL: context.baseUrl,
    endpoint: "/third-party-licenses"
  });
}



exports.getThirdPartyLicenses = getThirdPartyLicenses;
//# sourceMappingURL=chunk-ENT4JJQZ.cjs.map