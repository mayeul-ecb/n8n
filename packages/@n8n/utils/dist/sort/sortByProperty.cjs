"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/sort/sortByProperty.ts
var sortByProperty = (property, arr, order = "asc") => arr.sort((a, b) => {
  const result = String(a[property]).localeCompare(String(b[property]), void 0, {
    numeric: true,
    sensitivity: "base"
  });
  return order === "asc" ? result : -result;
});


exports.sortByProperty = sortByProperty;
//# sourceMappingURL=sortByProperty.cjs.map