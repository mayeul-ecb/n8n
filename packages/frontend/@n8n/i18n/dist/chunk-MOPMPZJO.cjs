"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/utils.ts
function deriveMiddleKey(path, parameter) {
  let middleKey = parameter.name;
  if (isTopLevelCollection(path, parameter) || isNestedInCollectionLike(path)) {
    const pathSegments = normalize(path).split(".");
    middleKey = insertOptionsAndValues(pathSegments).join(".");
  }
  if (isNestedCollection(path, parameter) || isFixedCollection(path, parameter)) {
    const pathSegments = [...normalize(path).split("."), parameter.name];
    middleKey = insertOptionsAndValues(pathSegments).join(".");
  }
  return middleKey;
}
var isNestedInCollectionLike = (path) => path.split(".").length >= 3;
var isTopLevelCollection = (path, parameter) => path.split(".").length === 2 && parameter.type === "collection";
var isNestedCollection = (path, parameter) => path.split(".").length > 2 && parameter.type === "collection";
var isFixedCollection = (path, parameter) => parameter.type === "fixedCollection" && path !== "parameters";
var normalize = (path) => path.replace(/\[.*?\]/g, "").replace("parameters.", "");
var insertOptionsAndValues = (pathSegments) => {
  return pathSegments.reduce((acc, cur, i) => {
    acc.push(cur);
    if (i === pathSegments.length - 1) return acc;
    acc.push(i % 2 === 0 ? "options" : "values");
    return acc;
  }, []);
};






exports.deriveMiddleKey = deriveMiddleKey; exports.isNestedInCollectionLike = isNestedInCollectionLike; exports.normalize = normalize; exports.insertOptionsAndValues = insertOptionsAndValues;
//# sourceMappingURL=chunk-MOPMPZJO.cjs.map