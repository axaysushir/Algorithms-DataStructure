// Given a binary tree, return all values given a certain height h.
// By Amazon
// Here's a starting point:
// class Node():
//   def __init__(self, value, left=None, right=None):
//     self.value = value
//     self.left = left
//     self.right = right

// def valuesAtHeight(root, height):

var distanceK = function(root, traget, k) {
    // create achild to parent Map usinf dfs
    // 2 - using BFS starting at target, traverse node.left, node.right, parent to K
    // 2.1 - have an array to store the visited nodes in so we don't revisit them

    let parents = {}
    function dfs(node, parent) {
        if (!node) return;
        if (parent) parents[node.val] = parent;
        dfs(node.left, node)
        dfs(node.right, node)
    }
    dfs(root, null)

    // (bfs staring with target)
    let visited = {}
    let q = []
    let res = []
    q.push([target, 0]) // [node, level]

    while (q.length) {
        let [node, level] = q.shift()
        // Check if node is already visited then we skip
        if (visited[node.val]) continue
        visited[node.val] = true

        if (level === k) {
            res.push(node.val)
            continue
        }
        // Traverse left 
        if (node.left) q.push([node.left, level + 1])
        // Traverse right
        if  (node.right) q.push([node.right, level + 1])
        // Traverse parent
        if (parents[node.val]) q.push([parents[node.val],level + 1])
    }
    return res
}