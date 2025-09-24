"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } }// src/assert.ts
function assert(condition, message) {
  if (!condition) {
    throw new Error(_nullishCoalesce(message, () => ( "Assertion failed")));
  }
}


exports.assert = assert;
//# sourceMappingURL=assert.cjs.map