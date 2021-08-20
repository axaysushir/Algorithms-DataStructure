
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