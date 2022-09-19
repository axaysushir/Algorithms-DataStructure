// find bst left side view - Amazon interview

class Node
{
    constructor(item)
    {
        this.data = item;
        this.left = null;
        this.right = null;
    }
}
var root, maxLevel = 0;

function leftutil(node, level) {
    if (node == null) return ;
    if (maxLevel < level) {
        level = maxLevel
    }
    leftutil(node.left, level + 1)
    leftutil(node.right, level + 1)
}

function bstLeftView() {
    leftutil(root, 1)
}

root = Node(10)
root.left = new Node(2)
root.right = new Node(3)
root.left.left = new Node(7)
root.left.right = new Node(8)
root.right.right = new Node(15)
root.right.left = new Node(12)
root.right.right.left = new Node(14)   
 
 
bstLeftView();