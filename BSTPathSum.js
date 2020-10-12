// Asked by google
// Given a binary tree, find and return the largest path from root to leaf.
/*
*
 *    p             p           p
 *  /   \          /             \
 * c     c   or   c     or        c
 *
 * lets start with an algorithm we should be able to come up with and that is finding the max sum
 * so we look at the sum of our left children and the sum of our right children add that to our value
 * and compare it against our max
 *
 * now the differences are that we can only have one parent that links left and right nodes to keep the above rules true
 * so at every parent of two nodes we check the max sum and compare it to our max, this ensures that we keep the rules above intact
 * and since we dont return that sum we can continue checking the rest of the tree
 * now so we can continue checking the rest of the tree we just return the max value of our left or right child
 * 
*/
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var maxPathSum = (root) => {
    let max = -Infinity
    note(root)
    return max

    function note(node){
        if (node === null) return 0
        let left = Math.max(note(node.left), 0)
        let right = Math.max(note(node.right), 0)
        let currMax = right + node.val + left
        if (currMax > max) max = currMax
        return node.val + Math.max(left, right)
    }
}
