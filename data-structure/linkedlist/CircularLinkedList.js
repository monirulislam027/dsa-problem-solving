class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor(value) {
    const node = new Node(value);
    this.head = node;
    this.tail = node;
    this.length = 1;
  }

  append(value) {
    const node = new Node(value, this.head);
    this.tail.next = node;
    this.tail = node;
    this.length++;
  }

  prepend(value) {
    const node = new Node(value, this.head);
    this.head = node;
    this.tail.next = this.head;
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
    const newNode = new Node(value, find.next);
    find.next = newNode;
    this.length++;
  }

  removeAt(position) {
    if (position > this.length && 0 <= 0) return;
    if (position === 1) {
      this.head = this.head.next;
      this.tail.next = this.head;
      this.length--;
      return;
    }
    const find = this.findAt(position - 1);
    find.next = find.next.next;
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
list.append(40);
list.append(50);
list.append(60);

// list.print();

const isCircular = (head) => {
  let data1 = head;
  let data2 = head.next.next;
  while (data1 && data2) {
    if (data1.value === data2.value) return true;
    data1 = data1.next;
    data2 = data2?.next?.next;
  }

  return false;
};

console.log(isCircular(list.head));
