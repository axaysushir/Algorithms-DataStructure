/* Asked by Microsoft
Given the root of a binary tree, print its level-order traversal. For example:
  1
 / \
2   3
   / \
  4   5

The following tree should output 1, 2, 3, 4, 5.
class Node:
  def __init__(self, val, left=None, right=None):
    self.val = val
    self.left = left
    self.right = right

def print_level_order(root):
  # Fill this in.

root = Node(1, Node(2), Node(3, Node(4), Node(5)))
print_level_order(root)
# 1 2 3 4 5
*/

function TreeNode(val, left, right) {
         this.val = (val===undefined ? 0 : val)
         this.left = (left===undefined ? null : left)
         this.right = (right===undefined ? null : right)
}

var levelOrder = root => {
    let result = []

    if (root === null) return result;

    let queue = []
    queue.push(root)

    while (queue.length > 0) {
        let row = []
        let rowSize = queue.length;
        while (rowSize > 0){
            let currentNode = queue.shift()

            if (currentNode.left !== null) {
                queue.push(currentNode.left)
            }
            if (currentNode.right !== null) {
                queue.push(currentNode.right)
            }
            row.push(currentNode.val)
            rowSize--
        }
        result.push(row)
    }
    return result
}


// Solution 2: Depth First Search

var levelOrder2 = root => {
    let res = []

    let traverse = (node, level) => {
        if (!node) return 
        if (!res[level] || !res[level].length) res[level] = node.val
        else res[level].push(node.val)

        traverse(node.left, level + 1)
        traverse(node.right, level + 1)
    }
    traverse(root, 0)
    return res
}