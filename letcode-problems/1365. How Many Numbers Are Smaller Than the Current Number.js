/**
 * @param {number[]} nums
 * @return {number[]}
 */

var smallerNumbersThanCurrent = function (nums) {
	const arr = [];
	for (let i = 0; i < nums.length; i++) {
		let count = 0;
		for (let j = 0; j < nums.length; j++) {
			if (nums[i] > nums[j]) {
				count++;
			}
		}
		arr.push(count);
		count = 0;
	}

	return arr;
};

const nums = [8, 1, 2, 2, 3];

console.log(smallerNumbersThanCurrent(nums));
