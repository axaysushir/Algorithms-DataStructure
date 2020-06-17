# Intersection of Linked Lists by APPLE
# You are given two singly linked lists. The lists intersect at some node. Find, and return the node. Note: the lists are non-cyclical.You are given two singly linked lists. The lists intersect at some node. Find, and return the node. Note: the lists are non-cyclical.
# A = 1 -> 2 -> 3 -> 4
# B = 6 -> 3 -> 4
# return 3 This should return 3 (you may assume that any nodes with the same value are the same node).
# Time complexity O(m + n)  Traverse list A and store the address / reference to each node in a hash set. Then check every node bi in list B: if bi appears in the hash set, then bi is the intersection node.
# space complexity: O(n)
class Solution():
    def getIntersectionNode(self, headA, headB):
        dictA = {}
        # step 1: travel head A and store each node in a dictionary
        while headA:
            dictA[headA] = 0
            headA = headA.next
        # step 2: travel headB check each node if in dictionary
        while headB:
            # if checked return the headB node = intersactionNode
            if headB in dictA:
                return headB
            headB = headB.next
        # No checked no found intersection
        return None

# two pointer Time complexity O(m+n) space O(1)
class Solution():
    def getIntersectionNode(self, headA, headB):
        pa = headA
        pb = headB
        while pa != pb:
            if pa is None:
                pa = headB
            else:
                pa = pa.next
            if pb is None:
                pb = headA
            else:
                pb = pb.next
        return pa

class Node(object):
    def __init__(self, val):
        self.val = val
        self.next = None

    def prettyPrint(self):
        c = self
        while c:
            print(c.val)
            c = c.next


a = Node(1)
a.next = Node(2)
a.next.next = Node(3)
a.next.next.next = Node(4)

b = Node(6)
b.next = a.next.next

c = Solution().getIntersectionNode(a, b)
c.prettyPrint()
