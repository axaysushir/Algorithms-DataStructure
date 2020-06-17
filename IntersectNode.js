//  Find intersction in node
let getIntersactionNode = function(headA, headB) {
    if (headA === null || headB === null) return null;
    let p1 = headA; // initialize pointers
    let p2 = headB;

    while (p1 !== p2) {
        p1 = p1.next
        p2 = p2.next
        if (p1 === p2) return p1;
        if (p1 === null) p1 = headB;
        if (p2 === null) p2 = headA
    }
    return p1
}

function ListNode(val) {
    this.val = val
    this.next = null
}
let a, b, c, next
a = ListNode(1)
a.next = ListNode(2)
a.next.next = ListNode(3)
a.next.next.next = ListNode(4)
b = ListNode(6)
b.next = a.next.next

c = getIntersactionNode(a, b)


console.log(c);
