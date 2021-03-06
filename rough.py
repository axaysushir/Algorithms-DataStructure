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

# reverse bits
def bits(n):
    return '{0:08b}'.format(n)

def reversebit(n):
    rev = 0

    while(n > 0):
        rev = rev << 1
        if (n & 1 == 1):
            rev = rev ^ 1
        n = n >> 1
    
    return rev

print(bits(1234))
print(reversebit(1234))
print(bits(reversebit(1234)))


class Node:
    def __init__(self, data):
        self.data = data
        self.left = self.right = None


def size(root):
    if root is None:
        return 0
    
    return size(root.left) + 1 + size(root.right) 

def isbst(node, min, max):
    if node is None:
        return True
    
    if node.data < min or node.data > max:
        return False
    
    return isbst(node.left, min, node.data) and isbst(node.right, max, node.data)

def find(root):
    if isbst(root, float('-inf'), float('inf')):
        return size(root)
    return max(find(root.left), find(root.right))


if __name__ == '__main__':
    root = Node(10)
    root.left = Node(15)
    root.right = Node(8)
    root.left.left = Node(12)
    root.left.right = Node(20)
    root.right.left = Node(5)
    root.right.right = Node(2)

print(find(root))

class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.right = right
        self.left = left
    
    def __repr__(self):
        return f"({self.val}, {self.left}, {self.right})"

def bstSum(root, num= 0):
    if root is None:
        return num
    else:
        ans = 0

        subSum = num - root.val

        if (subSum == 0 and root.left == None and root.right == None):
            return True
        if root.left is not None:
            ans = ans or bstSum(root.left, subSum)
        if root.right is not None:
            ans = ans or bstSum(root.right, subSum)

        return ans

n5 = Node(5)
n4 = Node(4)
n3 = Node(3)
n2 = Node(2, n4, n5)
n1 = Node(1, n2, n3)
print(bstSum(n1))


class Solution(object):
    def findword(self, words):
        worddict = set(words)
        cache = {}
        return [word for word in words if self.canform(word, worddict, cache)]

    def canform(self, word, worddict, cache):
        if word in cache:
            return cache[word]
        for i in range(1, len(word)):
            pref = word[:i]
            suf = word[i:]
            if pref in worddict:
                if suf in worddict or self.canform(suf, worddict, cache):
                    cache[word] = True
                    return True
        
        cache[word] = False
        return False

input = ['rat', 'cat', 'cats', 'dog', 'catsdog', 'dogcat', 'dogcatrat']
print(Solution().findword(input))

def baseto(n, b):
    if n == 0:
        return [0]
    digits = []

    while n:
        digits.append(int(n % b))
        n //= b
    return digits[::-1]

print(baseto(122356689121114444477746641131313131314644444484121213516848454792, 2))

from collections import defaultdict
class Graph:
    def __init__(self, vertices):
        self.v = vertices
        self.graph = defaultdict(list)

    
    def addEdge(self, v, w):
        self.graph[v].append(w)
        self.graph[w].append(v)
    
    def iscycleutil(self,v,visited, parent):
        visited[v] = True
        for i in self.graph[v]:
            if visited[i] == False:
                if (self.iscycleutil(i, visited, v)):
                    return True
                elif parent != i:
                    return True
        return False
    
    def iscycle(self):
        visited = [False] * (self.v)
        for i in range(self.v):
            if visited[i] == False:
                if (self.iscycleutil(i, visited, -1)) == True:
                    return False
        return False

g = Graph(-1)
g.addEdge(0, 1)
g.addEdge(1, 2)
# g.addEdge(0, 2)
g.addEdge(2, 0)
g.addEdge(0, 3)
# g.addEdge(3, 4)

print(g.iscycle())

#  design Tictac toe
class Tictac(object):
    def __init__(self, n):
        self.grid = [[''] * n for i in range(n)]
    
    def move(self, col, row, player):
        if player == 1:
            mark = 'X'
        else:
            mark = 'O'

        self.grid[row][col] = mark

        n = len(self.grid)

        sumofRow = sum([self.grid[row][c] == mark for c in range(n)])
        sumofCol = sum ([self.grid[r][col] == mark for r in range(n)])
        sumofleftDiag = sum([self.grid[i][i] == mark for i in range(n)])
        sumofrightDiag = sum([self.grid[i][n-1-i] == mark for i in range(n)])

        if sumofCol == n or sumofRow == n or sumofrightDiag == n or sumofleftDiag == n:
            return player
        else:
            return 0

board = Tictac(3)
board.move(0, 0, 1)
board.move(0, 2, 2)
board.move(2, 2, 1)
board.move(1, 1, 2)
board.move(2, 0, 1)
board.move(1, 0, 2)
print(board.move(2, 1, 1))

class TicTacToe(object):
    def __init__(self, n):
        self.row = [0] * n
        self.col = [0] * n
        self.diag = 0
        self.xdiag = 0
        self.n = n

    def move(self, row, col, player):
        if player == 1:
            count = 1
        else:
            count = -1
        
        self.row[row] += count
        self.col[col] += count
        if row == col:
            self.diag += count
        if row + col == self.n - 1:
            self.xdiag += count
        
        if self.n in [self.row[row], self.col[col], self.diag, self.xdiag]:
            return 1
        if -self.n in [self.row[row], self.col[col], self.diag, self.xdiag]:
            return 2
        
        return 0

board = TicTacToe(3)
board.move(0, 0, 1)
board.move(0, 2, 2)
board.move(2, 2, 1)
board.move(1, 1, 2)
board.move(2, 0, 1)
board.move(1, 0, 2)
print(board.move(2, 1, 1))