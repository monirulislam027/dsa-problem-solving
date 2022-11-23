var searchRange = function (nums, target) {
  if (nums.length <= 0) return [-1, -1];

  let start = 0;
  let end = nums.length - 1;
  let mid;
  const d = [];

  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) {
      d.push(mid);
      break;
    } else if (target > nums[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  if (d.length <= 0) return [-1, -1];

  if (nums[d[0] + 1] === target) {
    d.push(d[0] + 1);
  } else if (nums[d[0] - 1] === target) {
    d.unshift(d[0] - 1);
  } else {
    d.push(d[0]);
  }

  return d;
};

const arr = [1];
const target = 1;
console.log(searchRange(arr, target));
