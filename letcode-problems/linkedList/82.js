const list = require('./SinglyList');

[1, 2, 3, 3, 4, 4, 5].forEach((i) => list.append(i));

var deleteDuplicates = function (head) {
  const results = head;
  let data = results;
  let ppNode;
  let pNode;
  let next;
  while (data?.next) {
    next = data.next;
    if (data.val !== next.val) {
      if (pNode) {
        ppNode = pNode;
      }
      pNode = data;
    } else {
      if (ppNode) {
        pNode = ppNode;
        ppNode = null;
      }
    }
    data = data.next;
  }
  return results;
};

const dt = deleteDuplicates(list.head);
list.print(dt);
