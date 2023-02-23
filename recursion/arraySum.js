function linearSearch(arr, i = 0) {
  if (i >= arr.length) {
    return 0;
  }
  return arr[i] + linearSearch(arr, i + 1);
}
// reverse traverse
function reverseSummation(arr, i = arr.length - 1) {
  if (i < 0) {
    return 0;
  }
  return arr[i] + reverseSummation(arr, i - 1);
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(linearSearch(arr));
console.log('-------------------');
console.log(reverseSummation(arr));
