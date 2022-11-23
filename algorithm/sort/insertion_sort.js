console.time('insertion sort');
function insertion_sort(data, n) {
  let item = null;
  for (let i = 1; i < n; i++) {
    item = data[i];
    let j = i - 1;
    while (j >= 0 && data[j] > item) {
      [data[j + 1], data[j]] = [data[j], item];
      j = j - 1;
    }
  }
  return data;
}
console.timeEnd('insertion sort');

const data = [13, 1, 8, 9, 4, 5, 6, 11, 12, 14, 7, 10, 2, 3];
console.log(JSON.stringify(data));
const d = insertion_sort(data, data.length);

console.log(JSON.stringify(d));
