/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
	const hashMap = new Map();
	for (let i = 0; i < allowed.length; i++) {
		hashMap.set(allowed[i], true);
	}

	let count = 0;
	for (let i = 0; i < words.length; i++) {
		count++;
		for (let j = 0; j < words[i].length; j++) {
			if (!hashMap.has(words[i][j])) {
				count--;
				break;
			}
		}
	}
	return count;
};

const allowed = "ab";
const words = ["ad", "bd", "aaab", "baa", "badab"];

console.log(countConsistentStrings(allowed, words));
