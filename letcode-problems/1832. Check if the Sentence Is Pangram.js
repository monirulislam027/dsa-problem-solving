/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
	const hashMap = new Map();

	for (let i = 0; i < sentence.length; i++) {
		hashMap.set(sentence[i], true);
	}
	return Array.from(hashMap.keys()).length === 26;
};

const sentence = "leetcode";

console.log(checkIfPangram(sentence));
