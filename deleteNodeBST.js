// Delete node in BST
const deleteNode = (root, key) => {
    if (root === null) return root;
    if (key <root.val) {
        root.left = deleteNode(root.left, key)
    } else if (key > root.val) {
        root.right = deleteNode(root.right, key)
    }

    if (key === root.val) {
        if (root.left === null && root.right === null) root = null;
        else {
            if (root.left !== null) {
                root.val = findPred(root.left)
                root.left = deleteNode(root.left, root.val)
            } else {
                root.val = findSucc(root.right)
                root.right = deleteNode(root.right, root.val)
            }
        }
    }
    return root
}

function findPred(root) {
    return (root.right === null) ? root.val : findPred(root.right)
}
function findSucc(root) {
    return (root.left === null) ? root.val : findSucc(root.left)
}