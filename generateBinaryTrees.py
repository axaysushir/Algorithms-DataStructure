'''
Asked by Amazon
Given a number n, generate all binary search trees that can be constructed with nodes 1 to n.

# Pre-order traversals of binary trees from 1 to n.
# 123
# 132
# 213
# 312
# 321

#   1      1      2      3      3
#    \      \    / \    /      /
#     2      3  1   3  1      2
#      \    /           \    /
#       3  2             2  1

Solution:
1) Initialize list of BSTs as empty.  
2) For every number i where i varies from 1 to N, do following
......a)  Create a new node with key as 'i', let this node be 'node'
......b)  Recursively construct list of all left subtrees.
......c)  Recursively construct list of all right subtrees.
3) Iterate for all left subtrees
   a) For current leftsubtree, iterate for all right subtrees
        Add current left and right subtrees to 'node' and add
        'node' to list.
'''


class Node:
    def __init__(self, item):  
        self.key=item 
        self.left = None
        self.right = None

# preorder traversal of BST
def preorder(root):
    if root != None:
        print(root.key, end=' ')
        preorder(root.left)
        preorder(root.right)

# Construct a tree

def constructTrees(start, end):
    list = []

    # if start > end then subtree will be empty so returning None in the list
    if (start > end):
        list.append(None)
        return list

        # iterating through  all the value frm start to end for constructing left and right
        # subtree recursively
    for i in range(start, end + 1):
        leftSubtree = constructTrees(start, i - 1)

        rightSubtree = constructTrees(i + 1, end)

        # Looping through all left and right subtree & connecting them to ith root
        for j in range(len(leftSubtree)):
            left = leftSubtree[j]
            for k in range(len(rightSubtree)):
                right = rightSubtree[k]
                node = Node(i)  # makeing value i as root
                node.left = left  # connect left subtree
                node.right = right  # connect right subtree
                list.append(node)

    return list


#  code runner
if __name__ == '__main__':

    # Construct all possible BSTs
    totalTreesFrom1toN = constructTrees(1, 3)

    """ Printing preorder traversal of  
        all constructed BSTs """
    for i in range(len(totalTreesFrom1toN)):
        preorder(totalTreesFrom1toN[i])
        print()
