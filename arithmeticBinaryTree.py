# Hi, here's your problem today. This problem was recently asked by Apple:

# You are given a binary tree representation of an arithmetic expression. In this tree, each leaf is an integer value,, and a non-leaf node is one of the four operations: '+', '-', '*', or '/'.

# Write a function that takes this tree and evaluates the expression.

# Example:
#     *
#    / \
#   +    +
#  / \  / \
# 3  2  4  5

# This is a representation of the expression (3 + 2) * (4 + 5), and should return 45.
class Node:
  def __init__(self, key, left=None, right=None):
    self.key = key
    self.left = left
    self.right = right

PLUS = "+"
MINUS = "-"
TIMES = "*"
DIVIDE = "/"


operators = {'+', '-', '*', '/'}

def isOperator(c: chr):
    # Return weather the charcter is operator, return true if supported operator
    return c in operators

def calculate(a: int, operator: chr, b: int) -> int:
    # function to calculate "a operator b " and return result
    if operator == '+' : return a + b 
    elif operator == '-': return a - b
    elif operator == '/': return a / b
    else: return a * b

def evaluate(root: Node) -> int:
    # evaluate the expression using in order processing
    if not root: 
        return None
    # if root is not an operator, i.e. just a value, then nothing to evaluate
    if not isOperator(root.key):
        return root.key
    else:
        # root is an operator get result of eval of the left and right tree and operate them
        return calculate(evaluate(root.left), root.key, evaluate(root.right))
    
tree = Node(TIMES)
tree.left = Node(PLUS)
tree.left.left = Node(3)
tree.left.right = Node(2)
tree.right = Node(PLUS)
tree.right.left = Node(4)
tree.right.right = Node(5)
print(evaluate(tree))
# return 45