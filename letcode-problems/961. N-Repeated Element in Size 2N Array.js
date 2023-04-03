/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function (nums) {
	const hashMap = new Map();
	let val;
	for (let i = 0; i < nums.length + 1; i++) {
		val = hashMap.get(nums[i]);

		hashMap.set(nums[i], val ? val + 1 : 1);

		if (hashMap.get(nums[i]) >= nums.length / 2) {
			return nums[i];
		}
	}
};

const nums = [2, 1, 2, 5, 3, 2];

console.log(repeatedNTimes(nums));
