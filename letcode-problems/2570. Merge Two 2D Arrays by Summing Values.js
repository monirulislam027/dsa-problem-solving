/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function (nums1, nums2) {
	const hashMap = new Map();
	let i = 0;
	while (i < nums1.length) {
		hashMap.set(
			nums1[i][0],
			hashMap.has(nums1[i][0])
				? hashMap.get(nums1[i][0]) + nums1[i][1]
				: nums1[i][1],
		);
		i++;
	}
	let j = 0;
	while (j < nums2.length) {
		hashMap.set(
			nums2[j][0],
			hashMap.has(nums2[j][0])
				? hashMap.get(nums2[j][0]) + nums2[j][1]
				: nums2[j][1],
		);
		j++;
	}
	const data = Array.from(hashMap.keys()).sort((a, b) => a - b);

	for (let i = 0; i < data.length; i++) {
		data[i] = [data[i], hashMap.get(data[i])];
	}
	return data;
};
const nums1 = [
	[148, 597],
	[165, 623],
	[306, 359],
	[349, 566],
	[403, 646],
	[420, 381],
	[566, 543],
	[730, 209],
	[757, 875],
	[788, 208],
	[932, 695],
];
const nums2 = [
	[74, 669],
	[87, 399],
	[89, 165],
	[99, 749],
	[122, 401],
	[138, 16],
	[144, 714],
	[148, 206],
	[177, 948],
	[211, 653],
	[285, 775],
	[309, 289],
	[349, 396],
	[386, 831],
	[403, 318],
	[405, 119],
	[420, 153],
	[468, 433],
	[504, 101],
	[566, 128],
	[603, 688],
	[618, 628],
	[622, 586],
	[641, 46],
	[653, 922],
	[672, 772],
	[691, 823],
	[693, 900],
	[756, 878],
	[757, 952],
	[770, 795],
	[806, 118],
	[813, 88],
	[919, 501],
	[935, 253],
	[982, 385],
];
console.log(mergeArrays(nums1, nums2));
