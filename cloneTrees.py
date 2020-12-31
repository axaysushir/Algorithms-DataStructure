# Given two binary trees that are duplicates of one another, and given a node in one tree, find that correponding node in the second tree.

# For instance, in the tree below, we're looking for Node #4.

# For this problem, you can assume that:
# - There can be duplicate values in the tree (so comparing node1.value == node2.value isn't going to work).

# Can you solve this both recursively and iteratively?

class Node:
  def __init__(self, val):
    self.val = val
    self.left = None
    self.right = None

class Solution:
    def findNode(self, a, b, node):
        def inorder(o: Node, c: Node):
            if o:
                inorder(o.left, c.left)
                if o is node:
                    self.ans = c
                inorder(o.right, c.right)
                
        inorder(a, b)
        return self.ans 


# class solution:
#     def getTraget(ori, clo, target):
#         stcko, stckc = [], []
#         o, c = ori, clo

#         while stcko or c:
#             while c:
#                 stcko.append(c)
#                 stckc.append(c)

#                 c = c.left
#                 o = o.left
#             c = stckc.pop()
#             o = stcko.pop()

#             if c is target:
#                 return c
            
#             o = o.right
#             c = c.right

#  1
# / \
#2   3
#   / \
#  4*  5
a = Node(1)
a.left = Node(2)
a.right = Node(3)
a.right.left = Node(4)
a.right.right = Node(5)

b = Node(1)
b.left = Node(2)
b.right = Node(3)
b.right.left = Node(4)
b.right.right = Node(5)

print(Solution().findNode(a, b, a.right.left))
# 4

# print(solution().getTraget(a, b, a.right.left))

