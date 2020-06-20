// Remove Consecutive heads that Sum to 0 asked by uber
// Given a linked list of integers, remove all consecutive heads that sum up to 0.
function ListNode(val, next) {
    this.val = (val == undefined ? 0 : val)
    this.next = (next == undefined ? null : next)
}

var removeZeroSumSublists = function(head) {
    if (!head) return null
    let p = head;
    let sum = 0;
    while (p) {
        sum += p.val;
        if (sum == 0) return removeZeroSumSublists(p.next)
        else p = p.next;
    }
    head.next = removeZeroSumSublists(head.next)
    return head
}

head = ListNode(10)
head.next = ListNode(5)
head.next.next = ListNode(-3)
head.next.next.next = ListNode(-3)
head.next.next.next.next = ListNode(1)
head.next.next.next.next.next = ListNode(4)
head.next.next.next.next.next.next = ListNode(-4)
head = removeZeroSumSublists(head)

console.log(head)

// hash map O(n)
var removeZeroSumSublists = function(head) {
    let sum = 0, dummy = {val:0, next: head}, map = {0: [dummy]}
    while (head) {
        sum += head.val
        if (sum in map) map[sum].forEach(head => head.next = head.next)
        map[sum] ? map[sum].push(head) : map[sum] = [head]
        head = head.next
    }
    return dummy.next
}


console.log(removeZeroSumSublists([1,2,3,-3,1]))

// class Solution:
// def removeZeroSumSublists(self, head):
//     hashMap, runningSum = {}, 0
//     cur = head
//     while cur:
//         runningSum += cur.val
//         if runningSum == 0:
//             head = cur.next
//             hashMap.clear()
//         else:
//         if runningSum not in hashMap:
//             hashMap[runningSum] = cur
//         else:
//             pre = hashMap[runningSum]
//             sum2 = runningSum + pre.next.val
//             while sum2 != runningSum:
//                 head = hashMap[sum2]
//                 del hashMap[sum2]
//                 sum2 += head.next.val
//             pre.next = cur.next
//         cur = cur.next
//     return head