function linearSearch(arr, target, i = 0) {
  if (i >= arr.length) {
    return -1;
  }
  if (arr[i] === target) return i;
  return linearSearch(arr, target, i + 1);
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(linearSearch(arr, 12));
