"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/metaTagConfig.ts
function getTagName(configName) {
  return `n8n:config:${configName}`;
}
function getConfigFromMetaTag(configName) {
  const tagName = getTagName(configName);
  try {
    const metaTag = document.querySelector(`meta[name="${tagName}"]`);
    if (!metaTag) {
      return null;
    }
    const encodedContent = metaTag.getAttribute("content");
    if (!encodedContent) {
      return null;
    }
    const content = atob(encodedContent);
    return content;
  } catch (error) {
    console.warn(`Failed to read n8n config for "${tagName}":`, error);
    return null;
  }
}
function getAndParseConfigFromMetaTag(configName) {
  const config = getConfigFromMetaTag(configName);
  if (!config) {
    return null;
  }
  try {
    return JSON.parse(config);
  } catch (error) {
    console.warn(`Failed to parse n8n config for "${getTagName(configName)}":`, error);
    return null;
  }
}




exports.getConfigFromMetaTag = getConfigFromMetaTag; exports.getAndParseConfigFromMetaTag = getAndParseConfigFromMetaTag;
//# sourceMappingURL=chunk-TI4WVUCB.cjs.map