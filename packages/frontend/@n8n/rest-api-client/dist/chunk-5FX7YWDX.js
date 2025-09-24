import {
  makeRestApiRequest
} from "./chunk-NTAW2A35.js";

// src/api/ui.ts
async function dismissBannerPermanently(context, data) {
  return await makeRestApiRequest(context, "POST", "/owner/dismiss-banner", {
    banner: data.bannerName
  });
}

export {
  dismissBannerPermanently
};
//# sourceMappingURL=chunk-5FX7YWDX.js.map