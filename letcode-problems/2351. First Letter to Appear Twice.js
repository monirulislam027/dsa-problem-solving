/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function (s) {
	const hasMap = new Map();
	for (let i = 0; i < s.length; i++) {
		if (hasMap.has(s[i])) return s[i];
		hasMap.set(s[i], 1);
	}
};
const s = "abccbaacz";
console.log(repeatedCharacter(s));
