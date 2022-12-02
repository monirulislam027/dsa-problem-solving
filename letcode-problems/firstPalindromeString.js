const isPalinedrome = (word) => {
  let l = 0;
  let r = word.length - 1;

  while (l <= r) {
    if (word[l] !== word[r]) {
      return false;
    }
    l++;
    r--;
  }
  return true;
};

var firstPalindrome = function (words) {
  for (let i = 0; i < words.length; i++) {
    if (isPalinedrome(words[i])) return words[i];
  }

  return '';
};

firstPalindrome(['abc', 'car', 'ada', 'racecar', 'cool']);
