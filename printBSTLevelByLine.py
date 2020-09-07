'''
Asked by Apple
You are given a tree, and your job is to print it level-by-level with linebreaks.
    a
   / \
  b   c
 / \ / \
d  e f  g

The output should be
a
bc
defg
'''

# Solution: 
# count node at current level and for eveny node, we enqueue its children node

class Node:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None

# Iterative method to print level line by line
def printLevelOrder(root):
    if root is None:
        return 
    # create empty queue for level order traversal
    q = []

    # enqueue root & initalize height
    q.append(root)

    while q:
        # queue size indicate number of nodes at current level
        count = len(q)

        # dequeue all nodes of current level & enqueue all node of next level
        while count > 0:
            temp = q.pop(0)
            print(temp.val, end = ' ')
            if temp.left:
                q.append(temp.left)
            if temp.right:
                q.append(temp.right)
            
            count -= 1
        print(' ')

root = Node('a');  
root.left = Node('b');  
root.right = Node('c');  
root.left.left = Node('d');  
root.left.right = Node('e');  
root.right.right = Node('f');  
  
printLevelOrder(root); 
# a  
# b c  
# d e f

# Time complexity of this method is O(n) where n is number of nodes in given binary tree.