import {
  request
} from "./chunk-NTAW2A35.js";

// src/api/third-party-licenses.ts
async function getThirdPartyLicenses(context) {
  return await request({
    method: "GET",
    baseURL: context.baseUrl,
    endpoint: "/third-party-licenses"
  });
}

export {
  getThirdPartyLicenses
};
//# sourceMappingURL=chunk-QGI6VJ64.js.map