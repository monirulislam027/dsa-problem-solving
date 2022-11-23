/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var searchInsert = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;
  let mid, found;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);

    if (nums[mid] === target) {
      found = mid;
      break;
    } else if (nums[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  if (found === 0 || found) return found;
  return nums[mid] < target ? mid + 1 : mid;
};

const data = [
  {
    nums: [1, 3, 5, 6],
    target: 5,
    expect: 2,
  },
  {
    nums: [1, 3, 5, 6],
    target: 2,
    expect: 1,
  },
  {
    nums: [1, 3, 5, 6],
    target: 7,
    expect: 4,
  },
  {
    nums: [1, 3, 5, 6],
    target: 0,
    expect: 0,
  },
  {
    nums: [1],
    target: 1,
    expect: 0,
  },
  {
    nums: [1],
    target: 2,
    expect: 1,
  },
  {
    nums: [1, 3],
    target: 1,
    expect: 0,
  },
];

const data2 = [
  {
    nums: [1, 3],
    target: 0,
    expect: 0,
  },
  {
    nums: [-1, 3, 5, 6],
    target: 0,
    expect: 1,
  },
];

data2.forEach((i) => {
  const v = searchInsert(i.nums, i.target);
  console.log(v, i.expect, v === i.expect);
});
