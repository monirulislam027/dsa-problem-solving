const list = require('./SinglyList');

function removeFromLastAt(head, n) {
  let len = 0;
  let cur = head;
  while (cur) {
    len++;
    cur = cur.next;
  }

  const position = len - n;

  if (position === 0) {
    head = head.next;
    return head;
  }

  let i = 0;
  cur = head;
  while (cur && i < position - 1) {
    cur = cur.next;
    i++;
  }

  cur.next = cur?.next?.next || null;

  return head;
}
