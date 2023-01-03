class Node {
  constructor(value, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList {
  constructor(value) {
    const node = new Node(value);
    this.head = node;
    this.tail = node;
  }

  append(value) {
    const node = new Node(value);
    node.prev = this.tail;
    node.next = this.head;
    this.tail.next = node;
    this.tail = node;
  }

  prepend(value) {
    const node = new Node(value, this.head);
    node.prev = this.tail;
    this.tail.next = node;
    this.head = node;
    this.length++;
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

  insertAt(position, value) {
    if (position <= 1) {
      this.prepend(value);
      return;
    }
    if (position > this.length) {
      this.append(value);
      return;
    }

    let find = this.findAt(position - 1);
    const newNode = new Node(value, find.next, find);
    newNode.next.prev = newNode;
    find.next = newNode;
  }

  removeAt(position) {
    if (position > this.length && position <= 0) return;
    if (position === 1) {
      this.head = this.head.next;
      this.head.prev = null;
      this.length--;
      return;
    }
    const find = this.findAt(position - 1);
    find.next = find.next.next;
    find.next.prev = find;
    this.length--;
  }

  updateAt(position, value) {
    const find = this.findAt(position);
    find.value = value;
  }
  print() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

const list = new LinkedList(20);

list.prepend(10);
list.append(30);
list.append(50);
list.insertAt(4, 40);
list.insertAt(4, 30);

list.updateAt(3, 25);

list.removeAt(3);

list.print();
