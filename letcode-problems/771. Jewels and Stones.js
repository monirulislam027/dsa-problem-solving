/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
function numJewelsInStones(jewels, stones) {
	const hashMap = new Map();
	for (let i = 0; i < jewels.length; i++) {
		hashMap.set(jewels[i], true);
	}
	let count = 0;
	for (let i = 0; i < stones.length; i++) {
		if (hashMap.has(stones[i])) count++;
	}
	return count;
}

const jewels = "aA";
const stones = "aAAbbbb";

numJewelsInStones(jewels, stones);
