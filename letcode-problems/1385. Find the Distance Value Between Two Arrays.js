/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
const findTheDistanceValue = function (arr1, arr2, d) {
	let i = 0;
	let j = 0;
	let count = 0;
	let diff;
	while (i < arr1.length) {
		if (j >= arr2.length) {
			j = 0;
			i++;

			// console.log("j reached | skip");
			continue;
		}
		if (arr2[j] < 0) {
			j++;
			continue;
		}
		diff = Math.abs(arr1[i] - arr2[j]);

		if (diff <= d && diff !== 0) {
			console.log({ i, j, diff, 1: arr1[i], 2: arr2[j] });
			count++;
		}
		j++;
	}
	return count;
};
// const arr1 = [1, 4, 2, 3];
// const arr2 = [-4, -3, 6, 10, 20, 30];
// const d = 3;

const data = [
	{
		arr1: [2, 1, 100, 3],
		arr2: [-5, -2, 10, -3, 7],
		d: 6,
		result: 1,
	},
	{
		arr1: [4, 5, 8],
		arr2: [10, 9, 1, 8],
		d: 2,
		result: 2,
	},
	{
		arr1: [1, 4, 2, 3],
		arr2: [-4, -3, 6, 10, 20, 30],
		d: 3,
		result: 2,
	},
];

const d = data.map(({ arr1, arr2, d, result }) => {
	const value = findTheDistanceValue(arr1, arr2, d);
	return `f-value=${value}|r-value=${result} ${result === value} `;
});

d.forEach((i) => console.log(i));
