// Hi, here's your problem today. This problem was recently asked by Apple:

// You are given the root of a binary tree. You need to implement 2 functions:

// 1. serialize(root) which serializes the tree into a string representation
// 2. deserialize(s) which deserializes the string back to the original tree that it represents

// For this problem, often you will be asked to design your own serialization format. However, for simplicity, let's use the pre-order traversal of the tree. Here's your starting point:

// pre oder traversing 
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
var serialize = function(root) {
    let data = []

    function callDFS(node) {
        if (!node) {
            data.push('#')
            return 
        }
        data.push(node.val)
        callDFS(node.left)
        callDFS(node.right)
    }
    callDFS(root)
    return data.join(',')
}

var deserialize = function(data) {
    data = data.split(',')
    let index = 0

    function callDFS() {
        const val = data[index]
        index++
        if (val === '#') return null;
        const node = new TreeNode(+val)

        node.left = callDFS()
        node.right = callDFS()
        return node
    }
    return callDFS()
}

data = [1,2,3,null,null,4,5]
let x= deserialize(serialize(root));
console.log(x);

// solution 2
let serialize = (root) => {
    let res = []
    if (root) {
        res.push(root.val)
        res.push(...serialize(root.left))
        res.push(...serialize(root.right))
    } else {
        res.push(null)
    }
    return res;
}

let deserialize = (data = []) => {
    let val = data.shift()
    if (val == null) return null;
    let node = new TreeNode(val)
    node.left = deserialize(data)
    node.right = deserialize(data)
    return node
}



/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    return JSON.stringify(root);
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    let object = JSON.parse(data);
    
    let dfs = function(object) {
        Object.setPrototypeOf(object, TreeNode.prototype);
        
        Object.values(object).forEach(v => {
            if (object !== null && typeof v === 'object')
                dfs(v);
        });
    }
    
    return object;
};