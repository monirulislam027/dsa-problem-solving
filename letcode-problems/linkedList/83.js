const list = require('./SinglyList');

[1, 2, 2, 3, 3, 5, 5].forEach((i) => list.append(i));
// [1, 2, , 2, 1].forEach((i) => list.append(i));

// list.append(1);
// list.append(2);
// list.append(2);
// list.append(1);

var deleteDuplicates = function (head) {
  //   let newHead = head;
  let data = head;
  let prev;

  while (data) {
    if (!prev) {
      prev = data;
      data = data.next;
      continue;
    }

    if (prev.val !== data.val) {
      prev.next = data;
      prev = data;
    } else {
      prev.next = null;
    }
    data = data.next;
  }
  return head;
};

list.print(deleteDuplicates(list.head));
