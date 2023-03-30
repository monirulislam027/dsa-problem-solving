/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function (arr) {
	let temp;
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length - 1 - i; j++) {
			if (arr[j] > arr[j + 1]) {
				temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}

	let diff = Math.abs(arr[0] - arr[1]);
	let i = 0;
	while (i < arr.length - 1) {
		if (Math.abs(arr[i] - arr[i + 1]) !== diff) {
			return false;
		}
		i++;
	}
	return true;
};

const arr = [1, 2, 4];

console.log(canMakeArithmeticProgression(arr));
