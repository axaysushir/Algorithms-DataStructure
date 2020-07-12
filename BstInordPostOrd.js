// construct binary seacrh tree using inorder and post order traversal

let buildTree = function(inorder, postorder) {
    // Build inverted indices for inorder traversal
    // for fast index lookup
    if (inorder.length === 0) return null;
    const inverted = {}
    for (let i=0; i< inorder.length; i++) {
        inverted[inorder[i]] = i
    }

    //  need to keep track of left and right bound of both arrays
    const helper = (inStart, inEnd, poStart, poEnd) => {
        // base case
        if (inStart > inEnd || poStart > poEnd) return null;
        // the root is always the last index of the poEnd
        const root = new TreeNode(postorder[poEnd]) 
        // find the root index for the inorder array
        const idx = inverted[postorder[poEnd]]
        // recursing for left
        root.left = helper(inStart, idx-1, poStart, poStart + idx - inStart - 1)
        // recursion on right
        root.right = helper(idx + 1, inEnd, poStart + idx - inStart, poEnd - 1)
        // return root at final
        return root
    }
    return helper(0, inorder.length - 1, 0, postorder.lenght - 1)
}

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

postorder = [3,9,20,15,7]
inorder = [9,3,15,20,7]

console.log(buildTree(inorder, postorder));