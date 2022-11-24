function a(arr, target) {
  const ma = [];
  let mn = 1;
  let i = 0;

  while (ma.length < target) {
    mn === arr[i] ? i++ : ma.push(mn);
    mn++;
  }

  return ma[target - 1];
}

console.log(a([2, 3, 4, 7, 11], 5));
