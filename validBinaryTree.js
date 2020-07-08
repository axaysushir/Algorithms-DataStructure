// You are given the root of a binary search tree. Return true if it is a 
// valid binary search tree, and false otherwise. Recall that a binary search 
// tree has the property that all values in the left subtree are less than or 
// equal to the root, and all values in the right subtree are greater than or equal to the root.
//  By Facebook

function TreeNode(val, right, left) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

function isValidBST(root) {
    let min = -Infinity, max = -Infinity
    //  we do not call root.right & root.left if root is null
    // also root being null means doesn't make invalid BST
    if (root === null) return true;
    if (root.left === null && root.right === null) return true;
    if (root.left && (root.left.val >= root.val || root.left.val <= min)) {
        return false
    }
    if (root.right && (root.right.val <= root.val || root.right.val >= max)) {
        return false
    }

    return isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max)
}


// inorder traversal uisng stack

var isValidBST = function(root) {
    let stack = []
    let inorder = Number.NAGATIVE_INFINITY;

    while (stack.length > 0 || root != null) {
        while (root != null) {
            stack.push(root)
            root = root.left
        }
        root = stack.pop()
        // i fnext element in inorder traversal is smaller then the
        // previous one that's not BST
        if (root.val <= inorder) return false;
        inorder = root.val
        root = root.right
    }
    return true
}

