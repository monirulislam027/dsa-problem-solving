var sortArrayByParity = function (nums) {
	let i = 0;
	let j = nums.length - 1;
	while (i <= j) {
		if (nums[i] % 2 === 0) {
			i++;
		} else if (nums[j] % 2 !== 0) {
			j--;
		} else {
			const temp = nums[i];
			nums[i] = nums[j];
			nums[j] = temp;
			i++;
			j--;
		}
	}
	return nums;
};

function swap(nums, i, j) {
	const temp = nums[i];
	nums[i] = nums[j];
	nums[j] = temp;
}

const testData = [[3, 1, 2, 4]];

testData.forEach((item) => {
	console.log("test data =>", item);
	sortArrayByParity(item);
	console.log("expected =>", item);
});
