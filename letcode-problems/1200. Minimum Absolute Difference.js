/**
 * @param {number[]} arr
 * @return {number[][]}
 */

var minimumAbsDifference = function (arr) {
    arr = arr.sort((a, b) => a - b)
    let sol = []
    let min = arr[1] - arr[0]

    for (let i = 1; i < arr.length - 1; i++) {
        if (arr[i + 1] - arr[i] < min) {
            min = arr[i + 1] - arr[i]
            sol = []
        }
        if (arr[i + 1] - arr[i] == min) sol.push([arr[i], arr[i + 1]])
    }

    if (min == arr[1] - arr[0]) sol.unshift([arr[0], arr[1]])
	
    return sol
};
const arr = [3,2,1,5]

// console.log(arr.length);

console.log(minimumAbsDifference(arr));
