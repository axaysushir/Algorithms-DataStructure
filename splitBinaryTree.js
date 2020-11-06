// # Given a binary search tree (BST) and a value s, split the BST into 2 trees, where one tree has 
// # all values less than or equal to s, and the other tree has all values greater than s while maintaining 
// # the tree structure of the original BST. You can assume that s will be one of the node's value in the BST. 
// # Return both tree's root node as a tuple.

function setChild(node, left, right){
    if (left) node.left = child
    else node.right = child
}

var splitBst = (root, k) => {
    var root, parent1, parent2 = null;
    left = root !== null && k < root.data

    while (root !== null) {
        while (root !== null && (k<root.data) == left){
            parent1 = root
            root = left ? root.left : root.right;
        }
        setChild(parent1, left, null)
        left = !left // toggle direction
        if (root === null) root = root
        else if (parent2 === null){
            setChild(parent2, left, root)
        }

        parent2 = parent1
        parent1 = null
    }
    return root
}