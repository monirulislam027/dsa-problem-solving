const list = require('./SinglyList');

[1, 0, 1].forEach((i) => list.append(i));

const getDecimalValue = function (head) {
  let binary = '';
  let current = head;
  while (current) {
    binary += current.val;
    current = current.next;
  }

  return parseInt(binary, 2);
};

console.log(getDecimalValue(list.head));

// list.print(list.head);
