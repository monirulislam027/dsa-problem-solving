/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function (nums) {
	const n = nums.length;
	let temp;
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n - i - 1; j++) {
			if (nums[j] < nums[j + 1]) {
				temp = nums[j];
				nums[j] = nums[j + 1];
				nums[j + 1] = temp;
			}
		}
	}
	return nums[0] * nums[1] - nums[n - 1] * nums[n - 2];
};

const nums = [4, 2, 5, 9, 7, 4, 8];
console.log(maxProductDifference(nums));
