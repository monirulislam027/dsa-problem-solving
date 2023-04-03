/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
	const hashMap = new Map();
	for (let i = 0; i < nums.length; i++) {
		hashMap.set(nums[i], hashMap.has(nums[i]) ? hashMap.get(nums[i]) + 1 : 1);
	}
	const keys = Array.from(hashMap.keys());
	let sum = 0;
	for (let i = 0; i < keys.length; i++) {
		if (hashMap.get(keys[i]) === 1) {
			sum += keys[i];
		}
	}
	return sum;
};

const nums1 = [1, 2, 3, 2];

console.log(sumOfUnique(nums1));
