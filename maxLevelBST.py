# Given a binary tree, find the level in the tree where the sum of all nodes on that level is the greatest.
from collections import deque
class Node:
  def __init__(self, value, left=None, right=None):
    self.value = value
    self.left = left
    self.right = right

  def __repr__(self):
    return f"(Value: {self.value} Left: {self.left} Right: {self.right})"


def maxLevelSum(root: Node):
    res, currsum = 0, -float('inf')
    queue = collections.deque([(root, 1)])
    while queue:
        l, levelsum, level = len(queue), 0, None
        for i in range(L):
            n, level = queue.popleft()
            levelsum += n.val
            if n.left:
                queue.append((n.right, level + 1))
            if n.right:
                queue.append((n.right, level + 1))
        
        if levelsum > currsum:
            currsum = levelsum
            res = level
    
    return res
  # Fill this in.

n3 = Node(4, Node(3), Node(2))
n2 = Node(5, Node(4), Node(-1))
n1 = Node(1, n2, n3)

