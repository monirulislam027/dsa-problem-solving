/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function (nums, k) {
	let count = 0;
	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (Math.abs(nums[i] - nums[j]) === k) count++;
		}
	}
	return count;
};

const nums = [1, 2, 2, 1];
const k = 1;

console.log(countKDifference(nums, k));
