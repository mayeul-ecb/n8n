"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/search/reRankSearchResults.ts
function reRankSearchResults(searchResults, additionalFactors) {
  return searchResults.map(({ score, item }) => {
    const additionalScore = Object.entries(additionalFactors).reduce((acc, [_, factorScores]) => {
      const factorScore = factorScores[item.key];
      if (factorScore) {
        return acc + factorScore;
      }
      return acc;
    }, 0);
    return {
      score: score + additionalScore,
      item
    };
  }).sort((a, b) => {
    return b.score - a.score;
  });
}


exports.reRankSearchResults = reRankSearchResults;
//# sourceMappingURL=reRankSearchResults.cjs.map