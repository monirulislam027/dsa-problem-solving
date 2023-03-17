/**
 * @param {number[][]} grid
 * @return {number}
 */

var deleteGreatestValue = function (grid) {
	let temp;
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[i].length; j++) {
			for (let k = 0; k < grid[i].length - 1 - j; k++) {
				if (grid[i][k] > grid[i][k + 1]) {
					temp = grid[i][k];
					grid[i][k] = grid[i][k + 1];
					grid[i][k + 1] = temp;
				}
			}
		}
	}
	let total = 0;
	let i = 0;
	let bigValue = grid[i][0];
	let iLength;
	while (true) {
		if (!grid[grid.length - 1][0]) {
			break;
		}
		if (i === grid.length) {
			total += bigValue;
			bigValue = grid[0][0];
			i = 0;
			continue;
		}
		iLength = grid[i].length - 1;
		if (grid[i][iLength] > bigValue) {
			bigValue = grid[i][iLength];
		}

		grid[i].splice(iLength, 1);
		i++;
	}
	return total + bigValue;
};

const grid = [[10]];

console.log(deleteGreatestValue(grid));
