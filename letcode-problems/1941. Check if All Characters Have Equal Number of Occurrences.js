/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function (s) {
	const hashMap = new Map();
	for (let i = 0; i < s.length; i++) {
		hashMap.set(s[i], hashMap.has(s[i]) ? hashMap.get(s[i]) + 1 : 1);
	}
	const values = Array.from(hashMap.values());
	let isOkay = true;
	for (let i = 0; i < values.length - 1; i++) {
		if (values[i] !== values[i + 1]) {
			isOkay = false;
			break;
		}
	}
	return isOkay;
};

const s = "abacbc";

console.log(areOccurrencesEqual(s));
