# Asked by Uber
# Given a binary tree, and a target number, find if there is a path from the root to any leaf that sums up to the target.

# Soultion: O(n)
# subtract the node value from the sum when recurring down,
# and check to see if the sum is 0 when you run out of tree.

class Node:
  def __init__(self, value, left=None, right=None):
    self.value = value
    self.left = left
    self.right = right

def target_sum_bst(root, target):
    if root is None:
        return target == 0
    else: 
        ans = 0
        subSum = target - root.value

        # if we reach lead node and sum become 0 return true
        if (subSum == 0 and root.left == None and root.right == None):
            return True
        # otherwise check both subtrees
        if root.left is not None:
            ans = ans or target_sum_bst(root.left, subSum)
        if root.right is not None:
            ans = ans or target_sum_bst(root.right, subSum)
        
        return ans



#      1
#    /   \
#   2     3
#    \     \
#     6     4
n6 = Node(6)
n4 = Node(4)
n3 = Node(3, None, n4)
n2 = Node(2, None, n6)
n1 = Node(1, n2, n3)

print(target_sum_bst(n1, 9))
# True
# Path from 1 -> 2 -> 6
