# A number can be constructed by a path from the root to a leaf. Given a binary tree, sum all the numbers that can be constructed from the root to all leaves.

class Node:
  def __init__(self, value, left=None, right=None):
    self.value = value
    self.left = left
    self.right = right

  def __repr__(self):
    return f"({self.value}, {self.left}, {self.right})"


def bst_numbers_sum(root, num):
    # subtract node value from the sum when recurring down and chck to see
    # if the sum is 0 when your run out of tree
    if root is None:
        return num
    else:
        ans = 0

        subsum = num - root.value

        # If we reach a leaf node and sum becomes 0 then return true 
        if (subsum == 0 and root.left == None and root.right == None):
            return True
        # otherwise check both subtrees
        if root.left is not None:
            ans = ans or bst_numbers_sum(root.left, subsum)
        if root.right is not None:
            ans = ans or bst_numbers_sum(root.right, subsum)
        
        return ans


n5 = Node(5)
n4 = Node(4)
n3 = Node(3)
n2 = Node(2, n4, n5)
n1 = Node(1, n2, n3)

#      1
#    /   \
#   2     3
#  / \
# 4   5

print(bst_numbers_sum(n1, 125))
# 262
# Explanation: 124 + 125 + 13 = 262

root = Node(10)
root.left = Node(8)
root.right = Node(2)
root.left.right = Node(5)
root.left.left = Node(3)
root.right.left = Node(2)

print(bst_numbers_sum(root, 21))