// 404. Leetcode - sum of left leaves
// Given the root of a binary tree, return the sum of all left leaves.

let sumOfLeftLeaves = root =>{ 
    if (root === null) return 0;
    else if (root.left !== null && root.left.left == null && root.left.right == null) {
        return root.left.val + sumOfLeftLeaves(root.right)
    } else {
        return sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right)
    }
}

root = [3,9,20,null,null,15,7]
console.log(sumOfLeftLeaves(root));