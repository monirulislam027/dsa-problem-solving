/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (string) {
  const s = [...string];
  let i = 0;
  let j = Math.ceil(s.length - 1);
  let count = 0;
  while (i <= j) {
    count++;
    const regx = /^[a-zA-Z]+$/;

    if (!regx.test(s[i])) {
      i++;
      continue;
    }
    if (!regx.test(s[j])) {
      j--;
      continue;
    }

    [s[i], s[j]] = [s[j], s[i]];
    i++;
    j--;
  }

  return s.join('');
};

const s = 'Test1ng-Leet=code-Q!';

console.log(reverseWords(s));
