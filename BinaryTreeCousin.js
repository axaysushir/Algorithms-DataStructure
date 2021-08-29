// Given a binary tree and a given node value, return all of the node's cousins. Two nodes are 
// considered cousins if they are on the same level of the tree with different parents. You can 
// assume that all nodes will have their own unique value.

// #     1
// #    / \
// #   2   3
// #  / \   \
// # 4   6   5


// Solution:
// Iterate the whole tree looking for the target(x and y) - either BFS or DFS
// once found, store (parent, depth) as a tuple
// Compare the parents and depth of two nodes found and get result

var isCousins = (root, x, y) => {
    let xParent = null, yParent = null, xDepth = 0, yDepth = 0
    depthOfTree(root, x, y, 0, null)
    if (xDepth == yDepth && xParent !== yParent) return true
}

function depthOfTree(root, x, y, depth, prev) {
    if (root == null) return null;
    if (root.val == x) {
        xParent = prev
        xDepth = depth
    }
    if (root.val == y) {
        yParent = depth
        yDepth = depth
    }
    depth++
    prev = root
    depthOfTree(root.left, x, y, depth, prev)
    depthOfTree(root.right, x, y, depth, prev)
}