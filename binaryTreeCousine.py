'''
Given a binary tree and a given node value, return all of the node's cousins. Two nodes are 
considered cousins if they are on the same level of the tree with different parents. You can 
assume that all nodes will have their own unique value.

#     1
#    / \
#   2   3
#  / \   \
# 4   6   5


Solution:
Iterate the whole tree looking for the target(x and y) - either BFS or DFS
    once found, store (parent, depth) as a tuple
Compare the parents and depth of two nodes found and get result

'''


class Node(object):
    def __init__(self, value, left=None, right=None):
        self.value = value
        self.left = left
        self.right = right


class Solution:
    def isCousins(self, root: Node, x, y):
        res = []  # store (parent, depth) tuple

        # dfs
        def dfs(node, parent, depth):
            if not node:
                return
            if node.value == x or node.value == y:
                res.append((parent, depth))

            dfs(node.left, node, depth + 1)
            dfs(node.right, node, depth + 1)

        dfs(root, None, 0)

        # Unpack two nodes found
        nodeX, nodeY = res

        # compare and decide weather two nodes are cousins
        return nodeX[0] != nodeY[0] and nodeX[1] == nodeY[1]


root = Node(1)
root.left = Node(2)
root.left.left = Node(4)
root.left.right = Node(6)
root.right = Node(3)
root.right.right = Node(5)

print(Solution().isCousins(root, 5, 6))


'''
// var isCousins = function(root, x, y) {
//   let xParent = null
//   let yParent = null
//   let xDepth = 0
//   let yDepth = 0

//   depthofTree(root,x, y, 0, null)
//   if (xDepth == yDepth && xParent !== yParent) return true
// };

// function depthofTree(root, x, y, depth, prev) {
//     if (root == null) return 
//     if (root.val == x) {
//         xParent = prev
//         xDepth = depth
//     }
//     if (root.val == y) {
//         yParent = prev
//         yDepth = depth
//     }
//     depth++
//     prev = root
//     depthofTree(root.left, x, y, depth, prev)
//     depthofTree(root.right, x, y, depth, prev)
// }
'''
