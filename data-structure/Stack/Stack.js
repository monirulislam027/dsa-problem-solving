class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor(size) {
    this.head = null;
    this.tail = null;
    this.size = size;
    this.length = 0;
  }

  push(value) {
    const node = new Node(value);
    if (this.length >= this.size) return;
    if (this.head) {
      this.tail.next = node;
      this.tail = node;
    } else {
      this.head = node;
      this.tail = node;
    }
    this.length++;
  }

  pop() {
    if (this.length === 0) return null;
    const find = this.findAt(this.length - 1);
    const popAble = find.next;
    find.next = null;
    this.tail = find;
    this.length--;
    return popAble;
  }

  isEmpty() {
    return !this.length > 0;
  }
  isFull() {
    return this.length >= this.size;
  }

  top() {
    return this.findAt(this.length);
  }

  findAt(position) {
    let i = 0;
    let current = this.head;
    while (current && i < position - 1) {
      current = current.next;
      i++;
    }
    return current;
  }
  print() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

const stack = new Stack(5);

stack.push(1);
stack.push(2);
stack.pop();
stack.push(3);
stack.push(4);

stack.print();
