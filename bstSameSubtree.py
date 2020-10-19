# Given 2 binary trees t and s, find if s has an equal subtree in t, where the structure and the values are the same. Return True if it exists, otherwise return False.

class Node:
  def __init__(self, value, left=None, right=None):
    self.value = value
    self.left = left
    self.right = right

  def __repr__(self):
    return f"(Value: {self.value} Left: {self.left} Right: {self.right})"

def isIdentical(root1, root2):
    if root1 is None and root2 is None:
        return True
    if root1 is None or root2 is None:
        return False

    return (root1.value == root2.value and isIdentical(root1.left, root2.left) and
            isIdentical(root1.right, root2.right))

def find_subtree(s, t):
  # Fill this in.
    if s is None:
        return True
    
    if t is None:
        return False
    # check tree with root as current node
    if isIdentical(t, s):
        return True
    # if the tree with root as current node doent match
    # then try left and right subtree one by one
    return find_subtree(t.left, s) or find_subtree(t.right, s)

t3 = Node(4, Node(3), Node(2))
t2 = Node(5, Node(4), Node(-1))
t = Node(1, t2, t3)

s = Node(4, Node(3), Node(2))
"""
Tree t:
    1
   / \
  4   5 
 / \ / \
3  2 4 -1

Tree s:
  4 
 / \
3  2 
"""

print(find_subtree(s, t))
# True
