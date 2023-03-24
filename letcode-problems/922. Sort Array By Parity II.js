/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function (nums) {
	let i = 0;
	let j = nums.length - 1;
	let temp;
	while (i <= j) {
		if (
			(i % 2 === 0 && nums[i] % 2 === 0) ||
			(i % 2 !== 0 && nums[i] % 2 !== 0)
		) {
			i++;
			continue;
		}

		if (nums[j] % 2 === i % 2) {
			temp = nums[i];
			nums[i] = nums[j];
			nums[j] = temp;
			j = nums.length - 1;
			i++;
		} else {
			j--;
		}
	}
	return nums;
};

const nums = [
	[888, 505, 627, 846],
	[0, 1, 2, 1, 4, 1, 3, 4],
	[4, 2, 5, 7],
];

nums.forEach((num) => {
	console.log(sortArrayByParityII(num));
});
