class Solution:
    def deleteDuplicates(self, head: ListNode) -> ListNode:
        if not head or not head.next:
            return head
        tmp = head
        while tmp and tmp.next:
            if tmp.val == tmp.next.val:
                while tmp.next and tmp.val == tmp.next.val:
                    tmp.next = tmp.next.next
                if tmp == head:
                    head = tmp.next
                else:
                    prev.next = tmp.next
                    tmp = tmp.next
            else:
                prev = tmp
                tmp = tmp.next

        return head

# strStr
class Solution:
    def strStr(self, haystack: str, needle: str):
        if len(needle) == 0:
            return 0
        if needle in haystack:
            return haystack.index(needle)
        return -1

# Datastructure to store a bunary search tree node


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

# Recursive function to find floot an ceil using wrapper


def findCeilingFloor(root, k, floor=None, ceil=None):
    if root is None:
        return floor, ceil

    # if node with key's value found, both floor and celi equal to current node
    if root.value == k:
        return root, root
    # If geivn key is less then the root node recur for left sub tree
    elif (k < root.value):
        # update the seal to the current node before visitng left sub tree
        return findCeilingFloor(root.left, floor, root, k)
    # If given key is more then the root node recur for right sub tree
    else:
        # update the seal to the current node before visitng right sub tree
        return findCeilingFloor(root.right, ceil, root, k)


if __name__ == '__main__':
    keys = [2, 4, 6, 8, 9, 10, 12]
    root = None
    for key in keys:
        root = insert(root, key)

print(findCeilingFloor(root, 5))

# staircase problem

class Solution:
    def climbStairs(self, n: int):
        if n == 1:
            return 1
        elif n == 2:
            return 2
        else:
            dp = {}
            dp[1] = 1
            dp[2] = 2
            i = 3
            while i <= (n):
                dp[i] = dp[i-1] + dp[i-2]
                i += 1
        return(dp[n])


x = Solution().climbStairs(3)
print(x)


# reverse word in string at place
class Solution:
    def reverseWords(self, s):
        return ' '.join(s.split()[::-1])


# Python program for expression tree 

# An expression tree node 
class Et: 

	# Constructor to create a node 
	def __init__(self , value): 
		self.value = value 
		self.left = None
		self.right = None

# A utility function to check if 'c' 
# is an operator 
def isOperator(c): 
	if (c == '+' or c == '-' or c == '*'
		or c == '/' or c == '^'): 
		return True
	else: 
		return False

# A utility function to do inorder traversal 
def inorder(t): 
	if t is not None: 
		inorder(t.left) 
		print(t.value)
		inorder(t.right) 

# Returns root of constructed tree for 
# given postfix expression 
def constructTree(postfix): 
	stack = [] 

	# Traverse through every character of input expression 
	for char in postfix : 

		# if operand, simply push into stack 
		if not isOperator(char): 
			t = Et(char) 
			stack.append(t) 

		# Operator 
		else: 

			# Pop two top nodes 
			t = Et(char) 
			t1 = stack.pop() 
			t2 = stack.pop() 
				
			# make them children 
			t.right = t1 
			t.left = t2 
			
			# Add this subexpression to stack 
			stack.append(t) 

	# Only element will be the root of expression tree 
	t = stack.pop() 
	
	return t 

# Driver program to test above 
postfix = "(3 + 2) * (4 + 5)"
r = constructTree(postfix) 
print("Infix expression is")
inorder(r) 



class Node:
    def __init__(self, child, word) -> None:
        self.child = child
        self.word = word

class Solution:
    def __init__(self) -> None:
        self.tri = None
    
    def build(self, words):
        self.tri = Node({}, False)
        for word in words:
            current = self.tri
            for char in word:
                if not char in current.child:
                    current.child[char] = Node({}, False)
                current = current.child[char]
            current.word = True
    
    def autocomplete(self, prefix):
        current = self.tri
        for char in prefix:
            if not char in current.child:
                return []
            current = current.child[char]
        return self.findnodefromNode(current, prefix)

    def findnodefromNode(self, node, prefix):
        words = []
        if node.word:
            words += [prefix]
        for char in node.child:
            words += self.findnodefromNode(node.child[char], prefix + char)
        return words

s = Solution()
s.build(['dog', 'dark', 'cat', 'door', 'dodge', 'car'])
print(s.autocomplete('c'))


class Node:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.right = right 
        self.left = left


class Solution():
    def maxPathSum(self, root):
        self.max = float('-inf')

        def visited(node):
            if node is None:
                return 0
            
            left = visited(node.left)
            right = visited(node.right)
            currmax = max(node.val + max(left, right), node.val)
            self.max = max(self.max, currmax, left + right + node.val)
            return currmax

        visited(root)
        return self.max
    
n6 = Node(6)
n4 = Node(4)
n3 = Node(3, None, n4)
n2 = Node(2, None, n6)
n1 = Node(1, n2, n3)

print(Solution().maxPathSum(n1))

class Node:
    def __init__(self, value, left = None, right = None):
        self.value = value
        self.right = right
        self.left = left
        
    def __repr__(self):
        return f"(value: {self.value} left: {self.left} right: {self.right})"

    def isidentical(r1, r2):
        if r1 is None and r2 is None:
            return True
        if r1 is None or r2 is None:
            return False
        
        return (r1.value == r2.value and isidentical(r1.left, r2.left) and isidentical(r1.right, r2.right))

    def findtree(s, t):
        if s is None:
            return True
        if t is None:
            return False
        if isidentical(t,s):
            return True
        
        return findtree(t.left, s) or findtree(t.right, s)

# Code runner 
t3 = Node(4, Node(3), Node(2))
t2 = Node(5, Node(4), Node(-1))
t = Node(1, t2, t3)

s = Node(4, Node(3), Node(2))
print(findtree(s, t))


def rotate(nums, k):
    k %= len(nums)

    for i in range(k):
        prev = nums[-1]
        for j in range(len(nums)):
            nums[j], prev = prev, nums[j]
        
    return nums 

print(rotate([1,2,3,4,5], 3))

def rotates(nums, k):
    n = len(nums)
    a = [0] * n
    for i in range(n):
        a[(i+k) % n] = nums[i]
    
    nums[:] = a
    return nums

print(rotates([1,2,3,4,5], 3))

