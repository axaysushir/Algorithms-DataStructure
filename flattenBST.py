# Given a binary tree, flatten the binary tree using inorder traversal. Instead of creating a new list, reuse the nodes, where the list is represented by following each right child. As such the root should always be the first element in the list so you do not need to return anything in the implementation, just rearrange the nodes such that following the right child will give us the list.

class Node:
  def __init__(self, value, left=None, right=None):
    self.value = value
    self.left = left
    self.right = right

  def __repr__(self):
    return f"({self.value}, {self.left}, {self.right})"

def flatten_bst(root):
    # Each time when we prune a right subtree, we use while loop to find right most leaf
    # of the current left subtree and append the subtree there.
    curr = root
    while curr != None:
        if curr.left != None:
            if curr.right != None:
                next = curr.left
                while next.right != None:
                    next = next.right
                    next.right = curr.right
            
            curr.right = curr.left
            curr.left = None
        curr = curr.right


n5 = Node(5)
n4 = Node(4)
n3 = Node(3, n4)
n2 = Node(2, n5)
n1 = Node(1, n2, n3)

#      1
#    /   \
#   2     3
#  /     /
# 5     4

flatten_bst(n1)
print(n1)

# n1 should now look like
#   1
#    \
#     2
#      \
#       5
#        \
#         3
#          \
#           4
