function mergeSort(arr, left, right) {
  if (left < right) {
    const mid = Math.floor((left + right) / 2);
    mergeSort(arr, left, mid);
    mergeSort(arr, mid + 1, right);

    mergeSubArrays(arr, left, mid, right);
  }
}

function mergeSubArrays(arr, left, mid, right) {
  const tempArray = [];
  let i = left;
  let j = mid + 1;
  let k = i;
  while (i <= mid && j <= right) {
    tempArray[k] = arr[arr[i] < arr[j] ? i : j];
    arr[i] < arr[j] ? i++ : j++;
    k++;
  }

  if (i > mid) {
    while (j <= right) {
      tempArray[k] = arr[j];
      j++;
      k++;
    }
  } else {
    while (i <= mid) {
      tempArray[k] = arr[i];
      i++;
      k++;
    }
  }
  for (let z = left; z <= right; z++) {
    arr[z] = tempArray[z];
  }
}

const arr = [1, 2, 4, 3, 4, 3];
mergeSort(arr, 0, arr.length - 1);

console.log(arr);
