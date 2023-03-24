class Node {
	constructor(value, next = null) {
		this.value = value;
		this.next = next;
	}
}

class Queue {
	constructor() {
		this.head = null;
		this.tail = null;
		this.size = 0;
	}

	enqueue(value) {
		const node = new Node(value);

		if (this.head) {
			this.tail.next = node;
		} else {
			this.head = node;
		}
		this.tail = node;
		this.size++;
	}
	dequeue() {
		if (!this.head) return null;
		const data = this.head.value;
		this.head = this.head.next;
		return data;
	}
	isEmpty() {
		return !this.head;
	}
	print() {
		let current = this.head;
		while (current) {
			console.log(current.value);
			current = current.next;
		}
	}
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(10);
console.log("===");
queue.print();
