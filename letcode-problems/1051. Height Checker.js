/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
	const h = [...heights];
	let temp;
	for (let i = 0; i < heights.length; i++) {
		let minIndex = i;
		for (let j = i + 1; j < heights.length; j++) {
			if (heights[j] < heights[minIndex]) {
				minIndex = j;
			}
		}
		if (minIndex !== i) {
			temp = heights[minIndex];
			heights[minIndex] = heights[i];
			heights[i] = temp;
		}
	}
	let count = 0;
	for (let i = 0; i < heights.length; i++) {
		if (heights[i] !== h[i]) count++;
	}

	return count;
};

const heights = [5, 1, 2, 3, 4];
console.log(heightChecker(heights));
