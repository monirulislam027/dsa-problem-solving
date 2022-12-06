/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (str) {
  let s = str.toLowerCase();
  let l = 0;
  let r = s.length - 1;
  const regx = /^[a-zA-Z0-9]+$/;
  while (l <= r) {
    if (!regx.test(s[l])) {
      l++;
      continue;
    }
    if (!regx.test(s[r])) {
      r--;
      continue;
    }
    if (s[l] !== s[r]) {
      return false;
    }
    l++;
    r--;
  }
  return true;
};
const s = '0P';
console.log(isPalindrome(s));
