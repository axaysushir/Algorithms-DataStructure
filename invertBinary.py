# Invert a binary tree
# RECIRSIVE APPROACH
# The inverse of an empty tree is the empty tree. The inverse of a tree with root rrr, and subtrees \mbox{right} and \mbox{left}, is a tree with root rrr, whose right subtree is the inverse of \mbox{left}, and whose left subtree is the inverse of \mbox{right}
# Complexity: Since each node in the tree is visited only once, the time complexity is O(n)O(n)O(n), where nnn is the number of nodes in the tree. We cannot do better than that, since at the very least we have to visit each node to invert it.
# Because of recursion, O(h) function calls will be placed on the stack in the worst case, where hhh is the height of the tree. Because h∈O(n)h\in O(n)h∈O(n), the space complexity is O(n).

# Iterative Approach BFS
# The idea is that we need to swap the left and right child of all nodes in the tree. So we create a queue to store nodes whose left and right child have not been swapped yet. Initially, only the root is in the queue. As long as the queue is not empty,
# remove the next node from the queue, swap its children, and add the children to the queue. Null nodes are not added to the queue. Eventually, the queue will be empty and all the children swapped, and we return the original root.
# Complexity: Since each node in the tree is visited / added to the queue only once, the time complexity is O(n), where n is the number of nodes in the tree.
# Space complexity is O(n), since in the worst case, the queue will contain all nodes in one level of the binary tree. For a full binary tree, the leaf level has ⌈n/2⌉=O(n) leaves.

# recursive
class Solution:
    def invertTree(self, root):
        if root is None:
            return None
        root.left, root.right = \
            self.invertTree(root.right), self.invertTree(root.left)
        return root

# For Approach #2 not just BFS simple DFS will work too.
# For this problem, all Preorder traversal will work.
# Post Order traversal iterative solution using stack:


class Solution(object):
    def invertTree(self, root):
        stack = []
        stack.append(root)
        while stack:
            node = stack.pop(-1)
            if node:
                node.left, node.right = node.right, node.left
                stack.append(node.left)
                stack.append(node.right)
        return root
# iterative


class Solution:
    def invertTree(self, root):
        if root:
            root.left, root.right = (self.invertTree(
                root.right), self.invertTree(root.left))
        return root
