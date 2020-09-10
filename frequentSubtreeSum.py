'''
Given a binary tree, find the most frequent subtree sum. 

Example:
   3
  / \
 1   -3

The above tree has 3 subtrees. The root node with 3, and the 2 leaf nodes, which gives us a total of 3 subtree sums. The root node has a sum of 1 (3 + 1 + -3), the left leaf node has a sum of 1, and the right leaf node has a sum of -3. Therefore the most frequent subtree sum is 1.

If there is a tie between the most frequent sum, you can return any one of them.
'''
import collections

class Node():
  def __init__(self, value, left=None, right=None):
    self.val = value
    self.left = left
    self.right = right

class Solution:
    def findFrequentTreeSum(self, root):
        subtreeSum = collections.defaultdict(int)
        self.helper(root, subtreeSum)

        maxFreq = 0
        ans = []
        for key in subtreeSum.keys():
            freq = subtreeSum[key]
            if freq > maxFreq:
                maxFreq = freq
                ans = [key]
            elif freq == maxFreq:
                ans.append(key)
        
        return ans

    
    def helper(self, tree, subtreeSum):
        if not tree: return 0

        left = self.helper(tree.left, subtreeSum)
        right = self.helper(tree.right, subtreeSum)
        treeSum = left + right + tree.val
        subtreeSum[treeSum] += 1

        return treeSum

root = Node(5, Node(2), Node(-5))
x = Solution().findFrequentTreeSum(root)
print(x)