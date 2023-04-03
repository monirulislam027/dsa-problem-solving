/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
	const codes = [
		".-",
		"-...",
		"-.-.",
		"-..",
		".",
		"..-.",
		"--.",
		"....",
		"..",
		".---",
		"-.-",
		".-..",
		"--",
		"-.",
		"---",
		".--.",
		"--.-",
		".-.",
		"...",
		"-",
		"..-",
		"...-",
		".--",
		"-..-",
		"-.--",
		"--..",
	];

	const hashMap = new Map();
	for (let i = 0; i < codes.length; i++) {
		hashMap.set(String.fromCharCode(i + 97), codes[i]);
	}
	const resultMap = new Map();
	for (let i = 0; i < words.length; i++) {
		let r = "";
		for (let j = 0; j < words[i].length; j++) {
			r += hashMap.get(words[i][j]);
		}
		if (resultMap.get(r)) {
			resultMap.set(r, resultMap.get(r) + 1);
		} else {
			resultMap.set(r, 1);
		}
	}
	return Array.from(resultMap.keys()).length;
};

const words = ["a"];

uniqueMorseRepresentations(words);
