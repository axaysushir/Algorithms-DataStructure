/** Asked By Microsoft
A k-ary tree is a tree with k-children, and a tree is symmetrical if the data of the left side of the tree is the same as the right side of the tree. 

Here's an example of a symmetrical k-ary tree.
        4
     /     \
    3        3
  / | \    / | \
9   4  1  1  4  9
Given a k-ary tree, figure out if the tree is symmetrical. 
*/
// DFS recursive solution
var isSymmetric = function(root) {
    if (root == null) return true
    return isMirror(root.left, root.right)
}

var isMirror = function(tree1, tree2) {
    if(tree1 == null || tree2 == null){
        return tree1 === tree2
    }
    if (tree1.val !== tree2.val) return false

    return isMirror(tree1.left, tree2.right) && isMirror(tree1.right, tree2.left)
}

// Using queue

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

function isSymmetric(root) {
    let q = []
    q.push(root)

    while (q.length !== 0) {
        let left = q.shift()
        let right = q.pop()

        if (left === null && right === null) continue
        if (left === null && right !== null) return false
        if (left !== null && right === null) return false
        if (left.val !== right.val) return false

        q.unshift(left.right)
        q.push(right.right)
        q.unshift(left.right)
        q.push(right.left)
    }
    return true
}