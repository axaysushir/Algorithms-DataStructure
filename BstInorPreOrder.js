// Reconstrunct Binary Tree from Preorder and Inorder Traversals
// You are given the preorder and inorder traversals of a binary tree in the form of arrays. Write a function that reconstructs the tree represented by these traversals.
// BY MICROSOFT
// Example:
// Preorder: [a, b, d, e, c, f, g]
// Inorder: [d, b, e, a, f, c, g]

// The tree that should be constructed from these traversals is:
//     a
//    / \
//   b   c
//  / \ / \
// d  e f  g

// O(n) solution

var buildTree = function(preorder, inorder) {
    const map = new Map()
    let preIdx = 0;
    for (let i=0; i< inorder.length; i++) {
        map.set(inorder[i], i)
    }

    function callDFS(start, end) {
        if (end < start) return null;
        const node = new TreeNode(preorder[preIdx])
        const idx = map.get(preorder[preIdx])
        preIdx++;

        node.left = callDFS(start, idx - 1)
        node.right = callDFS(idx + 1, end)
        return node
    }
    return callDFS(0, inorder.length - 1)
}
// tree node defination
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

preorder = [3,9,20,15,7]
inorder = [9,3,15,20,7]

console.log(buildTree(preorder, inorder));

// solution 2:
var buildTree = function(preorder, inorder) {
    if (!preorder.length) return null;
    const index = inorder.indexOf(preorder[0])
    const left = buildTree(preorder.slice(1, index + 1), inorder.slice(0, index))
    const right = buildTree(preorder.slice(index + 1), inorder.slice(index + 1))

    return {val: preorder[0], left, right}
}

function TreeNode(val, left, right) {
         this.val = (val===undefined ? 0 : val)
         this.left = (left===undefined ? null : left)
         this.right = (right===undefined ? null : right)
}

preorder = [3,9,20,15,7]
inorder = [9,3,15,20,7]

console.log(buildTree(preorder, inorder));