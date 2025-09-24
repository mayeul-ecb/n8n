// src/search/sublimeSearch.ts
var SEQUENTIAL_BONUS = 60;
var SEPARATOR_BONUS = 38;
var CAMEL_BONUS = 30;
var FIRST_LETTER_BONUS = 15;
var LEADING_LETTER_PENALTY = -20;
var MAX_LEADING_LETTER_PENALTY = -200;
var UNMATCHED_LETTER_PENALTY = -5;
var DEFAULT_KEYS = [
  { key: "properties.displayName", weight: 1.3 },
  { key: "properties.codex.alias", weight: 1 }
];
function fuzzyMatchSimple(pattern, target) {
  let patternIdx = 0;
  let strIdx = 0;
  while (patternIdx < pattern.length && strIdx < target.length) {
    const patternChar = pattern.charAt(patternIdx).toLowerCase();
    const targetChar = target.charAt(strIdx).toLowerCase();
    if (patternChar === targetChar) {
      patternIdx++;
    }
    ++strIdx;
  }
  return pattern.length !== 0 && target.length !== 0 && patternIdx === pattern.length;
}
function fuzzyMatchRecursive(pattern, target, patternCurIndex, targetCurrIndex, targetMatches, matches, maxMatches, nextMatch, recursionCount, recursionLimit) {
  let outScore = 0;
  if (++recursionCount >= recursionLimit) {
    return { matched: false, outScore };
  }
  if (patternCurIndex === pattern.length || targetCurrIndex === target.length) {
    return { matched: false, outScore };
  }
  let recursiveMatch = false;
  let bestRecursiveMatches = [];
  let bestRecursiveScore = 0;
  let firstMatch = true;
  while (patternCurIndex < pattern.length && targetCurrIndex < target.length) {
    if (pattern[patternCurIndex].toLowerCase() === target[targetCurrIndex].toLowerCase()) {
      if (nextMatch >= maxMatches) {
        return { matched: false, outScore };
      }
      if (firstMatch && targetMatches) {
        matches = [...targetMatches];
        firstMatch = false;
      }
      const recursiveMatches = [];
      const recursiveResult = fuzzyMatchRecursive(
        pattern,
        target,
        patternCurIndex,
        targetCurrIndex + 1,
        matches,
        recursiveMatches,
        maxMatches,
        nextMatch,
        recursionCount,
        recursionLimit
      );
      const recursiveScore = recursiveResult.outScore;
      if (recursiveResult.matched) {
        if (!recursiveMatch || recursiveScore > bestRecursiveScore) {
          bestRecursiveMatches = [...recursiveMatches];
          bestRecursiveScore = recursiveScore;
        }
        recursiveMatch = true;
      }
      matches[nextMatch++] = targetCurrIndex;
      ++patternCurIndex;
    }
    ++targetCurrIndex;
  }
  const matched = patternCurIndex === pattern.length;
  if (matched) {
    outScore = 100;
    if (!target.toLowerCase().startsWith("n8n")) {
      let penalty = LEADING_LETTER_PENALTY * matches[0];
      penalty = penalty < MAX_LEADING_LETTER_PENALTY ? MAX_LEADING_LETTER_PENALTY : penalty;
      outScore += penalty;
    }
    const unmatched = target.length - nextMatch;
    outScore += UNMATCHED_LETTER_PENALTY * unmatched;
    for (let i = 0; i < nextMatch; i++) {
      const currIdx = matches[i];
      if (i > 0) {
        const prevIdx = matches[i - 1];
        if (currIdx === prevIdx + 1) {
          outScore += SEQUENTIAL_BONUS;
        }
      }
      if (currIdx > 0) {
        const neighbor = target[currIdx - 1];
        const curr = target[currIdx];
        if (neighbor !== neighbor.toUpperCase() && curr !== curr.toLowerCase()) {
          outScore += CAMEL_BONUS;
        }
        const isNeighbourSeparator = neighbor === "_" || neighbor === " ";
        if (isNeighbourSeparator) {
          outScore += SEPARATOR_BONUS;
        }
      } else {
        outScore += FIRST_LETTER_BONUS;
      }
    }
    if (recursiveMatch && (!matched || bestRecursiveScore > outScore)) {
      matches = [...bestRecursiveMatches];
      outScore = bestRecursiveScore;
      return { matched: true, outScore };
    } else if (matched) {
      return { matched: true, outScore };
    } else {
      return { matched: false, outScore };
    }
  }
  return { matched: false, outScore };
}
function fuzzyMatch(pattern, target) {
  const recursionCount = 0;
  const recursionLimit = 5;
  const matches = [];
  const maxMatches = 256;
  return fuzzyMatchRecursive(
    pattern,
    target,
    0,
    0,
    null,
    matches,
    maxMatches,
    0,
    recursionCount,
    recursionLimit
  );
}
function getValue(obj, prop) {
  if (obj.hasOwnProperty(prop)) {
    return obj[prop];
  }
  const segments = prop.split(".");
  let result = obj;
  let i = 0;
  while (result && i < segments.length) {
    const key = segments[i];
    result = result[key];
    i++;
  }
  return result;
}
function sublimeSearch(filter, data, keys = DEFAULT_KEYS) {
  const results = data.reduce((accu, item) => {
    let values = [];
    keys.forEach(({ key, weight }) => {
      const value = getValue(item, key);
      if (Array.isArray(value)) {
        values = values.concat(value.map((v) => ({ value: v, weight })));
      } else if (typeof value === "string") {
        values.push({
          value,
          weight
        });
      }
    });
    const itemMatch = values.reduce(
      (result, { value, weight }) => {
        if (!fuzzyMatchSimple(filter, value)) {
          return result;
        }
        const match = fuzzyMatch(filter, value);
        match.outScore *= weight;
        const { matched, outScore } = match;
        if (!result && matched) {
          return match;
        }
        if (matched && result && outScore > result.outScore) {
          return match;
        }
        return result;
      },
      null
    );
    if (itemMatch) {
      accu.push({
        score: itemMatch.outScore,
        item
      });
    }
    return accu;
  }, []);
  results.sort((a, b) => {
    return b.score - a.score;
  });
  return results;
}
export {
  DEFAULT_KEYS,
  sublimeSearch
};
//# sourceMappingURL=sublimeSearch.js.map