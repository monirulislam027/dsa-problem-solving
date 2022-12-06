/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (string) {
  const arr = string.split(' ');

  for (let i = 0; i < arr.length; i++) {
    const s = [...arr[i]];
    let l = 0;
    let r = arr[i].length - 1;

    while (l <= r) {
      [s[l], s[r]] = [s[r], s[l]];
      l++;
      r--;
    }
    arr[i] = s.join('');
  }

  return arr.join(' ');
};

const s = "Let's take LeetCode contest";

console.log(reverseWords(s));
reverseWords(s);
