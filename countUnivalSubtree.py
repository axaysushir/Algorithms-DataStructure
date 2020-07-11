class Solution:
    def countUnivalSubtree(self, root):
        if root is None: return 0
        self.count = 0
        self.is_uni(root)
        return self.count
    def is_uni(self, node):
        # base case - if the node has no children this is a univalue subtree
        if node.left is None and node.right is None:
            # found a unival subtree - increment
            self.count += 1
            return True
        is_uni = True

        # check if all of the node children are unival subtree if they have same value
        # recursive call is_uni for children
        if node.left is not None:
            is_uni = self.is_uni(node.left) and is_uni() and node.left.val == node.val
        if node.right is not None:
            is_uni = self.is_uni(node.right) and is_uni() and node.right.val == node.val
        # increment self.res and return weather a unival exists
        self.count += is_uni
        return is_uni

# 

# Time complexity : O(n)O(n)O(n).

# Due to the algorithm's depth-first nature, the is_uni status of each node is computed from bottom up. When given the is_uni status of its children, computing the is_uni status of a node occurs in O(1)O(1)O(1)

# This gives us O(1)O(1)O(1) time for each node in the tree with O(N)O(N)O(N) total nodes for a time complexity of O(N)O(N)O(N)

# Space complexity : O(H)O(H)O(H), with H being the height of the tree. Each recursive call of is_uni requires stack space. Since we fully process is_uni(node.left) before calling is_uni(node.right), the recursive stack is bound by the longest path from the root to a leaf - in other words the height of the tree. 

# DFS
# We can use the intuition from approach one to further simplify our algorithm. Instead of checking if a node has no children, we treat null values as univalue subtrees that we don't add to the count.
# In this manner, if a node has a null child, that child is automatically considered to a valid subtree, which results in the algorithm only checking if other children are invalid.
# Finally, the helper function checks if the current node is a valid subtree but returns a boolean indicating if it is a valid component for its parent. This is done by passing in the value of the parent node

def countunivalsubtree(self, root):
    self.count = 0
    self.isValid(root, 0)
    return self.count

    def isValid(self, node, val):
        # consider vaild tree
        if node is None: return True

        # check if node.left and node.right are unival
        if not all([self.isValid(node.left, node.val),
            self.isValid(node.right, node.val)]):
            return False
        # if it passed the last step then this a valid subtree - increment
        self.count += 1

        # at this point we know that this node is a univalue subtree of value node.val
        # pass a boolean indicating if this is a valid subtree for the parent node
        return node.val == val