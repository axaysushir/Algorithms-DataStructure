'''
Asked by Apple:

Given a binary tree, return the list of node values in zigzag order traversal. Here's an example
# Input:
#         1
#       /   \
#      2     3
#     / \   / \
#    4   5 6   7
#
# Output: [1, 3, 2, 4, 5, 6, 7]
'''
class Node:
  def __init__(self, value, left=None, right=None):
    self.value = value
    self.left = left
    self.right = right

class Solution:
    def zigzag_order(self, root: Node):
        if not root :
            return []
        
        # main stack  keeps the nodes from the current level
        # aux stack keeps the nodes form the next level
        mStack, aStack = [root], []
        curRes, curLevel, res = [], 0, []

        while len(mStack) > 0:
            # record
            node = mStack.pop()
            curRes.append(node.value)
            temp = [x for x in [node.left, node.right] if x]
            if curLevel % 2 == 0:
                aStack += temp
            else :
                aStack += temp[::-1]
            
            # reset
            #  len of main stack == 00 means we finished traversing cur level
            if len(mStack) == 0:
                mStack, aStack = aStack, []
                res.append(curRes)
                curRes, curLevel = [], curLevel + 1
        
        return res

n4 = Node(4)
n5 = Node(5)
n6 = Node(6)
n7 = Node(7)
n2 = Node(2, n4, n5)
n3 = Node(3, n6, n7)
n1 = Node(1, n2, n3)

print(Solution().zigzag_order(n1))

# Solution 2:
from collections import deque

def zigzag(root: Node):
    if not root:
        return []
    
    sol = []
    q = deque()
    q.append(root)

    while q:
        currlevel = []
        for i in range(len(q)):
            currnode = q.popleft()
            if currnode.left:
                q.append(currnode.left)
            if currnode.right:
                q.append(currnode.right)
            
            currlevel.append(currnode.value)
        
        sol.append(currlevel)

    for i in range(len(sol)):
        if i % 2 == 1:
            sol[i].reverse()

    return sol

print(zigzag(n1))