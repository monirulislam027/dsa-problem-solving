function binary_search(data, target) {
	let left = 0;
	let right = data.length;

	while (left <= right) {
		let mid = Math.ceil((left + right) / 2);
		if (data[mid] === target) return mid;

		if (data[mid] < target) {
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}
	return mid;
}

const data = [2, 4, 8, 10, 11, 16, 17, 24, 27, 32];
const find = 27;

const d = binary_search(data, find);
console.log(d);
