/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function (nums1, nums2, nums3) {
	const hashMap = new Map();
	const hashMap1 = new Map();
	const hashMap2 = new Map();
	const hashMap3 = new Map();

	for (let i = 0; i < nums1.length; i++) {
		if (!hashMap1.has(nums1[i])) {
			hashMap1.set(nums1[i], 1);
			hashMap.set(
				nums1[i],
				hashMap.has(nums1[i]) ? hashMap.get(nums1[i]) + 1 : 1,
			);
		}
	}

	for (let i = 0; i < nums2.length; i++) {
		if (!hashMap2.has(nums2[i])) {
			hashMap2.set(nums2[i], 1);
			hashMap.set(
				nums2[i],
				hashMap.has(nums2[i]) ? hashMap.get(nums2[i]) + 1 : 1,
			);
		}
	}

	for (let i = 0; i < nums3.length; i++) {
		if (!hashMap3.has(nums3[i])) {
			hashMap3.set(nums3[i], 1);
			hashMap1.set(
				nums3[i],
				hashMap.has(nums3[i]) ? hashMap.get(nums1[i]) + 1 : 1,
			);
		}
	}
	console.log({ hashMap, hashMap1, hashMap2, hashMap3 });
	const keys = Array.from(hashMap.keys());
	const arr = [];
	for (let i = 0; i < keys.length; i++) {
		if (hashMap.get(keys[i]) >= 2) {
			arr.push(keys[i]);
		}
	}
	return arr;
};

const arr = [
	// {
	// 	nums1: [1, 1, 3, 2],
	// 	nums2: [2, 3],
	// 	nums3: [3],
	// },
	{
		nums1: [3, 1],
		nums2: [2, 3],
		nums3: [1, 2],
	},
	// {
	// 	nums1: [1, 2, 2],
	// 	nums2: [4, 3, 3],
	// 	nums3: [5],
	// },
];

arr.forEach(({ nums1, nums2, nums3 }) => {
	console.log(twoOutOfThree(nums1, nums2, nums3));
});
