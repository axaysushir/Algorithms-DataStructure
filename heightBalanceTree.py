# Given a tree, find if the binary tree is height balanced or not. A height balanced binary tree is a tree where every node's 2 subtree do not differ in height by more than 1.
#     1
#    / \
#   2   3
#  /
# 4 


class Node:
  def __init__(self, value, left=None, right=None):
    self.value = value
    self.left = left
    self.right = right

class Solution:
    def isBalanced(self, root: Node):
        return self.getHeight(root) != -1
    
    def getHeight(self, node):
        if not node:
            return 0
        
        left = self.getHeight(node.left)
        right = self.getHeight(node.right)

        if left == -1 or right == -1 or abs(left- right) > 1:
            return -1
        
        return max(left, right) + 1
  

 
n4 = Node(4)
n3 = Node(3)
n2 = Node(2, n4)
n1 = Node(1, n2, n3)

print(Solution().isBalanced(n1))
