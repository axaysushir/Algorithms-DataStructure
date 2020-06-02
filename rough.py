class Solution:
    def deleteDuplicates(self, head: ListNode) -> ListNode:
        if not head or not head.next:
            return head
        tmp = head
        while tmp and tmp.next:
            if tmp.val == tmp.next.val:
                while tmp.next and tmp.val == tmp.next.val:
                    tmp.next = tmp.next.next
                if tmp == head:
                    head: tmp.next
                else:
                    prev.next = tmp.next
                    tmp = tmp.next
            else:
                prev = tmp
                tmp = tmp.next

        return head



        
