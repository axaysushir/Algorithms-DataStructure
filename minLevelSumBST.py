'''
Asked by Twitter:
You are given the root of a binary tree. Find the level for the binary tree with the minimum sum, and return that value.
For instance, in the example below, the sums of the trees are 10, 2 + 8 = 10, and 4 + 1 + 2 = 7. So, the answer here should be 7.
#     10
#    /  \
#   2    8
#  / \    \
# 4   1    2

'''
class Node:
  def __init__(self, value, left=None, right=None):
    self.val = value
    self.left = left
    self.right = right

class Solution:
    def minLevelSum(self, root: Node):
        sums = []
        q = [(1, root)]
        while len(q) > 0:
            level, node = q.pop(0)
            if len(sums) < level:
                sums.append(0)
            sums[level - 1] += node.val

            if node.left:
                q.append((level + 1, node.left))
            if node.right :
                q.append((level + 1, node.right))
        return sums.index(min(sums)) + 1

node = Node(10)
node.left = Node(2)
node.right = Node(8)
node.left.left = Node(4)
node.left.right = Node(1)
node.right.right = Node(2)

print(Solution().minLevelSum(node))

from collections import defaultdict 
class Solution:
    def minLevel(self, root: Node)-> int:
        if root is None:
            return 0

        # Keep track of the sum at a spacific level
        level_sum = defaultdict(int)
        self.getMinLevelSum(root, 1, level_sum)
        minLevel = float('-inf')
        minSum = float('-inf')

        for key in level_sum:
            if level_sum[key] < minSum:
                minLevel = key
                minSum = level_sum[key]
        return minLevel

    def getMinLevelSum(self, root, level, level_sum):
        if root is None:
            return 
        level_sum[level] += root.val

        self.getMinLevelSum(root.left, level + 1, level_sum)
        self.getMinLevelSum(root.right, level + 1, level_sum)

node = Node(10)
node.left = Node(2)
node.right = Node(8)
node.left.left = Node(4)
node.left.right = Node(1)
node.right.right = Node(2)

print(Solution().minLevelSum(node))