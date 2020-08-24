''' Asked By Apple
You are given the root of a binary tree, along with two nodes, A and B. Find and return the 
lowest common ancestor of A and B. For this problem, you can assume that each node also has 
a pointer to its parent, along with its left and right child.
class TreeNode:
  def __init__(self, val):
    self.left = None
    self.right = None
    self.parent = None
    self.val = val


def lowestCommonAncestor(root, a, b):
  # Fill this in.

#   a
#  / \
# b   c
#    / \
#   d*  e*
root = TreeNode('a')
root.left = TreeNode('b')
root.left.parent = root
root.right = TreeNode('c')
root.right.parent = root
a = root.right.left = TreeNode('d')
root.right.left.parent = root.right
b = root.right.right = TreeNode('e')
root.right.right.parent = root.right

print lowestCommonAncestor(root, a, b).val
# c

*/

// Solution 1: Recursive
/*
1.  Start traversing the tree from the root node.
2.  If both the nodes p and q are in the right subtree, then continue the search with right subtree starting step 1.
3.  If both the nodes p and q are in the left subtree, then continue the search with left subtree starting step 1.
4.  If both step 2 and step 3 are not true, this means we have found the node which is common to node p's and q's subtrees. 
    and hence we return this common node as the LCA.
'''

# Recursive Solution

class TreeNode:
  def __init__(self, val):
    self.left = None
    self.right = None
    self.parent = None
    self.val = val

class Solution:
    def lowestCommonAncestor(self, root, p, q):
        if not root: 
            return root

        if p.val == root.val or q.val == root.val:
            return root

        if p.val > root.val and q.val > root.val:
            return self.lowestCommonAncestor(root.right, p, q)
        elif p.val < root.val and q.val < root.val:
            return self.lowestCommonAncestor(root.left, p, q)
        else :
            return root



# Time Complexity: O(N), where NNN is the number of nodes in the BST. In the worst case we might be visiting all the nodes of the BST.

# Space Complexity: O(N). This is because the maximum amount of space utilized by the recursion stack would be NNN since the height of 
# a skewed BST could be NNN. 