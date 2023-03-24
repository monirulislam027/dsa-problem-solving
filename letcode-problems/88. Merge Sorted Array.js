/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
	const newArray = [];
	let idx = 0;
	let i = 0;
	let j = 0;
	while (i < m && j < n) {
		if (nums1[i] < nums2[j]) {
			newArray[idx++] = nums1[i];
			i++;
		} else {
			newArray[idx++] = nums2[j];
			j++;
		}
	}
	if (i < m) {
		for (let k = i; k < m; k++) {
			newArray[idx++] = nums1[k];
		}
	}
	if (j < n) {
		for (let k = j; k < n; k++) {
			newArray[idx++] = nums2[k];
		}
	}

	for (let i = 0; i < newArray.length; i++) {
		nums1[i] = newArray[i];
	}
};

const nums1 = [1, 2, 3, 0, 0, 0];
const m = 3;
const nums2 = [2, 5, 6];
const n = 3;
merge(nums1, m, nums2, n);
console.log(nums1);
