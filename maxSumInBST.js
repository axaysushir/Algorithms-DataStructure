/*
Asked by Facebook:

You are given the root of a binary tree. Find the path between 2 nodes that 
maximizes the sum of all the nodes in the path, and return the sum. The path 
does not necessarily need to go through the root.
*/
// Time - O(N) N : number of nodes
// SPace: O(H) H - height of the tree ~ logN

/* 1. NO NODE
2. single node[1]
3. two node[1,2]
4. three nodes[1,2,3]
5.four nodes[4, null,1. null, null,2,3]
6. nagative numbers [-1, 2]
*/
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

