const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const n = Math.floor(arr.length / 2);
const lastIndex = arr.length - 1;
let temp;
for (let i = 0; i < n; i++) {
  temp = arr[i];
  arr[i] = arr[lastIndex - i];
  arr[lastIndex - i] = temp;
}

// 1 search bar
[
  {
    id: '',
    name: '',
    fatherName: '',
  },
  {
    id: '',
    name: '',
    fatherName: '',
  },
];
