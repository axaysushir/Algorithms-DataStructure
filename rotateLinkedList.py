# Given a linked list and a number k, rotate the linked list by k places.
 # Now, in order to solve this question, we have 3 steps to perform,
    # 1. Find the tail of current LL and attach it to head, that way we get a circular LL
    # 2. We have to take k+1 nodes  from current LL tail and break there, giving us new tail and new head
    # 3. Now since, we cant traverse backward in SLL, we have to start from beginning and traverse, total_length 
    # of LL - k to get new tail and new head
    # 4. In case of, rotations more than length of LL, we just mod it with total length, for example, if LL length 
    # is 10 and we rotate it by 12, after 10th rotation, we get the same LL, so in fact, we are doing just 2 rotations 
    # and that would be k%length (12%10)

class Node:
  def __init__(self, value, next=None):
    self.value = value
    self.next = next

class Solution:
    def rotateRight(self, head: Node, k):
        # if linked list is empty or have one node
        if not head or not head.next or k == 0:
            return head

        tail = head
        count = 1
        while tail.next:
            tail = tail.next
            count += 1
        
        # new k
        k = k % count
        if k == 0:
            return head
        
        tail.next = head
        breakAt = 1
        pointer = head
        while breakAt != count - k:
            pointer = pointer.next
            breakAt += 1
        head = pointer.next
        pointer.next = None
        return head

llist = [Node(1, Node(2, Node(3, Node(4))))]

print(Solution().rotateRight(llist, 3))