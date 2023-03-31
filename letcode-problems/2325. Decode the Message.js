/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */

var decodeMessage = function (key, message) {
	const hashMap = new Map();

	let i = 0; // for key string value
	let j = 0; // for character

	while (i < key.length && j < 26) {
		const ch = String.fromCharCode(j + 97);
		if (key[i] === " ") {
			i++;
			continue;
		}
		if (!hashMap.get(key[i])) {
			hashMap.set(key[i], ch);
			j++;
			i++;
		} else {
			i++;
		}
	}
	hashMap.set(" ", " ");
	let result = "";

	for (let i = 0; i < message.length; i++) {
		result += hashMap.get(message[i]);
	}

	return result;
};

const key = "the quick brown fox jumps over the lazy dog";
const message = "vkbs bs t suepuv";

console.log(decodeMessage(key, message));
