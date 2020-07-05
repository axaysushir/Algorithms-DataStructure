# BY GOOGLE: find deepest node in binary tree. Return the deepest node (the furthest node from the root).
#     a
#    / \
#   b   c
#  /
# d
# return d as answer
# Method 1 O(N) time complexity : The idea is to do Inorder traversal of given binary tree.
# While doing Inorder traversal, we pass level of current node also. We keep track
# of maximum level seen so far and value of deepest node seen so far.

class Node(object):
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None
        self.visited = False

# keep track of maximim level


def find(root, level, maxLevel, res):
    if (root != None):
        level += 1
        find(root.left, level, maxLevel, res)

        # Update level
        if (level > maxLevel[0]):
            res[0] = root.val
            maxLevel[0] = level
        find(root.right, level, maxLevel, res)


def deepest(root):
    # Initialize result and max level
    res = [-1]
    maxLevel = [-1]
    # update val, res, maxlevel that are passed by reference
    find(root, 0, maxLevel, res)
    return res[0]


root = Node('a')
root.left = Node('b')
root.left.left = Node('d')
root.right = Node('c')

print(deepest(root))


# Method 2 : The idea here is to find the height of the given tree and then print the node at the bottom-most level.
# O(N) Time complexity

class newNode(object):
    def __init__(self, key):
        self.val = key
        self.left = None
        self.right = None

# function to find height of tree rooted at 'root'


def height(root):
    if (not root):
        return 0
    leftHeight = height(root.left)
    rightHeight = height(root.right)
    return max(leftHeight, rightHeight) + 1

# levels = current level
# utitlity function to print all node at given level


def deepestNode(root, levels):
    if (not root):
        return
    if (levels == 1):
        print(root.val)
    elif (levels > 1):
        deepestNode(root.left, levels - 1)
        deepestNode(root.right, levels - 1)


root = newNode('a')
root.left = newNode('b')
root.left.left = newNode('d')
root.right = newNode('c')
root.right.right = newNode('e')
root.right.right.left = newNode('f')
levels = height(root)

print(deepestNode(root, levels))
# res = f