/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function (nums, target) {
	let res = [];
	let minus = 0;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] < target) {
			minus++;
		}
		if (nums[i] === target) {
			res.push(0);
		}
	}
	return res.map((e, i) => minus + i);
};

const nums = [1, 2, 5, 2, 3];
const target = 2;
console.log(targetIndices(nums, target));
