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
  }

  append(value) {
    const node = new Node(value);
    this.tail.next = node;
    this.tail = node;
  }
  prepend(value) {
    const node = new Node(value, this.head);
    this.head = node;
  }
  findAt(position) {
    let i = 1;
    let current = this.head;
    while (current) {
      if (position === i) return current;
      current = current.next;
      i++;
    }
    return;
  }
}

const list = new LinkedList(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);

const reversedList = (head) => {
  let prev = null;
  let next = null;

  while (head !== null) {
    next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  return prev;
};

const reversedList2 = (head) => {
  let prev = null;
  let next = null;
  while (head) {
    next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  return prev;
};
console.log(reversedList2(list.head));
