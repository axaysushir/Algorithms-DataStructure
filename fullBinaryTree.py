'''Given a binary tree, remove the nodes in which there is only 1 child, so that the binary tree is a full binary tree.

So leaf nodes with no children should be kept, and nodes with 2 children should be kept as well.

Here's a starting point:
from collections import deque

class Node(object):
  def __init__(self, value, left=None, right=None):
    self.left = left
    self.right = right
    self.value = value
  def __str__(self):
    q = deque()
    q.append(self)
    result = ''
    while len(q):
      num = len(q)
      while num > 0:
        n = q.popleft()
        result += str(n.value)
        if n.left:
          q.append(n.left)
        if n.right:
          q.append(n.right)
        num = num - 1
      if len(q):
        result += "\n"

    return result

def fullBinaryTree(node):
  # Fill this in.

# Given this tree:
#     1
#    / \ 
#   2   3
#  /   / \
# 0   9   4

# We want a tree like:
#     1
#    / \ 
#   0   3
#      / \
#     9   4

tree = Node(1)
tree.left = Node(2)
tree.right = Node(3)
tree.right.right = Node(4)
tree.right.left = Node(9)
tree.left.left = Node(0)
print fullBinaryTree(tree)
# 1
# 03
# 94
'''

class Node:
    def __init__(self, data):
        self.data  = data
        self.left = None
        self.right = None

    #  For inorder traversal
def printInorder(root):
    if root is not None:
        printInorder(root.left)
        print (root.data)
        printInorder(root.right)

# remove all node with only 1 child and retur new root
def RemoveNodes(root):
    if root is None:
        return None

    # Recur for left tree
    root.left = RemoveNodes(root.left)
    # For right tree
    root.right = RemoveNodes(root.right)
    # if both left and right child is None the node is not a Half node 
    if root.left is None and root.right is None:
        return root
    # If current nodes is a half node with left child None then it's right child is returned and    
    # replaces it in the given tree 
    if root.left is None:
        new_root = root.right
        temp = root
        root = None
        del(temp)
        return new_root

    if root.right is None:
        new_root = root.left
        temp = root
        root = None
        del(temp)
        return new_root
    
    return root

root = Node(2) 
root.left = Node(7) 
root.right = Node(5) 
root.left.right = Node(6) 
root.left.right.left = Node(1) 
root.left.right.right = Node(11) 
root.right.right = Node(9) 
root.right.right.left = Node(4) 

# printInorder(root)
NewRoot = RemoveNodes(root)
printInorder(NewRoot)
# 1
# 6
# 11
# 2
# 4