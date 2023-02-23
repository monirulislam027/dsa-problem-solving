function isPalindrome(str, i = 0) {
  if (str[i] !== str[str.length - 1 - i]) return false;
  if (i >= str.length / 2) return true;
  return isPalindrome(str, i + 1);
}

console.log(isPalindrome('car'));
