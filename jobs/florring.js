function flooring(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let mid;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
      break;
    }
    if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  console.log(mid);
  if (mid === 0 && (arr[0] > target || arr[mid] > target)) {
    return -1;
  }
  return arr[mid] > target ? mid - 1 : mid;
}

const array = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const target = 32;

const v = flooring(array, target);
console.log(array[v], v);
// console.log(v);
