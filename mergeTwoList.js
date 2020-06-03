// MERGE tow linked list
// time complexity O(n+m) 72ms
var mergeTwoLists = function (l1, l2) {
  if (!l1 || !l2) return l1 || l2;
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
};
let l1 = [1, 2, 3];
let l2 = [4, 3, 5];
console.log(mergeTwoLists(l1, l2));

//  O(n) solution 64ms
var mergeTwoLists = function (l1, l2) {
  let head = { next: null };
  let current = head;

  while (l1 && l2) {
    if (l1.val > l2.val) {
      current.next = l2;
      l2 = l2.next;
    } else {
      current.next = l1;
      l1 = l1.next;
    }
    current = current.next;
  }
  current.next = l1 ? l2 : l2;
  return head.next;
};
let l1 = [1, 2, 3];
let l2 = [4, 3, 5];
console.log(mergeTwoLists(l1, l2));

//  Swap in place 80ms
var mergeTwoLists = function (l1, l2) {
  // if (l1 === null) return l2
  // else if (l2 === null) return l1
  if (!l1 || !l2) return l1 || l2;

  if (l1.val > l2.val) {
    [l1, l2] = [l2, l1]; // swap list in place
  }
  l1.next = mergeTwoLists(l1.next, l2);
  return l1 || l2;
};
let l1 = [1, 2, 4];
let l2 = [1, 3, 4];
console.log(mergeTwoLists(l1, l2));
