# Given a binary tree, find the minimum depth of the binary tree. The minimum depth is the shortest distance from the root to a leaf.

class Node:
  def __init__(self, value, left=None, right=None):
    self.value = value
    self.left = left
    self.right = right

def min_depth_bst(root):
    if not root:
        return 0
    elif not root.left:
        return min_depth_bst(root.right) + 1
    
    elif not root.right:
        return min_depth_bst(root.left) + 1
    
    return min(min_depth_bst(root.left), min_depth_bst(root.right))
  
n3 = Node(3, None, Node(4))
n2 = Node(2, Node(3))
n1 = Node(1, n2, n3)

#     1
#    / \
#   2   3
#        \
#         4
print(min_depth_bst(n1))
# 2


# Max depth of bst
# Given the root of a binary tree, return its maximum depth.

# A binary tree's maximum depth is the number of nodes along the 
# longest path from the root node down to the farthest leaf node.

class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        if not root:
            return 0
        elif not root.left:
            return self.maxDepth(root.right) + 1

        elif not root.right:
            return self.maxDepth(root.left) + 1

        return max(1+self.maxDepth(root.left), 1+ self.maxDepth(root.right))
  