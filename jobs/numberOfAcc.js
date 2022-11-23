function numberOfOccurrence(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let mid;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
      let count = 0;
      for (let i = mid; i >= 0; i--) {
        if (arr[i] === target) count++;
      }
      for (let i = mid + 1; i < arr.length; i++) {
        if (arr[i] === target) count++;
      }
      return count;
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
}

const data = [1, 2, 3, 4, 4, 5, 6, 6, 6, 9, 10, 11];

const target = 6;

const a = numberOfOccurrence(data, target);
console.log(a);
