/* Asked By Apple
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
*/

var lowestCommonAncestor = function(root, p, q) {
    // Value of current node or parent node
    node = root
    let parentVal = node.val
    let pVal = p.val
    let qVal = q.val

    if (pVal > parentVal && qVal > parentVal) {
        return lowestCommonAncestor(root.right, p, q)
    } else if (pVal < parentVal && qVal < parentVal) {
        return lowestCommonAncestor(root.left, p, q)
    }
    // we have found the LCA node
    else return root
};

var lowestCommonAncestor = function(root, p, q) {
    let pVal = p.val
    let qVal = q.val

    node = root
    while (node !== null) {
        let parentVal = node.val
        if (pVal > parentVal && qVal > parentVal) {
            node = node.right
        } else if (pVal < parentVal && qVal < parentVal) {
            node = node.left
        } else {
            return node
        }
    }
    return null
}

// Solution 3: Recursion
const lowestCommonAncestor = (root, p, q) => {
    if (p.val < root.val && q.val < root.val) {
        return lowestCommonAncestor(root.left, p, q)
    } else if (p.val > root.val && q.val > root.val) {
        return lowestCommonAncestor(root.right, p, q)
    } else {
        return root
    }
}
