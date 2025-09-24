// src/assert.ts
function assert(condition, message) {
  if (!condition) {
    throw new Error(message ?? "Assertion failed");
  }
}
export {
  assert
};
//# sourceMappingURL=assert.js.map