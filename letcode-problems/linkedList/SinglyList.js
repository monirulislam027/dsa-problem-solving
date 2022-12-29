class Node {
  constructor(value, next = null) {
    this.val = value;
    this.next = next;
    // this.id = Math.floor(Math.random() * 2000);
  }
}

class LinkedList {
  constructor(value) {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const node = new Node(value);
    if (!this.head) {
      //   node.index = 0;
      this.head = node;
      this.tail = node;
      this.length++;
      return;
    }
    // node.index = this.length;
    this.tail.next = node;
    this.tail = node;
    this.length++;
  }

  prepend(value) {
    const node = new Node(value, this.head);
    this.head = node;
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

  print(head) {
    let current = head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }
}

const list = new LinkedList();

module.exports = list;
