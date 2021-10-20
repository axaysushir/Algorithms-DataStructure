// Range sum of BST.
// Given the root node of a binary search tree and two integers low and high, return the sum of values of all nodes with a value in the inclusive range [low, high].
// Input: root = [10,5,15,3,7,null,18], low = 7, high = 15
// Output: 32
// Explanation: Nodes 7, 10, and 15 are in the range [7, 15]. 7 + 10 + 15 = 32.

var rangeSumBST = function(root, low, high) {
    if (root == null) return 
    let arr = [root]
    let sum = 0
    
    while(arr.length) {
        current = arr.shift()
        if (current.val >= low && current.val <= high) {
            sum += current.val;
        }
        if (current.left !== null && current.val > low) {
            arr.push(current.left)
        }
        if (current.right !== null && current.val < high) {
            arr.push(current.right)
        }
    }
    return sum
};