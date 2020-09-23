/*
Asked by Twitter:

Given a tree, find if the binary tree is height balanced or not. A height balanced binary tree is a tree where every node's 2 subtree do not differ in height by more than 1.
#     1
#    / \
#   2   3
#  /
# 4  
*/

var isbalanced = root => {
    if (root == null) return true
    return getHeight(root) !== -1
}

var getHeight = node => {
    if (node == null) {
        return 0
    }

    var left = getHeight(node.left)
    var right = getHeight(node.right)

    if (left === -1 || right === -1 || Math.abs(left - right) > 1) {
        return -1
    }
    return Math.max(left, right) + 1
}