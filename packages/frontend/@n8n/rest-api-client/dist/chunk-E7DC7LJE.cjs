"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk76QO7IXKcjs = require('./chunk-76QO7IXK.cjs');

// src/api/templates.ts
function stringifyArray(arr) {
  return arr.join(",");
}
async function testHealthEndpoint(apiEndpoint) {
  return await _chunk76QO7IXKcjs.get.call(void 0, apiEndpoint, "/health");
}
async function getCategories(apiEndpoint, headers) {
  return await _chunk76QO7IXKcjs.get.call(void 0, apiEndpoint, "/templates/categories", void 0, headers);
}
async function getCollections(apiEndpoint, query, headers) {
  return await _chunk76QO7IXKcjs.get.call(void 0, 
    apiEndpoint,
    "/templates/collections",
    { category: query.categories, search: query.search },
    headers
  );
}
async function getWorkflows(apiEndpoint, query, headers) {
  const { apps, sort, combineWith, categories, nodes, ...restQuery } = query;
  const finalQuery = {
    ...restQuery,
    category: stringifyArray(categories),
    ...apps && { apps: stringifyArray(apps) },
    ...nodes && { nodes: stringifyArray(nodes) },
    ...sort && { sort },
    ...combineWith && { combineWith }
  };
  return await _chunk76QO7IXKcjs.get.call(void 0, apiEndpoint, "/templates/search", finalQuery, headers);
}
async function getCollectionById(apiEndpoint, collectionId, headers) {
  return await _chunk76QO7IXKcjs.get.call(void 0, apiEndpoint, `/templates/collections/${collectionId}`, void 0, headers);
}
async function getTemplateById(apiEndpoint, templateId, headers) {
  return await _chunk76QO7IXKcjs.get.call(void 0, apiEndpoint, `/templates/workflows/${templateId}`, void 0, headers);
}
async function getWorkflowTemplate(apiEndpoint, templateId, headers) {
  return await _chunk76QO7IXKcjs.get.call(void 0, apiEndpoint, `/workflows/templates/${templateId}`, void 0, headers);
}









exports.testHealthEndpoint = testHealthEndpoint; exports.getCategories = getCategories; exports.getCollections = getCollections; exports.getWorkflows = getWorkflows; exports.getCollectionById = getCollectionById; exports.getTemplateById = getTemplateById; exports.getWorkflowTemplate = getWorkflowTemplate;
//# sourceMappingURL=chunk-E7DC7LJE.cjs.map