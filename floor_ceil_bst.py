class Node:
  def __init__(self, value):
    self.left = None
    self.right = None
    self.value = value

# Recursive function to insert a key into binary search tree
def insert(root, key):
    # if root is none create a node and return it
    if root is None:
        return Node(key)
    # If given key is less then the root node recue for left subtree
    if key < root.value:
        root.left = insert(root.left, key)
    # if given key is more then root 
    else:
        root.right = insert(root.right, key)
    return root

def findCeilingFloor(root, k, floor=None, ceil=None):
    if root is None:
        return floor, ceil
    if root.value == k:
        return root.value
    if root.value > k:
        return findCeilingFloor(root.left, floor, root,k)
    floorValue = findCeilingFloor(root.right, ceil, root,k)
    return floorValue if (floorValue <= k) else root.value

root = Node(8) 
root.left = Node(4) 
root.right = Node(12) 
  
root.left.left = Node(2) 
root.left.right = Node(6) 
  
root.right.left = Node(10) 
root.right.right = Node(14) 

print (findCeilingFloor(root, 5))
