/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumBase = function (n, k) {
  let N = n;
  let sum = 0,
    temp;
  while (N > 0) {
    temp = N % k;
    sum += temp;
    N = (N - temp) / k;
  }

  return sum;
};

console.log(sumBase(34, 6));

console.log(5 % 6);
