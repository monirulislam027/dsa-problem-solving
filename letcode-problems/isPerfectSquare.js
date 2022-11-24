function isPerfectSquare(num) {
  let low = 1;
  let high = num;
  while (low <= high) {
    let mid = (low + high) >>> 1;
    if (mid * mid == num) {
      return true;
    } else if (mid * mid < num) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return false;
}

console.log(isPerfectSquare(16));
