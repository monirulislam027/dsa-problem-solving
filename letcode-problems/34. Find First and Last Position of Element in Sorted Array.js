/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
	let firstIndex = 0;
	let count = 0;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] > target) break;
		if (nums[i] < target) firstIndex++;
		if (nums[i] === target) count++;
	}
	if (!count) return [-1, -1];

	return [firstIndex, firstIndex + count - 1];
};

const nums = [5, 7, 7, 8, 8, 10];
const target = 7;
console.log(searchRange(nums, target));
