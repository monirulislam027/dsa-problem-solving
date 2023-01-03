class HashTable {
  constructor(size) {
    this.arr = Array.from(new Array(size));
    this.size = size;
  }
}

const h = new HashTable(5);

console.log(h.arr);
