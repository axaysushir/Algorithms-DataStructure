# Given a linked list, remove the n-th node from the end of list and return its head.

# Example:

# Given linked list: 1->2->3->4->5, and n = 2.

# After removing the second node from the end, the linked list becomes 1->2->3->5.
#  O(L) time complexity
# one pass solution
class Solution:
    def removeNthFromEnd(self, head, n):
        size = 1
        cur = p = head
        while cur.next:
            size += 1
            cur = cur.next
            if size > n + 1:
                p = p.next
            if size == n:
                return head.next
            else:
                p.next = p.next.next
                return head