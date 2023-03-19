/**
 * @param {number[]} nums
 * @return {number}
 */
const tempArray = [];
function mergeSubArrays(arr, left, mid, right) {
	let i = left;
	let j = mid + 1;
	let k = i;
	while (i <= mid && j <= right) {
		tempArray[k] = arr[arr[i] < arr[j] ? i : j];
		arr[i] < arr[j] ? i++ : j++;
		k++;
	}

	if (i > mid) {
		while (j <= right) {
			tempArray[k] = arr[j];
			j++;
			k++;
		}
	} else {
		while (i <= mid) {
			tempArray[k] = arr[i];
			i++;
			k++;
		}
	}
	for (let z = left; z <= right; z++) {
		arr[z] = tempArray[z];
	}
}
var maxProductDifference = function (nums) {
	const n = nums.length;
	function mergeSort(arr, left, right) {
		if (left >= right) {
			return;
		}

		const mid = Math.floor((left + right) / 2);
		mergeSort(arr, left, mid);
		mergeSort(arr, mid + 1, right);
		mergeSubArrays(arr, left, mid, right);
	}
	mergeSort(nums, 0, n - 1);
	return nums[n - 1] * nums[n - 2] - nums[0] * nums[1];
};

const nums = [4, 2, 5, 9, 7, 4, 8];
console.log(maxProductDifference(nums));
