const data = require('./data');

const val = 'id';

const selection_sort = (a, n) => {
  let count = 0;
  for (let i = 0; i < n; i++) {
    let min_index = i;
    for (let j = i; j < n; j++) {
      if (a[j][val] < a[min_index][val]) {
        min_index = j;
      }
    }

    if (min_index !== i) {
      [a[min_index], a[i]] = [a[i], a[min_index]];
    }
  }

  console.log(count);
  return a;
};

selection_sort(data, data.length);

console.log(data.map((i) => i[val]));
