'''
Asked by UBER
Given a postorder traversal for a binary search tree, reconstruct the tree. A postorder 
traversal is a traversal order where the left child always comes before the right child, 
and the right child always comes before the parent for all nodes.

'''

class Node():
  def __init__(self, val, left=None, right=None):
    self.val = val
    self.left = left
    self.right = right

# Iterative
class Solution:
    def postorderTraversal(self, root: Node):
        if not root:
            return []
        
        stack1 = [root]
        stack2 = [] # At the end stack contains postorder traversal
        while stack1:
            temp = stack1.pop()
            if temp.left:
                stack1.append(temp.left)
            if temp.right:
                stack1.append(temp.right)
            stack2.append(temp.val)
        
        # stack traversed backwards, revisit and return list
        return stack2[::-1]



def postorder(self, root: Node):
    if root is None:
        return []
    
    return self.postorder(root.left) + self.postorder(root.right) + [root.val]

