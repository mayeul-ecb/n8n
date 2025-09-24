"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/number/smartDecimal.ts
var smartDecimal = (value, decimals = 2) => {
  if (Number.isInteger(value)) {
    return value;
  }
  if (value.toString().split(".")[1].length <= decimals) {
    return value;
  }
  return Number(value.toFixed(decimals));
};


exports.smartDecimal = smartDecimal;
//# sourceMappingURL=smartDecimal.cjs.map