import {
  get
} from "./chunk-NTAW2A35.js";

// src/api/ctas.ts
async function getBecomeCreatorCta(context) {
  const response = await get(context.baseUrl, "/cta/become-creator");
  return response;
}

export {
  getBecomeCreatorCta
};
//# sourceMappingURL=chunk-GDYGMQZG.js.map