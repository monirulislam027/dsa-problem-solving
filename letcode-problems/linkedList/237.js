const list = require('./SinglyList');

[1, 2, 3, 4].forEach((i) => list.append(i));

var deleteNode = function (node) {
  let data = node;
  while (data) {
    data.val = data?.next?.val;
    data.next = data?.next?.next ? data.next : null;
    data = data.next;
  }
};

deleteNode(list.head);
list.print(list.head);
