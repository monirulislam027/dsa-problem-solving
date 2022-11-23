function linear_search(data, targetValue) {
  for (let i = 0; i < data.length; i++) {
    if (data[i] === targetValue) {
      return i;
    }
  }
  return -1;
}

const data = [32, 24, 4, 16, 11, 2, 27, 17, 10, 8];
const a = [2, 4];
console.log(data.sort((a, b) => a - b));
const targetValue = 27;

linear_search(data, targetValue);
