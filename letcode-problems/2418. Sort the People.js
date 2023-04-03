/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
	return names
		.map((name, index) => ({ name, age: heights[index] }))
		.sort((a, b) => b.age - a.age)
		.map((p) => p.name);
};

const names = ["Mary", "John", "Emma"];

const heights = [180, 165, 170];

console.log(sortPeople(names, heights));
