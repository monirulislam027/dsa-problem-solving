function selection_sort(data, n) {
  for (let i = 0; i < n - 1; i++) {
    let index_min = i;
    for (let j = i + 1; j < n; j++) {
      if (data[j] < data[index_min]) {
        index_min = j;
      }
    }

    if (index_min !== i) {
      [data[i], data[index_min]] = [data[index_min], data[i]];
    }
  }
  return data;
}

const data = [1, 2, 3, 11, 12, 14, 22, 30, 50, 52];

const d = selection_sort(data, data.length);

console.log(d);
