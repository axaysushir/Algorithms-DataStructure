//  reverse linked list O(n) time complexity O(1) space complexity
var reverseList = function (head) {
  let prevNode = null;

  while (head !== null) {
    let nextNode = head.next;
    head.next = prevNode;
    prevNode = head;
    head = nextNode;
  }

  return prevNode;
};

const revList = function (head) {
  if (head === null || head.next === null) return head;
  let prevnode = revList(head.next)
  head.next.next = head
  head.next = null;
  return prevnode;
}

// revursive
const reverseList = (head) => reverse(head, null);
const reverse = (node, next) => {
  if (!node) return next;

  let temp = node.next;
  node.next = next;
  return reverse(temp, node);
};

//  iteration
var reverseList = function (head) {
  let current = head;
  let prev = null;

  while (current) {
    let temp = current.next;
    current.next = prev;
    prev = current;

    if (temp === null) head = current;
    current = temp;
  }
  return head;
};
