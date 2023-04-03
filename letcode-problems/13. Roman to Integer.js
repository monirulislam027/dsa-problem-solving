/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
	const hasMap = new Map();
	hasMap.set("I", 1);
	hasMap.set("V", 5);
	hasMap.set("X", 10);
	hasMap.set("L", 50);
	hasMap.set("C", 100);
	hasMap.set("D", 500);
	hasMap.set("M", 1000);

	let sum = 0;
	let i = 0;
	let first;
	let next;
	while (i < s.length) {
		first = hasMap.get(s[i]);
		next = hasMap.get(s[i + 1]);
		if (first < next) {
			sum += next - first;
			i += 2;
		} else {
			sum += first;
			i++;
		}
	}

	return sum;
};

const s = "MCMXCIV";

console.log(romanToInt(s));
