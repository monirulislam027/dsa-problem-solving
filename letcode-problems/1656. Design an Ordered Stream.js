// /**
//  * @param {number} n
//  */
// var OrderedStream = function (n) {};

// /**
//  * @param {number} idKey
//  * @param {string} value
//  * @return {string[]}
//  */
// OrderedStream.prototype.insert = function (idKey, value) {};

// /**
//  * Your OrderedStream object will be instantiated and called as such:
//  * var obj = new OrderedStream(n)
//  * var param_1 = obj.insert(idKey,value)
//  */

class OrderedStream {
	constructor(size) {
		this.arr = Array.from(new Array(size));
		this.size = size;
	}

	insert(idKey, value) {
		const data = this.arr[idKey];
		let arr = this.arr[idKey];
		if (arr) {
			arr.push(value);
		} else {
			arr = [value];
		}
		this.arr = arr;
		return data;
	}
}

const os = new OrderedStream(5);
const param_1 = os.insert(3, "ccccc");
