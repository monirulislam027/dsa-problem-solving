function linearSearch(arr, i = 0) {
  if (i >= arr.length / 2) {
    return;
  }
  const j = arr.length - 1 - i;
  [arr[i], arr[j]] = [arr[j], arr[i]];
  linearSearch(arr, i + 1);
}
// reverse traverse

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
linearSearch(arr);
console.log(arr);
