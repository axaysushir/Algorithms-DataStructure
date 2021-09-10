'''
Given a binary tree and an integer k, filter the binary tree such that its leaves don't contain the value k. Here are the rules:

- If a leaf node has a value of k, remove it.
- If a parent node has a value of k, and all of its children are removed, remove it.
'''
class Node:
  def __init__(self, value, left=None, right=None):
    self.value = value
    self.left = left
    self.right = right

  def __repr__(self):
    return f"value: {self.value}, left: ({self.left.__repr__()}), right: ({self.right.__repr__()})"

# Recursion 
def filter(root, k):
  if root is None:
    return None

  root.left = filter(root.left, k)
  root.right = filter(root.right, k)

  if root.left is None and root.right is None and root.value == k:
    return None
  else:
    return root



#     1
#    / \
#   1   1
#  /   /
# 2   1
n5 = Node(2)
n4 = Node(1)
n3 = Node(1, n4)
n2 = Node(1, n5)
n1 = Node(1, n2, n3)

print(filter(n1, 1))
#     1
#    /
#   1
#  /
# 2
# value: 1, left: (value: 1, left: (value: 2, left: (None), right: (None)), right: (None)), right: (None)
