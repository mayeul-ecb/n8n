// src/string/truncate.ts
var truncate = (text, length = 30) => text.length > length ? text.slice(0, length) + "..." : text;
function truncateBeforeLast(text, maxLength) {
  const chars = [];
  const segmenter = new Intl.Segmenter(void 0, { granularity: "grapheme" });
  for (const { segment } of segmenter.segment(text)) {
    chars.push(segment);
  }
  if (chars.length <= maxLength) {
    return text;
  }
  const lastWhitespaceIndex = chars.findLastIndex((ch) => ch.match(/^\s+$/));
  const lastWordIndex = lastWhitespaceIndex + 1;
  const lastWord = chars.slice(lastWordIndex);
  const ellipsis = "\u2026";
  const ellipsisLength = ellipsis.length;
  if (lastWord.length < 15) {
    const charsToRemove = chars.length - maxLength + ellipsisLength;
    const indexBeforeLastWord = lastWordIndex;
    const keepLength = indexBeforeLastWord - charsToRemove;
    if (keepLength > 0) {
      return chars.slice(0, keepLength).join("") + ellipsis + chars.slice(indexBeforeLastWord).join("");
    }
  }
  return chars.slice(0, maxLength - 5 - ellipsisLength).join("") + ellipsis + chars.slice(-5).join("");
}
export {
  truncate,
  truncateBeforeLast
};
//# sourceMappingURL=truncate.js.map