const list = require('./SinglyList');

[1, 2, 6, 3, 4, 5, 6].forEach((i) => list.append(i));
// [1, 2, , 2, 1].forEach((i) => list.append(i));

// list.append(1);
// list.append(2);
// list.append(2);
// list.append(1);

var removeElements = function (head, val) {
  let newHead = head;
  let data = newHead;
  let prev;

  while (data) {
    if (data.val !== val) {
      prev = data;
      data = data.next;
      continue;
    }

    if (!prev) {
      newHead = newHead.next;
    } else {
      prev.next = prev.next.next;
    }

    data = data.next;
  }
  return newHead;
};

list.print(removeElements(list.head, 6));
