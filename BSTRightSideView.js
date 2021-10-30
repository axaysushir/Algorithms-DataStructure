/*
Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.
Example 1:

Input: root = [1,2,3,null,5,null,4]
Output: [1,3,4]

Example 2:

Input: root = [1,null,3]
Output: [1,3]
*/

var rightSideView = function(root) {
    visible = []
    if (root === null) return visible
    let queue = [root]
    while (queue.length > 0) {
        let size = queue.length;
        for(let i=0; i<size; i++) {
            let cur = queue.shift()
            if (i == size -1) {
                visible.push(cur.val)
            }
            if (cur.left != null) {
                queue.push(cur.left)
            }
            if (cur.right != null) {
                queue.push(cur.right)
            }
        }
    }
    return visible
};