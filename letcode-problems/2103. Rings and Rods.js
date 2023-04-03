/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function (rings) {
	const hashMap = new Map();

	let storeValue;
	let keyStr;
	let valueStr;

	for (let i = 0; i < Math.ceil(rings.length / 2); i++) {
		keyStr = rings[2 * i + 1];
		valueStr = rings[2 * i];
		storeValue = hashMap.get(keyStr);
		if (storeValue) {
			if (!storeValue.includes(valueStr)) {
				storeValue.push(valueStr);
			}
		} else {
			hashMap.set(keyStr, [valueStr]);
		}
	}
	const values = Array.from(hashMap.values());
	let count = 0;
	for (let i = 0; i < values.length; i++) {
		if (values[i].length === 3) count++;
	}
	return count;
};

const rings = "B0B6G0R6R0R6G9";

console.log(countPoints(rings));
