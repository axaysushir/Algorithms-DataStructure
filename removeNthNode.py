#
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
