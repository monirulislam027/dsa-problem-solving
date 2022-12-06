/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
  let string = '';
  let r = word.indexOf(ch);
  while (r >= 0) {
    string += word[r];
    r--;
  }

  return string + word.slice(word.indexOf(ch) + 1);
};

const word = 'abcdefd';
const ch = 'd';
console.log(reversePrefix(word, ch));
