/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function (nums) {
	const hashMap = new Map();
	for (let i = 0; i < nums.length; i++) {
		hashMap.set(nums[i], hashMap.has(nums[i]) ? hashMap.get(nums[i]) + 1 : 1);
	}

	const keys = Array.from(hashMap.keys());
	let pair = 0;

	for (let i = 0; i < keys.length; i++) {
		pair += parseInt(hashMap.get(keys[i]) / 2);
	}
	return pair === nums.length / 2;
};

const nums = [3, 2, 3, 2, 2, 2];

console.log(divideArray(nums));
