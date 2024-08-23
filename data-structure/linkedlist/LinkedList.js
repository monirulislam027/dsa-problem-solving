class Node {
  constructor(value, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
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
    const node = new Node(value);
    this.tail.next = node;
    this.tail = node;
    this.length++;
  }

  prepend(value) {
    const node = new Node(value, this.head);
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
    const newNode = new Node(value, find.next);
    find.next = newNode;
    this.length++;
  }

  removeAt(position) {
    if (position > this.length && 0 <= 0) return;
    if (position === 1) {
      this.head = this.head.next;
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
const l1 = [2, 4, 3],
  l2 = [5, 6, 4];
const list1 = new LinkedList(2);
list1.append(4);
list1.append(3);
const list2 = new LinkedList(5);
list2.append(6);
list2.append(4);

var addTwoNumbers = function (l1, l2) {
  let lNumber1 = "";
  let current1 = l1.head;
  while (current1) {
    lNumber1 = current1.value.toString() + lNumber1;
    current1 = current1.next;
  }
  lNumber1 = parseInt(lNumber1);
  let lNumber2 = "";

  current1 = l2.head;
  while (current1) {
    lNumber2 = current1.value.toString() + lNumber2;
    current1 = current1.next;
  }
  lNumber2 = parseInt(lNumber2);

  let sum = (lNumber1 + lNumber2).toString();
  let current = l1.head;
  let i = 0;
  while (i < sum.length) {
    if (!current.next) {
      current.next = {
        value: null,
        next: null,
      };
    }
    current.value = parseInt(sum[i]);
    current = current.next;
    i++;
  }
  return l1;
};

console.log(addTwoNumbers(list1, list2));
