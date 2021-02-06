# You are given the root of a binary tree. Find and return the largest 
# subtree of that tree, which is a valid binary search tree.

# Structure to store a BST node
class Node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None

# Recursive function to calculate size of given tree
def size(root):
    if root is None:
        return 0
    # recursively cal the size of left and right tree & return sum of size of left & right subtree
    return size(root.left) + 1 + size(root.right)

# Recursive function to determine if given binary tree by keeping valid range
def isBST(node, min, max):
    if node is None:
        return True
    
    # if node val fall ouside of valid range
    if node.data < min or node.data > max:
        return False
    # check left and right subtree
    return isBST(node.left, min, node.data) and isBST(node.right, node.data, max)

# find largest bst size
def findLargestBST(root):
    if isBST(root, float('-inf'), float('inf')):
        return size(root)
    return max(findLargestBST(root.left), findLargestBST(root.right))

if __name__ == '__main__':
    root = Node(10)
    root.left = Node(15)
    root.right = Node(8)
    root.left.left = Node(12)
    root.left.right = Node(20)
    root.right.left = Node(5)
    root.right.right = Node(2)

    print(findLargestBST(root))

# find largets subtree under rooted node

class Node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None

class SubTreeInfo:
    def __init__(self, min, max, size, isBst):
        self.min = min
        self.max = max
        self.size = size
        self.isBst = isBst

def findLargestBst(root):
    if root is None:
        return SubTreeInfo(float('-inf'), float('inf'))
    # recursion for left and right subtree
    left = findLargestBst(root.left)
    right = findLargestBst(root.right)
    
    # check if binary tree rooted under current root is BST
    if left.isBst and right.isBst and (left.max < root.data < right.min):
        info = SubTreeInfo(min(root.data, min(left.min, right.min)),
                            max(root.data, max(left.max, right.max)),
                            left.size + 1 + right.size, True)
    # if binary tree root under the current root is not BSt return thr size of larget
    # bst in its left & right subtree
    else:
        info = SubTreeInfo(0, 0, max(left.size, right.size), False)
    return info


# if __name__ == '__main__':
#     root = Node(10)
#     root.left = Node(15)
#     root.right = Node(8)
#     root.left.left = Node(12)
#     root.left.right = Node(20)
#     root.right.left = Node(5)
#     root.right.right = Node(9)
#     root.left.left.left = Node(2)
#     root.left.left.right = Node(4)
#     root.right.left.right = Node(7)
#     root.right.right.right = Node(10)

#     print(findLargestBst(root).size)



# class TreeNode:
#   def __init__(self, key):
#     self.left = None
#     self.right = None
#     self.key = key

#   def __str__(self):
#     # preorder traversal
#     answer = str(self.key)
#     if self.left:
#       answer += str(self.left)
#     if self.right:
#       answer += str(self.right)
#     return answer

# def largest_bst_subtree(root):
  # Fill this in.
