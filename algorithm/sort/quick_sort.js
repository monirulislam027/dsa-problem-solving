function quickSort(arr, left, right) {
  if (left > right) return;

  const p = partitions(arr, left, right);
  //   console.log(p);
  quickSort(arr, left, p - 1);
  quickSort(arr, p + 1, right);
}

function partitions(arr, left, right) {
  const pivot = arr[left];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      count++;
    }
  }
  //   count = count + left;
  [arr[left], arr[count]] = [arr[count], arr[left]];

  let i = left;
  let j = right;

  while (i < count && j > count) {
    if (arr[i] > pivot && arr[j] < pivot) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
      j--;
    } else if (arr[i] > pivot && arr[j] > pivot) {
      j--;
    } else {
      i++;
    }
  }

  return count;
}

const arr = [9, 2, 5, 18, 38, 20, 45, 71, 6, 4];
quickSort(arr, 0, arr.length - 1);
console.log(arr);

const a = [1, 4, 5, 6, 10, 30, 20];
