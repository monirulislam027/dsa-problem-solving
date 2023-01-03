function bubble_sort(arr) {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 22, 30, 50, 52];

const d = bubble_sort(data);

console.log(d);
