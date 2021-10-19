var rangeSumBST = function(root, low, high) {
    if (root == null) return 
    let arr = []
    arr.push(root)
    let sum = 0
    
    while(!arr.length) {
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