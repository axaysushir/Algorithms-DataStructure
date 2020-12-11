// # Given a binary tree, flatten the binary tree using inorder traversal. Instead of creating a new list, reuse the nodes, where the list is represented by following each right child. As such the root should always be the first element in the list so you do not need to return anything in the implementation, just rearrange the nodes such that following the right child will give us the list.

// # Each time when we prune a right subtree, we use while loop to find right most leaf
// # of the current left subtree and append the subtree there.

function Node(val, left, right) {
    this.val = val
    this.left = left
    this.right = right
}

var flattenBST = (root) => {
    let curr = root
    while(curr !== null) {
        if (curr.right !== null) {
            if (curr.left !== null) {
                let next = curr.left
                while (next.right !== null) next = next.right
                next.right = curr.right
            }
            curr.right = curr.left
            curr.left = null
        }
        curr = curr.right
    }
}


// recursion
var flatbst = root => {
    return getFlatten(root);
}

function getFlatten(root) {
    if (root === null) return 
    let left = root.left;
    let right = root.right;

    root.left = null
    getFlatten(left)
    getFlatten(right)
    
    root.right = left
    let current = root
    while(current.right !== null) current = current.right
    current.right = right
}