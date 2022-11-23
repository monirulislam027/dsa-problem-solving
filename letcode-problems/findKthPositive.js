var findKthPositive = function (arr, k) {
  const values = [];
  let i = 1;
  do {
    let j = 0;
    do {
      console.log(arr[j], i);
      if (arr[j] !== i && values[j]) {
        values.push(i);
        // i++;
        break;
      }
      j++;
    } while (j < arr.length);
    i++;
  } while (values.length < k);
  console.log('d');
  return values;
};

const data = [
  {
    data: [2, 3, 4, 7, 11],
    target: 5,
  },
];

data.forEach((item) => {
  console.log(findKthPositive(item.data, item.target));
});
