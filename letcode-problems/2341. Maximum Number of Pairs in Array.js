/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function (nums) {
	const hashMap = new Map();
	for (let i = 0; i < nums.length; i++) {
		hashMap.set(nums[i], hashMap.has(nums[i]) ? hashMap.get(nums[i]) + 1 : 1);
	}

	const keys = Array.from(hashMap.keys());
	let pair = 0;
	let nonPair = 0;
	let value;
	for (let i = 0; i < keys.length; i++) {
		value = hashMap.get(keys[i]);
		pair += parseInt(value / 2);
		nonPair += parseInt(value % 2);
	}
	return [pair, nonPair];
};

const nums = [1, 3, 2, 1, 3, 2, 2];
console.log(numberOfPairs(nums));
