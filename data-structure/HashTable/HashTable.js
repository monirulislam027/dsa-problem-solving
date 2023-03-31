class HashTable {
	constructor(size) {
		this.arr = Array.from(new Array(size));
		this.size = size;
	}
	_hash(value) {
		value = value.toString();
		let sum = 0;
		for (let i = 0; i < value.length; i++) {
			sum += value.charCodeAt(i);
		}
		return sum % this.size;
	}
	set(value) {
		const index = this._hash(value);
		let indexArr = this.arr[index];

		if (indexArr) {
			indexArr.push(value);
		} else {
			indexArr = [value];
		}
		this.arr[index] = indexArr;
	}
	get(value) {
		const index = this._hash(value);
		const indexArr = this.arr[index];

		for (let i = 0; i < indexArr.length; i++) {
			if (indexArr[i] === value) return true;
		}
		return false;
	}
}

const h = new HashTable(9);

h.set("Jack Fruit");
h.set("Orange");
h.set("Apple");

console.log(h.get("Orange"));

console.log(h.arr);
