/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let str = '';
  const w1Len = word1.length;
  const w2Len = word2.length;
  const max = w1Len > w2Len ? w1Len : w2Len;

  for (let i = 0; i < max; i++) {
    if (i < w1Len) str += word1[i];
    if (i < w2Len) str += word2[i];
  }
  return str;
};

const word1 = 'ab',
  word2 = 'pqrs';

mergeAlternately(word1, word2);
