// for given list convert it to a balanced binary tree

var sortedListToBST = function(head) {
    function buildTree(start, end) {
        if (start > end) return null;
        let mid = Math.floor((end + start) / 1)
        let root = new TreeNode(list[mid])
        root.left = buildTree(start, mid - 1)
        root.right = buildTree(mid + 1, end)
        return root
    }
    let list = []
    while (head) {
        list.push(head.val)
        head = head.next
    }
    let start = 0
    let end = list.legth - 1
    return buildTree(start, end)

}

// recirsive 
var sortedListToBST = function(head) {
    //convert list to array
    const val = []
    while (head) {
        val.push(head.val)
        head = head.next;
    }
    // construct tree using arr
    function constructTree(arr) {
        if (arr.length === 0) return null;
        if (arr.length === 1) return new TreeNode(arr[0])

        let index = Math.floor(arr.length / 2)
        let node = new TreeNode(arr[index])
        // recursivey construct left or right side node
        node.left = constructTree(arr.slice(0, index))
        node.right = constructTree(arr.slice(index + 1))
        return node
    }
    return constructTree(val)
}

// Though this might look a bit confusing at first, I think it is ultimately easier to remember because the code is so short and nothing is ambiguous. It might be hard to imagine the traversal state on the spot though.

// Find the mid point by counting length of the list
// Traverse left subtree using the midpoint as your upper bound
// Set left subtree to the midpoint root.left
// Shift head to the next element
// Traverse right subtree with the new head (length of list - number of nodes in the left subtree - root)
// Set right subtree to root.right

var sortedListToBST = function(head) {
    const numOfNodes = countNode(head)
    return traverse(numOfNodes)

    function traverse(n) {
        if (n <= 0) return null
        let left = traverse(Math.floor(n / 2))
        let root = new TreeNode(head.val)
        root.left = left
        head = head.next
        root.right = traverse(n - Math.floor(n / 2) - 1)
        return root
    }
    function countNode(node) {
        if (!node) return 0
        return 1 + countNode(node.next)
    }
}