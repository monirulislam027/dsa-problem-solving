const list = require('./SinglyList');
list.append(5);
list.append(6);
const middleNode = function (head) {
  let slow = head;
  let fast = head;
  while (fast) {
    if (!fast.next) break;
    fast = fast.next?.next || fast.next;
    slow = slow.next;
  }
  return slow;
};

console.log(middleNode(list.head));

list.print(list.head);
