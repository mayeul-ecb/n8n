"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/schema.ts
var schema_exports = {};
__export(schema_exports, {
  extensionManifestSchema: () => extensionManifestSchema
});
module.exports = __toCommonJS(schema_exports);
var import_zod = require("zod");
var extensionManifestSchema = import_zod.z.object({
  /**
   * Name of the extension package.
   */
  name: import_zod.z.string(),
  /**
   * The display name of the extension.
   */
  displayName: import_zod.z.string(),
  /**
   * Description of the extension package.
   */
  description: import_zod.z.string(),
  /**
   * Publisher of the extension.
   */
  publisher: import_zod.z.string(),
  /**
   * Version of the extension package.
   */
  version: import_zod.z.string(),
  /**
   * Category the extension belongs to.
   */
  categories: import_zod.z.array(import_zod.z.string()),
  /**
   * Setup paths for backend and frontend code entry points.
   */
  entry: import_zod.z.object({
    /**
     * Path to the backend entry file.
     */
    backend: import_zod.z.string(),
    /**
     * Path to the frontend entry file.
     */
    frontend: import_zod.z.string()
  }),
  /**
   * Minimum SDK version required to run the extension.
   */
  minSDKVersion: import_zod.z.string(),
  /**
   * Permissions object specifying allowed access for frontend and backend.
   */
  permissions: import_zod.z.object({
    /**
     * List of frontend permissions (array of strings).
     */
    frontend: import_zod.z.array(import_zod.z.string()),
    /**
     * List of backend permissions (array of strings).
     */
    backend: import_zod.z.array(import_zod.z.string())
  }),
  /**
   * List of events that the extension listens to.
   */
  events: import_zod.z.array(import_zod.z.string()),
  /**
   * Define extension points for existing functionalities.
   */
  extends: import_zod.z.object({
    /**
     * Extends the views configuration.
     */
    views: import_zod.z.object({
      /**
       * Extends the workflows view configuration.
       */
      workflows: import_zod.z.object({
        /**
         * Header component for the workflows view.
         */
        header: import_zod.z.string()
      })
    })
  })
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  extensionManifestSchema
});
//# sourceMappingURL=schema.cjs.map