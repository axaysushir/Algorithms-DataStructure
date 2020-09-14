# Asked by google
# Given a sorted list, create a height balanced binary search tree, meaning the height
# differences of each node can only differ by at most 1.

class TreeNode:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

    def __str__(self):
        answer = str(self.val)
        if self.left:
            answer += str(self.left)
        if self.right:
            answer += str(self.right)
        return answer


class Solution:
    def sortedArrayToBST(self, nums):
        def buildTree(left, right):
            if left > right:
                return None
            mid = (left + right) // 2
            newNode = TreeNode(nums[mid])
            newNode.left = buildTree(left, mid-1)
            newNode.right = buildTree(mid+1, right)
            return newNode
        return buildTree(0, len(nums)-1)


print(Solution().sortedArrayToBST([1, 2, 3, 4]))
