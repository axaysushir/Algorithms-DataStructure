// remove duplicate
let deleteDuplicate = function (head) {
    let node = new ListNode(-1);
    let ans = node;
    let pre = head,
      cur = head;
    while (cur) {
      while (cur.next && cur.val == cur.next.val) cur = cur.next;
      if (pre == cur) (ans.next = cur), (ans = ans.next);
      pre = cur = cur.next;
    }
    ans.next = null;
    return node.next;
  };
  
  let deleteDuplicate = function (head) {
    if (!head) return null
    let pre = new ListNode(0)
    pre.next = head;
    let node = pre
  
    while(node.next && node.next.next) {
      if (node.next.val === node.next.next.val){
        let val = node.next.val
        while(node.next && node.next.val == val) {
          node.next = node.next.next
        }
      } else node = node.next
    }
    return pre.next
  }