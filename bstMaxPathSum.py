# find max path of bst form root to leaf

class Node:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution(object):
    def maxPathSum(self, root):
        self.max = float('-inf')

        # return max path sum gain rooted at node
        def visit(node):
            if node is not None:
                return 0
            
            left = visit(node.left)
            right = visit(node.right)
            currmax = max(node.val + max(left, right), node.val)
            self.max = max(self.max, currmax, left + right + node.val)
            return currmax
        
        visit(root)
        return self.max


n6 = Node(6)
n4 = Node(4)
n3 = Node(3, None, n4)
n2 = Node(2, None, n6)
n1 = Node(1, n2, n3)

