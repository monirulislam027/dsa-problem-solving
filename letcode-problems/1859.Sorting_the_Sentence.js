var sortSentence = function (s) {
	const str = s.split(" ");
	let strData = "";
	let i = 0;
	let j = 1;
	let sequence;
	while (str.length) {
		sequence = parseInt(str[i][str[i]?.length - 1]);
		if (sequence !== j) {
			i++;
		} else {
			strData += `${str[i].slice(0, str[i].length - 1)} `;
			str.splice(i, 1);
			j++;
			i = 0;
		}
	}
	return strData;
};

const testData = ["is2 sentence4 This1 a3", "Myself2 Me1 I4 and3"];

testData.forEach((item) => {
	// console.log("test data =>", item);
	sortSentence(item);
	// console.log("expected =>", sortSentence(item));
});
