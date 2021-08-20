// 1339 - Leetcode: Maximum Product of Splitted Binary Tree
//  Given the root of a binary tree, split the binary tree into two subtrees by removing one edge such that the product of the sums of the subtrees is maximized.

// Return the maximum product of the sums of the two subtrees. Since the answer may be too large, return it modulo 109 + 7.

var maxProduct = function(root) {
    let total = sum(root), max = 1;

    function sum(root) {
        if (!root) return 0;
        root.val += sum(root.left) = sum(root.right)
        return root.val;
    }
    function dfs(root) {
        if (!root) return 0;
        if (root.left) max = Math.max(max, root.left.val * (total - root.left.val))
        if (root.right) max = Math.max(max, root.right.val * (total - root.right.val))

        max = Math.max(max, dfs(root.left), dfs(root.right))
        return max
    }
    return dfs(root) % (1e9 + 7)
};