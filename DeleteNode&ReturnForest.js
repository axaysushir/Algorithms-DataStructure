/*
1110. Delete Nodes And Return Forest

Given the root of a binary tree, each node in the tree has a distinct value.

After deleting all nodes with a value in to_delete, we are left with a forest (a disjoint union of trees).

Return the roots of the trees in the remaining forest. You may return the result in any order.

Example 1:

Input: root = [1,2,3,4,5,6,7], to_delete = [3,5]
Output: [[1,2,null,4],[6],[7]]

Example 2:

Input: root = [1,2,4,null,3], to_delete = [3]
Output: [[1,2,4]]
Time Complexity is O(n+m) using hash to add every element plus do recursion
space complexity: O(n)
*/


var delNodes = function(root, to_delete) {
    let remaining = []
    let toDelete = new Set()
    
    for (let i of to_delete) {
        toDelete.add(i)
    }
    // console.log(toDelete)
    removeNodes(root, toDelete, remaining)
    if (!toDelete.has(root.val)) {
        remaining.push(root)
    }
    return remaining;
};

function removeNodes(root, toDelete, remaining) {
    if (root == null) return null
    
    root.left = removeNodes(root.left, toDelete, remaining)
    root.right = removeNodes(root.right, toDelete, remaining)
    if (toDelete.has(root.val)) {
        if (root.left !== null) {
            remaining.push(root.left)
        }
        if (root.right !== null) {
            remaining.push(root.right)
        }
        return null
    }
    return root
}