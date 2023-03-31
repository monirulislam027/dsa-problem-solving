/**
 * @param {number[]} nums
 * @return {number}
 */

function combination(n, k) {
	if (k > n) {
		return 0;
	}
	let numerator = 1;
	let denominator = 1;
	for (let i = 1; i <= k; i++) {
		numerator *= n - (k - i);
		denominator *= i;
	}
	return numerator / denominator;
}

// end

var numIdenticalPairs = function (nums) {
	const hasMap = new Map();

	for (let i = 0; i < nums.length; i++) {
		if (hasMap.get(nums[i])) {
			const values = hasMap.get(nums[i]);
			values.push(i);
			hasMap.set(nums[i], values);
		} else {
			hasMap.set(nums[i], [i]);
		}
	}
	const arr = Array.from(hasMap.values());

	let count = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i].length === 2) {
			count++;
		} else if (arr[i].length > 2) {
			count += combination(arr[i].length, 2);
		}
	}
	return count;
};

const nums = [1, 2, 3, 1, 1, 3];
numIdenticalPairs(nums);
