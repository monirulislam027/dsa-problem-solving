function bubble_sort(data, n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (data[j] > data[j + 1]) {
        [data[j], data[j + 1]] = [data[j + 1], data[j]];
      }
    }
  }
  return data;
}

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 22, 30, 50, 52];

const d = bubble_sort(data, data.length);

console.log(d);
