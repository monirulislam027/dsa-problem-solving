class Node {
	constructor(value, left = null, right = null) {
		this.value = value;
		this.right = right;
		this.left = left;
	}
}

class BST {
	constructor() {
		this.root = null;
	}

	insert(value) {
		const node = new Node(value);
		if (!this.root) {
			this.root = node;
		} else {
			let currentNode = this.root;
			while (currentNode) {
				if (value > currentNode.value) {
					if (!currentNode.right) {
						currentNode.right = node;
						break;
					} else {
						currentNode = currentNode.right;
					}
				} else {
					if (!currentNode.left) {
						currentNode.left = node;
						break;
					} else {
						currentNode = currentNode.left;
					}
				}
			}
			return this;
		}
	}

	traverse() {
		const data = [];
		let currentNode = this.root;
		while (currentNode) {
			if (currentNode.right) {
				data.push(currentNode.right);
			}
			if (currentNode.left) {
				data.push(currentNode.left);
			}
			console.log(data[0].value);
			data.shift();
			currentNode = data[0];
		}
	}
}

const bst = new BST();
bst.insert(10);
bst.insert(8);
bst.insert(12);
bst.insert(9);
bst.insert(9);
bst.traverse();
// console.log(bst);
