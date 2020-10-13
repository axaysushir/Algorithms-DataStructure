'''
Given a node in a binary search tree (may not be the root), find the next largest node in the binary search tree (also known as an inorder successor). The nodes in this binary search tree will also have a parent field to traverse up the tree.

Solution:
Input: node, root // node is the node whose Inorder successor is needed.
Output: succ // succ is Inorder successor of node.

    If right subtree of node is not NULL, then succ lies in right subtree. Do the following.
    Go to right subtree and return the node with minimum key value in the right subtree.
    If right sbtree of node is NULL, then succ is one of the ancestors. Do the following.
    Travel up using the parent pointer until you see a node which is left child of its parent. The parent of such a node is the succ.

'''

class Node:
    def __init__(self,key):
        self.data = key
        self.left = None
        self.right = None

def inorder(root, n):
    if n.right is not None:
        return minValue(n.right)
    
    # Step 2
    p = n.parent
    while p is not None:
        if n != p.right:
            break
        n = p
        p = p.parent
    return p

# retrun minvalue in bst
def minValue(node):
    current = node
    # left most tree
    while current is not None:
        if current.left is None:
            break
    current = current.left

    return current


# insert new node with the given number in the correct place 
# in the tree. Returns the new root pointer which the 
# caller should then use( the standard trick to avoid  
# using reference parameters) 
def insert(node, data):
    # if tree is empty return singly node
    if node is None:
        return Node(data)
    else:
        # do recursion
        if data <= node.data:
            temp = insert(node.left, data)
            node.left = temp
            temp.parent = node
        else:
            temp = insert(node.right, data)
            node.right = temp
            temp.parent = node
        
        return node

# code runner
root = None
  
# Creating the tree given in the above diagram  
root = insert(root, 20) 
root = insert(root, 8); 
root = insert(root, 22); 
root = insert(root, 4); 
root = insert(root, 12); 
root = insert(root, 10);   
root = insert(root, 14);     
temp = root.left.right.right  
  
succ = inorder( root, temp) 
if succ is not None: 
    print(temp.data, succ.data) 
else: 
    print('')


# Time Complexity: O(h), where h is the height of the tree.
# As in the second case(suppose skewed tree) we have to travel all the way towards the root.
# Auxiliary Space: O(1).
# Due to no use of any data structure for storing values.

