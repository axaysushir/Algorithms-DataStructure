// Given the root of a binary tree, return the postorder traversal of its nodes' values.

// Example 1:

// Input: root = [1,null,2,3]
// Output: [3,2,1]



var postorderTraversal = (root) => {
    if (!root) return []
    let arr = []
    if (root.left){
        arr.push(...postorderTraversal(root.left))
    }
    if (root.right) {
        arr.push(...postorderTraversal(root.right))
    }
    arr.push(root.val)
    return arr
}