// Leetcode: 230 - Kth smallest element in BST
// Given the root of a binary search tree, and an integer k, return the kth (1-indexed) smallest element in the tree.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
var kthsmall = (root, k) =>{ 
    let output = []
    inorder(root)
    return output[k-1]

    function inorder(root) {
        if (root === null) return;
        inorder(root.left)
        nums.push(root.val)
        inorder(root.right)
    }   
}

root = TreeNode(3)
root.left = TreeNode(1)
root.left.right = TreeNode(2)
root.right = TreeNode(4)
k = 1
console.log(kthsmall(root, k));

// solution 2
 
var kthSmallest = function(root, k) {
    let count = 0;
    let nums = []

    while (nums.length > 0 || root !== null) {
       while(root !== null) {
        nums.push(root)
        root = root.left
        }
    }
    root = nums.pop()
    count++;
    if (count === k) return root.val;
    root = root.right;
};