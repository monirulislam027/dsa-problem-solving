var searchRange = function (nums, target) {
  const value = [-1, -1];

  let start = 0;
  let end = nums.length - 1;
  let mid;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) {
      break;
    } else if (target > nums[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  for (let i = mid; i >= 0; i--) {
    if (nums[i] === target) {
      value[0] = i;
    }
  }

  for (let i = mid; i < nums.length; i++) {
    if (nums[i] === target) {
      value[1] = i;
    }
  }

  return value;
};
const nums1 = [1];
const nums2 = [5, 7, 7, 8, 8, 10];
const nums3 = [1, 2, 2, 4];
const nums4 = [1, 2, 2, 4];
const target1 = 1;
const target2 = 8;
const target3 = 2;
const target4 = 0;

console.log(searchRange(nums3, target3));
