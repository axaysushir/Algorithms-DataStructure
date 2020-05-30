//  remove nth last node from linked list
// Given linked list: 1->2->3->4->5, and n = 2.

var removeNthFromEnd = function (head, n) {
  let listNode;
  let dummy = new listNode(0);
  dummy.next = head;
  let length = 0;
  first = head;

  while (first != null) {
    length++;
    first = first.next;
  }
  length -= n;
  first = dummy;
  while (length > 0) {
    legth--;
    first = first.next;
  }
  first.next = first.next.next;
  return dummy.next;
};
