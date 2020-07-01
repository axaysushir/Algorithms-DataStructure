// You are given an array of k sorted singly linked lists. Merge the linked lists into a single sorted linked list and return it.

// soluton 1: 
// solution 2: find node 1 by 1 

var mergeKLists = function(lists) {
    const merge = (l1, l2) => {
        if (!l1 || !l2) return l1 || l2;
        let node = {}
        const root = node;
        while (l1 && l2) {
            if (l1.val <= l2.val) {
                node.next = l1;
                l1 = l1.next
            } else {
                node.next = l2;
                l2 = l2.next;
            }
            node = node.next
        }
        if (l1) node.next = l1;
        if (l2) node.next = l2;
        return root.next;
    }
    let root = lists[0]
    for (let i=1; i<lists.length; i++) {
        root = merge(root, lists[i])
    }
    return root || null
}

// devide and conquer 

// Time complexity : O(Nlog⁡k) where k is the number of linked lists.
// We can merge two sorted linked list in O(n) time where nnn is the total number of nodes in two lists.
// Sum up the merge process and we can get: O(∑i=1log2k N)=O(Nlog⁡k)

// Space complexity : O(1)
// We can merge two sorted linked lists in O(1) space.

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
var mergeKLists = function(lists) {
    var merge = function(l1, l2) {
        if (l1 === null) return l2
        if (l2 === null) return l1

        var head = new ListNode(0);
        var curr = head;
        while (l1 !== null && l2 !== null) {
            if (l1.val <= l2.val) {
                curr.next = l1;
                l1 = l1.next
            } else {
                curr.next = l2;
                l2 = l2.next
            }
            curr = curr.next
        }
        curr.next = l1 !== null ? l1 : l2;
        return head.next;
    }

    if (!lists.length) return null;
    // when the size of lists is 1. that means we have merge all ist in one
    while (lists.length > 1) {
        num_lists = lists.length - 1;
        // Should basically pair up lists and merge them without handling
        // any list more than once. At the end of an iteration, there
        // shoud be half as many lists to handle. Should behave like a recursive solution. 
        for (var i=0; i < num_lists; i += 2) {
            let l1 = lists.shift()
            let l2 = lists.shift()
            lists.push(merge(l1, l2))
        }
    }
    return lists.shift();
}

let lists = [[1,4,5],[1,3,4],[2,6]]
console.log(mergeKLists(lists));
