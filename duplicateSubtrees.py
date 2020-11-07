# Given a binary tree, find all duplicate subtrees (subtrees with the same value and same structure) and return them as a list of list [subtree1, subtree2, ...] where subtree1 is a duplicate of subtree2 etc.
'''
Suppose we have a unique identifier for subtrees: two subtrees are the same if and only if they have the same id.

Then, for a node with left child id of x and right child id of y, (node.val, x, y) uniquely determines the tree.

Solution:
If we have seen the triple (node.val, x, y) before, we can use the identifier we've remembered. Otherwise, we'll create a new one.
'''

from collections import defaultdict, Counter

class Node:
  def __init__(self, value, left=None, right=None):
    self.value = value
    self.left = left
    self.right = right

  def __repr__(self):
    if self.left and self.right:
      return f"({self.value}, {self.left}, {self.right})"
    if self.left:
      return f"({self.value}, {self.left})"
    if self.right:
      return f"({self.value}, None, {self.right})"
    return f"({self.value})"

def dup_trees(root):
    trees = defaultdict()
    trees.default_factory = trees.__len__
    count = Counter()
    ans = []
    def lookup(node):
        if node:
            id = trees[node.value, lookup(node.left), lookup(node.right)]
            count[id] += 1
            if count[id] == 2:
                ans.append(node)
            return id
    lookup(root)
    return ans

n3_1 = Node(3)
n2_1 = Node(2, n3_1)
n3_2 = Node(3)
n2_2 = Node(2, n3_2)
n1 = Node(1, n2_1, n2_2)
# Looks like
#     1
#    / \
#   2   2
#  /   /
# 3   3

print(dup_trees(n1))
# [[(3), (3)], [(2, (3)), (2, (3))]]
# There are two duplicate trees
#
#     2
#    /
#   3
# and just the leaf
#
# 3

# Time Complexity: O(N)O(N)O(N), where NNN is the number of nodes in the tree. We visit each node once.

# Space Complexity: O(N)O(N)O(N). Every structure we use is using O(1)O(1)O(1) storage per node.
