"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk76QO7IXKcjs = require('./chunk-76QO7IXK.cjs');

// src/api/ui.ts
async function dismissBannerPermanently(context, data) {
  return await _chunk76QO7IXKcjs.makeRestApiRequest.call(void 0, context, "POST", "/owner/dismiss-banner", {
    banner: data.bannerName
  });
}



exports.dismissBannerPermanently = dismissBannerPermanently;
//# sourceMappingURL=chunk-LPNDZTUA.cjs.map