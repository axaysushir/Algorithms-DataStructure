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

from BSTSubTree import findLargestBST
from anagramInString import alphabetCounter
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

# rotate linkedlist

class Node:
    def __init__(self,value, next=None):
        self.value = value
        self.next = next

class Solution:
    def rotateRight(self, head, k):
        if not head or not head.next or k == 0:
            return head

        tail = head
        count = 1
        while tail.next:
            tail = tail.next
            count += 1

        # new k
        k = k % count
        if k == 0:
            return head

        tail.next = head
        breakAT = 1
        pointer = head

        while breakAT != count -k:
            pointer = pointer.next
            breakAT += 1

        head = pointer.next
        pointer.next = None
        return head

ll = [Node(1, Node(2, Node(3, Node(4))))]

print(Solution().rotateRight(ll,3))


# subtree

class Node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None

def size(root):
    if root is None:
        return 0

    return size(root.left) + 1 + size(root.right)

def isbst(node, min, max):
    if node is None:
        return True

    if node.data < min or node.data > max:
        return False
    return isbst(node.left, min, node.data) and isbst(node.right, node.data, max)


def findlargest(root):
    if isbst(root, float('-inf'), float('-inf')):
       return size(root)
    return max(findlargest(root.left), findlargest(root.right))

if __name__ == '__main__':
    root = Node(10)
    root.left = Node(15)
    root.right = Node(8)
    root.left.left = Node(12)
    root.left.right = Node(20)
    root.right.left = Node(5)
    root.right.right = Node(2)

    print(findlargest(root))


class subtreeinfo:
    def __init__(self, min, max, size, isbst):
        self.min = min
        self.max = max
        self.size = size
        self.isbst = isbst

def findlargebst(root):
    if root is None:
        return subtreeinfo(float('-inf'), float('-inf'))

    left = findlargebst(root.left)
    right = findlargebst(root.right)

    if left.isbst and right.isbst and (left.max < root.data < right.min):
        info = subtreeinfo(min(root.data, min(left.min, right.min)),
                            max(root.data, max(left.max, right.max)),
                            left.size + 1 + right.size, True)

    else:
        info = subtreeinfo(0,0, max(left.size, right.size), False)

    return info

if __name__ == '__main__':
    root = Node(10)
    root.left = Node(15)
    root.right = Node(8)
    root.left.left = Node(12)
    root.left.right = Node(20)
    root.right.left = Node(5)
    root.right.right = Node(2)

    print(findlargebst(root).size)


# char mapping
def hasmap(s, t):
    strdict = {}
    for i in range(len(s)):
        if s[i] not in strdict.keys():
            if t[i] not in strdict.values():
                strdict[s[i]] = t[i]
            else:
                return False
        else:
            if strdict[s[i]] != t[i]:
                return False
    return True

print(hasmap('abvc', 'dvef'))
print(hasmap('abd', 'efg'))
print(hasmap('bccd', 'eefg'))

# find duplicates
from collections import Counter

def findduplicates(ch1, ch2):
    for i in ch1:
        if i in ch2:
            ch1[i] = min(ch1[i], ch2[i])
        else:
            ch1[i] = 0
        return ch1

def findCommon(A):
    out = Counter(A[0])
    res = []
    for i in range(len(A) + 1 -2 ):
        duplicates = findduplicates(Counter(A[i]), Counter(A[i+1]))
        out = findduplicates(out, duplicates)

    for i in out :
        if out[i] > 0:
            res += [i] * out[i]
    return res

print(findCommon(['google', 'facebook', 'youtube']))
print(findCommon(['git', 'facebk', 'youtube', 'abcdefgr']))

def addDigitToSingleNum(num):
    if num == 0:
        return 0
    if num % 9 == 0:
        return 9
    return num % 9

print(addDigitToSingleNum(123))
print(addDigitToSingleNum(123589))

def longest_one(n):
    count = 0
    while (n != 0):
        n = (n & (n << 1))
        count+= 1
    return count

print(longest_one(336))

# Sort colors
def sortcolor(nums) :
    index = -1

    for i, val in enumerate(nums):
        if val == 0:
            nums.pop(i)
            nums.insert(index+1, val)
        elif val == 1:
            nums.pop(i)
            nums.insert(index+1, val)

nums = [2,0,2,1,1,0]
print(sortcolor(nums))

def Sortcolors(nums):
    for i, val in enumerate(nums):
        if val == 0:
            nums.pop(i)
            nums.insert(0, val)
    for i, val in reversed(list(enumerate(nums))):
        if val == 2:
            nums.pop(i)
            nums.append(val)

nums = [2,0,2,1,1,0]
print(Solution().sortColors(nums))

# Arithemtic binary tree

class Node:
    def __init__(self, key, left= None, right= None):
        self.key = key
        self.right = right
        self.left = left

PLUS = "+"
MINUS = "-"
TIMES = "*"
DIVIDE = "/"

operators = {'+', '-', '*', '/'}

def isOperator(c: chr):
    return c in operators

def calculate(a: int, operator: chr, b: int):
    if operator == '+' : return a + b
    elif operator == '-' : return a - b
    elif operator == '/' : return a / b
    else: return a * b

def evalute(root: Node):
    if not root:
        return None

    if not isOperator(root.key):
        return root.key
    else:
        return calculate(evalute(root.left), root.key, evalute(root.right))

tree = Node(TIMES)
tree.left = Node(PLUS)
tree.left.left = Node(3)
tree.left.right = Node(2)
tree.right = Node(PLUS)
tree.right.right = Node(4)
tree.right.right = Node(5)
print(evalute(tree))


# search range
def findnum(nums, target):
    first = -1
    last = -1
    for i in range(0, len(nums)):
        if target != nums[i]:
            continue
        if first == -1:
            first = i
        last = i

    return (first, last)

print(findnum([1,2,1,3,5,7], 2))
print(findnum([1, 2, 3, 4], 5))

class Node:
    def __init__(self,val, left=None, right=None):
        self.val = val
        self.right = right
        self.left = left

    def __repr__(self):
        return f"({self.val}, {self.left}, {self.right})"

def bst_sum(root, num):
    if root is None:
        return num
    else:
        ans = 0

        subsum = num - root.val

        if (subsum == 0 and root.left == None and root.right == None):
            return True

        if root.left is not None:
            ans = ans or bst_sum(root.left, subsum)
        if root.right is not None:
            ans = ans or bst_sum(root.right, subsum)

        return ans


root = Node(10)
root.left = Node(8)
root.right = Node(2)
root.left.right = Node(5)
root.left.left = Node(3)
root.right.left = Node(2)

print(bst_sum(root, 21))


# Find deepest node in bst
class Node(object):
    def __init__(self,val):
        self.val = val
        self.left = None
        self.right = None
        self.visited = False

def find(root, level, maxLevel, res):
    if (root != None):
        level += 1
        find(root, level, maxLevel, res)

        # Update level
        if level > maxLevel[0]:
            res[0] = root.val
            maxLevel[0] = level
            find(root.right, level, maxLevel, res)

def deepest(root):
    res = [-1]
    maxLevel = [-1]
    find(root, 0, maxLevel, res)
    return res[0]

root = Node('a')
root.left = Node('b')
root.left.left = Node('d')
root.right = Node('c')

print(deepest(root))

# second sol
class newNode(object):
    def __init__(self,val):
        self.val = val
        self.left = None
        self.right = None

# find height
def height(root):
    if not root:
        return 0
    leftHeight = height(root.left)
    rightHeight = height(root.right)
    return max(leftHeight, rightHeight) + 1

def deepnode(root, level):
    if not root:
        return
    if level == 1:
        print(root.val)
    elif level > 1:
        deepnode(root.left, level - 1)
        deepnode(root.right, level -1)

root = newNode('a')
root.left = newNode('b')
root.left.left = newNode('d')
root.right = newNode('c')
root.right.right = newNode('e')
root.right.right.left = newNode('f')
level = height(root)

print(deepnode(root,level))

def pow(x, y):
    if y == 0:
        return 1
    temp = pow(x, int(y/2))

    if y % 2 == 0:
        return temp * temp
    else:
        if y > 0:
            return x * temp * temp
        else:
            return temp * temp / x

print(pow(567889, 125985849484943))
print(pow(2345, 12456))


# Find cycle in graph
from collections import defaultdict
class Graph:
    def __init__(self, vertices):
        self.v = vertices
        self.graph = defaultdict(list)

    # Add edges to graph
    def addEdge(self, v, w):
        self.graph[v].append(w)
        self.graph[w].append(v)

    def isCyclicUtil(self, v, visited, parent):
        visited[v] = True

        for i in self.graph[v]:
            if visited[i] == False:
                if (self.isCyclicUtil(i, visited, v)):
                    return True
                elif parent != i:
                    return True
        return False

    def isCycle(self):
        visited = [False]*(self.v)
        for i in range(self.v):
            if visited[i] == False:
                if (self.isCyclicUtil(i, visited, -1)) == True:
                    return True
        return False

g = Graph(-1)
g.addEdge(0, 1)
g.addEdge(1, 2)
g.addEdge(0, 2)
g.addEdge(2, 0)
g.addEdge(0, 3)
g.addEdge(3, 4)

print(g.isCycle())


def simplePath(path):
    res = []
    path = path.split('/')

    for file in path:
        if file == '' or file == '.':
            continue
        elif file == '..':
            if len(res) >=1:
                res.pop()
        else:
            res.append(file)
    return '/' + '/'.join(res)



class tiktok(object):
    def __init__(self, n):
        self.row = [0] * n
        self.col = [0] * n
        self.diag= 0
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

board = tiktok(3)
board.move(0, 0, 1)
board.move(0, 2, 2)
board.move(2, 2, 1)
board.move(1, 1, 2)
board.move(2, 0, 1)
board.move(1, 0, 2)
print(board.move(2, 1, 1))

# Reverse Graph
def addEdge(adj, src, dest):
    adj[src].append(dest)

def display(adj, v):
    for i in range(v):
        print(i, '-->', end=' ')
        for j in range(len(adj[i])):
            print(adj[i][j], end=' ')

def reverseG(adj, rev, v):
    for i in range(v):
        for j in range(len(adj[i])):
            addEdge(rev, adj[i][j], i)

# Drivercode
if __name__ == '__main__':
    v = 4
    adj = [[] for i in range(v)]
    addEdge(adj, 0, 1)
    addEdge(adj, 0, 3)
    addEdge(adj, 1, 1)

    rev = [[] for i in range(v)]
    # reverseG(adj, rev, v)
    display(rev, v)


# overlapping rectangle

def isOverlap(r1, r2):
    if r1[0] >= r2[2] or r2[0] >= r1[2]:
        return False
    if r1[1] >= r2[3] or r2[1] >= r1[3]:
        return False

    return True

rec1 = [0, 0, 1, 1]
rec2 = [1, 0, 2, 1]
print(isOverlap(rec1, rec2))

def isRec(r1, r2):
    def intersect(pl, pr, ql, qr):
        return min(pr, qr) > min(pl, ql)

    return (intersect(r1[0], r1[2], r2[0], r2[2]) and intersect(r1[1], r1[3], r2[3], r1[3]))

rec1 = [0, 0, 1, 1]
rec2 = [1, 0, 2, 1]
print(isRec(rec1, rec2))


# Rotate Array
nums = [1,2,3,4,5]
k = 2
def rotate(nums, k):
    k %= len(nums)

    for i in range(k):
        prev = nums[-1]
        for j in range(len(nums)):
            nums[j], prev = prev, nums[j]
    return nums

print(rotate(nums, k))

def roArr(num, k):
    n = len(num)
    a = [0] * n
    for i in range(n):
        a[(i+k) % n] = num[i]
    num[:] = a
    return num

print(roArr(nums, k))

#
from heapq import heappop, heappush

class Solution:
    def generate_sky(self, building):
        position = set()

        for l, r, h in building:
            position.add((l, -h, r))
            position.add((r, 0,0))

        building = []
        sky = []

        for x, h, r in sorted(position):
            while building and building[0][1] <= x:
                heappop(building)

            if h:
                heappush(building, (h, r))

            currmaxHeight = -building[0][0]

            if not sky or sky[-1][1] != currmaxHeight:
                sky.append([x, currmaxHeight])

        return sky

print(Solution().generate_sky([(2, 8, 3), (4, 6, 5)]))

# schedule tasks
from collections import Counter
def schedule(task, n):
    taskfreq = {}
    mintime = 0
    maxfreq = 0
    l = len(task)
    for i in range(l):
        taskfreq[task[i]] = taskfreq.get(task[i], 0)

    maxfreq = max(taskfreq.values())

    mintime = -1 + maxfreq + (maxfreq-1) * n

    taskWithMax = list(taskfreq.values()).count(maxfreq)
    mintime += taskWithMax

    return max(mintime, l)

print(schedule(['q', 'q', 's', 'q', 'w', 'w'], 4))

# PLus one
def plus(digit):
    strdig = ''.join([str(x) for x in digit])
    print(strdig)
    increment = str(int(strdig) + 1)
    return [int(x) for x in increment]

print(plus([2, 3, 4]))

def plusone(digits):
    res = []
    inti = int(''.join(map(str, digits)))
    inti += 1
    for i in str(inti):
        res.append(int(i))
    return res

print(plusone([2, 3, 4]))

# find anagrams
from collections import Counter
def find_anagram(s, p):
    l = len(p)
    res = []
    c = Counter(p)
    for i in range(len(s) - l +1):
        tmp = s[i:i+l]
        if c == Counter(tmp):
            res.append(i)

    return res

print(find_anagram('cbaebabacd', 'abc'))

def square(nums):
    n = len(nums)
    for i in range(n):
        nums[i] = nums[i] ** 2
    return sorted(nums)

def squared(nums):
    n = len(nums)
    j = 0
    while j < n and nums[j] < 0:
        j += 1
    i = j - 1
    ans = []
    while 0 <= i and j < n:
        if nums[i]**2 < nums[j] ** 2:
            ans.append(nums[i] ** 2)
            i -= 1
        else:
            ans.append(nums[j]**2)
            j += 1

    while i >= 0:
        ans.append(nums[i]** 2)
        i -= 1
    while j < n:
        ans.append(nums[j]**2)
        j += 1
    return ans

print(squared([-5, -3, -1, 0, 1, 4, 5]))


def sortPartial(num, size):
    i, key, j = 0, 0, 0
    for i in range(size):
        key = num[i]
        j = i - 1

        while j >=0 and num[i] > key:
            num[j+1] = num[j]
            j = j - 1
        num[j+1] = key


num = [3, 2, 6, 5, 4]
k=2
print(sortPartial(num, k))

# find nth fibonac number
def fib(n, memo):
    if memo[n] is not None:
        return memo[n]
    if n==1 or n==2:
        res = 1
    else:
        res = fib(n-1, memo) + fib(n-2, memo)
    memo[n] = res
    return res

def fibMemo(n):
    memo = [None] * (n+1)
    return fib(n, memo)
x = fibMemo(1126)
print(x)

def bottom(n):
    if n==1 or n==2 :
        res = 1
    bottom = [None] * (n+1)
    bottom[1] = 1
    bottom[2] = 1
    for i in range(3, n+1):
        bottom[i] = bottom[i-1] + bottom[i-2]
    return bottom[n]

x = bottom(90)
print(x)


# balance binary tree
class TreeNode:
    def __init__(self, val, left=None, right=None) -> None:
        self.val = val
        self.left = left
        self.right = right

    def __str__(self):
        ans = str(self.val)
        if self.left:
            ans += str(self.left)
        if self.right:
            ans += str(self.right)
        return ans


class Solution:
    def balbst(self, nums):
        def buildtree(left, right):
            if left > right:
                return None
            mid = (left + right) // 2
            newnode = TreeNode(nums[mid])
            newnode.left = buildtree(left, mid-1)
            newnode.right = buildtree(mid+1, right)
            return newnode
        return buildtree(0, len(nums) - 1)

print(Solution().balbst([1,2,3,4]))


def closeSum(nums, target):
    diff = float('inf')
    nums.sort()
    for i in range(len(nums)):
        lo, hi = i+1, len(nums) - 1
        while lo > hi:
            sum = nums[i] + nums[lo] + nums[hi]
            if abs(target-sum) < abs(diff):
                diff = target - sum
            if sum < target:
                lo += 1
            else: hi -= 1
        if diff == 0:
            break
    return target - diff

print(closeSum([2, 1, -5, 4], 3))

def sums(bin1, bin2):
    maxLen = max(len(bin1), len(bin2))
    x = bin1.zfill(maxLen)
    y = bin2.zfill(maxLen)
    res = ''
    carr = 0

    for i in range(maxLen - 1, -1, -1):
        r = carr
        r += 1 if x[i] == '1' else 0
        r += 1 if y[i] == '1' else 0
        res = ('1' if r %2 == 1 else '0') + res
        carr = 0 if r < 2 else 1
    if carr != 0 : res = '1' + res
    return res.zfill(maxLen)

print(sums('111101', '1011'))
print(sums('1', '1'))
print(sums('1111', '01010'))

class Node(object):
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def isCousin(self, root: Node, x, y):
        res = []

        def dfs(node, parent, depth):
            if not node:
                return
            if node.val == x or node.val == y:
                res.append((parent, depth))
            dfs(node.left, node, depth+1)
            dfs(node.right, node, depth+1)
        dfs(root, None, 0)

        nodeX, nodeY = res
        return nodeX[0] != nodeY[0] and nodeX[1] == nodeY[1]

root = Node(1)
root.left = Node(2)
root.left.left = Node(4)
root.right = Node(3)
root.right.right = Node(5)
print(Solution().isCousin(root, 5, 3))

def nonDupNum(nums):
    n = len(nums)
    for i in range(n):
        j = 0
        while (j < n):
            if (i!=j and nums[i] == nums[j]):
                break
            j+= 1
            if (j == n):
                return nums[i]
    return -1


nums = [4, 3, 2, 4, 1, -3, 2]
print(nonDupNum(nums))

def single(num):
    n = len(num)
    map = {}
    for i in range(n):
        if num[i] not in map:
            map[num[i]] = 0
            map[num[i]] += 1
            # print(map)
    for x in map:
        if map[x] == 1:
            return print(x), x

num = [3,4, 4,2,1,2,5]
print(single(num))

# create balance binary tree from given array
class TreeNode:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

    def __str__(self):
        ans = str(self.val)
        if self.left:
            ans += str(self.left)
        if self.right:
            ans += str(self.right)
        return ans

class Solution:
    def sortedArray(self, nums):
        def buildTree(left, right):
            if left > right:
                return None
            mid = (left + right) // 2
            newNode = TreeNode(nums[mid])
            newNode.left = buildTree(left, mid-1)
            newNode.right = buildTree(mid+1, right)
            return newNode
        return buildTree(0, len(nums)-1)

print(Solution().sortedArray([1,2,3,4,5,6]))


# filter bst
class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

    def __repr__(self):
        return f"value: {self.val}, left: ({self.left.__repr__()}), right: ({self.right.__repr__()})"

def filter(root, k):
    if root == None:
        return None

    root.left = filter(root.left, k)
    root.right = filter(root.right, k)

    if root.right == None and root.left == None and root.val == k:
        return None
    else: return root

n5 = Node(2)
n4 = Node(1)
n3 = Node(1, n4)
n2 = Node(1, n5)
n1 = Node(1, n2, n3)

print(filter(n1, 2))

# find anagrams
from collections import Counter
import string

def alphabet(s):
    counter = Counter(s)
    for c in string.ascii_lowercase:
        if c not in counter:
            counter[c]= 0
    return counter

def findAnagrams(s, t):
    l = []
    if len(s) < len(t):
        return l
    hist = alphabet(t)

    current = alphabet(s[0: len(t)])
    for i in range(len(s) - len(t) + 1):
        if hist == current:
            l.append(i)

        if i == len(s) - len(t):
            break
        current[s[i]] -= 1
        current[s[i+ len(t)]] += 1
    return l

print(findAnagrams('cbaebabacs', 'abc'))

def find_anag(s, p):
    l = len(p)
    res = []
    c = Counter(p)
    for i in range(len(s) - l+1):
        tmp = s[i: i+l]
        if c == Counter(tmp):
            res.append(i)
    return res
print(find_anag('cbabad', 'abc'))

# rotate array
def array(nums, k):
    k %= len(nums)
    for _ in range(k):
        pre = nums[-1]
        for j in range(len(nums)):
            nums[j], pre = pre, nums[j]
    return nums

def rot(nums, k):
    n = len(nums)
    a = [0]*n
    for i in range(n):
        a[(i+k)%n] = nums[i]
    nums[:] = a
    return nums

# find largest bst
class Node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None

def size(root):
    if root is None:
        return 0
    return size(root.left) +1+ size(root.right)

def isBst(node, min, max):
    if node is None:
        return True

    if node.data < min or node.data > max:
        return False
    return isBst(node.left, min, node.data) and isBst(node.right, node.data, max)

def find(root):
    if isBst(root, float('-inf'), float('-inf')):
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

def sumBinary(b1,b2):
    maxLen = max(len(b1), len(b2))
    x = b1.zfill(maxLen)
    y = b2.zfill(maxLen)

    res = ''
    carry = 0

    for i in range(maxLen-1, -1, -1):
        r = carry
        r += 1 if x[i] == '1' else 0
        r+= 1 if y[i] == '1' else 0
        res = ('1' if r%2== 1 else '0') + res
        carry = 0 if r < 2 else 1
    if carry != 0: res = '1' + res

    return res.zfill(maxLen)

print(sumBinary("11101", "1011"))

class Node:
    def __init__(self, value, left=None, right=None):
        self.value == value
        self.right = right
        self.left = left
    def __repr__(self) -> str:
        return f"value: {self.value}, left: ({self.left.__repr()}), right: ({self.right.__repr()})"

def filterbst(root,k):
    if root is None:
        return None

    root.left = filterbst(root.left, k)
    root.right = filterbst(root.right, k)

    if root.left == None and root.right == None and root.value==k:
        return None
    else: return root

class Node:
    def __init__(self, value, next=None):
        self.value = value
        self.next = next

def rotate(head: Node, k):
    if not head or not head.next or k == 0:
        return head
    tail = head
    count = 1
    while tail.next:
        tail = tail.next
        count += 1

    k = k%count
    if k == 0: return head

    tail.next = head
    brk = 1
    pointer = head
    while brk != count - k:
        pointer = pointer.next
        brk += 1
    head = pointer.next
    pointer.next = None
    return head

llist = [Node(1, Node(2, Node(3, Node(4))))]

print(rotate(llist, 3))

def shortpath(path):
    res = []
    path = path.split('/')

    for file in path:
        if file in ['', '.']:
            continue
        elif file == '..':
            if len(res) > 1:
                res.pop()
        else:
            res.append(file)
        return '/' + '/'.join(res)

# autocomplete words
class Node:
    def __init__(self, child, isword):
        self,child = child
        self.isword = isword

class Solution:
    def __init__(self) -> None:
        self.trie = None

    def build(self, words):
        self.trie = Node({}, False)
        for word in words:
            curr = self.trie
            for char in word:
                if char not in curr.child:
                    curr.child[char] = Node({}, False)
                curr = curr.child[char]
            curr.isword = True

    def auto(self, pref):
        curr = self.trie
        for char in pref:
            if char not in curr.child:
                return []
            curr = curr.child[char]
        return self.findword(curr, pref)

    def findword(self, node, pref):
        words = []
        if node.isword:
            words += [pref]
        for char in node.child:
            words += self.findword(node.child[char], pref+ char)
        return words

s = Solution()
s.build(['dog', 'dark', 'cat', 'door', 'dodge', 'car'])
print(s.autocomplete('c'))

# root toleaf
class Node:
    def __init__(self, val, left=None, right=None):
        self.val =val
        self.right = right
        self.left = left

def targetSum(root, target):
    if root is None:
        return target == 0
    ans = 0
    subsum = target - root.val

    if subsum == 0 and root.left is None and root.right is None:
        return True
    if root.left is not None:
        ans = ans or targetSum(root.left, subsum)
    if root.right is not None:
        ans = ans or targetSum(root.right, subsum)
    return ans

n6 = Node(6)
n4 = Node(4)
n3 = Node(3, None, n4)
n2 = Node(2, None, n6)
n1 = Node(1, n2, n3)

print(targetSum(n1, 4))

class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.right = right
        self.left = left

def cousin(root: Node, x, y):
    res = []
    def dfs(node, parent, depth):
        if not node:
            return None
        if node.val == x or node.val == y:
            res.append((parent, depth))

        dfs(node.left, node, depth+1)
        dfs(node.right, node, depth+1)
    dfs(root, None, 0)
    nodeX, nodeY = res
    return nodeX[0] != nodeY[0] and nodeX[1] == nodeY[1]

root = Node(1)
root.left = Node(2)
root.left.left = Node(4)
root.left.right = Node(6)
root.right = Node(3)
root.right.right = Node(5)

print(cousin(root, 5, 3))

class Node(object):
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def isCousin(self, root: Node, x, y):
        res = []

        def dfs(node, parent, depth):
            if not node:
                return None
            if node.val == x or node.val == y:
                res.append((parent, depth))

            dfs(node.left, node, depth+1)
            dfs(node.right, node, depth+1)
        dfs(root, None, 0)

        nodeX, nodeY = res
        return nodeX[0] != nodeY[0] and nodeX[1] == nodeY[1]


# find max path sum:
class Node:
    def __init__(self, val=0, left = None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution():
    def maxpathsum(self, root):
        self.max = float('-inf')

        def visit(node):
            if node is not None:
                return 0

            left = visit(node.left)
            right = visit(node.right)
            currmax = max(node.val + max(left, right), node.val)
            self.max = max(self.max, currmax, left + right+node.val)
            return currmax

        visit(root)
        return self.max

n6 = Node(6)
n4 = Node(4)
n3 = Node(3, None, n4)
n2 = Node(2, None, n6)
n1 = Node(1, n2, n3)

print(Solution().maxpathsum(n1))

# autocomplete
class Node:
    def __init__(self, children, isword):
        self.children = children
        self.isword = isword

class Solution:
    def __init__(self):
        self.trie = None

    def build(self, words):
        self.trie = Node({}, False)
        for w in words:
            current = self.trie
            for char in w:
                if char not in current.children:
                    current.children[char] = Node({}, False)
                current = current.children[char]
            current.isword = True

    def findwordFromNode(self, node, prf):
        words = []
        if node.isword:
            words += [prf]
        for char in node.children:
            words += self.findwordFromNode(node.children[char], prf+char)
        return words

    def autocomplete(self, prf):
        current = self.trie
        for c in prf:
            if not c in current.children:
                return []
            current = current.children[c]
        return self.findwordFromNode(current, prf)

Solution().build(['dark', 'dom', 'cat', 'cow', 'dog'])
print(Solution().autocomplete('c'))

class Solution:
    def __init__(self):
        self.trie = None

    def build(self, words):
        self.trie = Node({}, False)
        for word in words:
            current = self.trie
            for char in word:
                if char not in current.children:
                    current.children[char] = Node({}, False)
                current = current.children[char]
            current.isword = True

    def findwordfromnode(self, node, prefix):
        words = []
        if node.isword:
            words += [prefix]
        for char in node.children:
            words += self.findwordfromnode(node.children[char], prefix+ char)
            return words

    def autocomplete(self, pref):
        current = self.trie
        for char in pref:
            if char not in current.children:
                return []
            current = current.children[char]
        return self.findwordfromnode(current, pref)

# invert
class Solution(object):
    def invert(self, root):
        stack = [root]
        while stack:
            node = stack.pop()
            if node:
                node.left, node.right = node.right, node.left
                stack.append(root.right)
                stack.append(root.left)
        return root


# balance binary tree
class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

    def __str__(self):
        ans = str(self.val)
        if self.left:
            ans += str(self.left)
        if self.right:
            ans += str(self.right)
        return ans

def sortedArry(nums):
    def buildtree(left, right):
        if left > right:
            return None
        mid = (left + right) // 2
        newNode = Node(nums[mid])
        newNode.left = buildtree(left, mid-1)
        newNode.right = buildtree(mid+1, right)
        return newNode
    return buildtree(0, len(nums)-1)

print(sortedArry([1,2,3,4,5]))

def sortsqu(a):
    n = len(a)
    j = 0
    while j < n and a[j] < 0:
        j+= 1
        print(j, 'J - 1')
    i = j-1
    print(i, 'I - 2'),

    ans = []
    while i >= 0 and j < n:
        if a[i]**2 < a[j]**2:
            ans.append(a[i]**2)
            i -= 1
            print('ans - 3', ans, 'I', i)
        else:
            ans.append(a[j]**2)
            j += 1
            print('ans -4', ans, 'J', j)
    while i >= 0:
        ans.append(a[i]**2)
        i -= 1
        print('ans-5', ans, 'I', i)
    while j < n:
        ans.append()
        j+= 1
        print('ans-6', ans, 'J', j)
    return ans

print(sortsqu([-5, -3, -1, 0, 1, 4, 5]))

def searchmat(mat, val):
    for i in range(len(mat)):
        for j in range(len(mat)):
            if mat[i][j] == val:
                print(mat[i][j], i, j)
                return True
    return False

mat = [
    [1, 3, 5, 8],
    [10, 11, 15, 16],
    [24, 27, 30, 31],
]

print(searchmat(mat, 27))

class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.right = right
        self.left = left

plus = '+'
minus = '-'
times = '*'
divide = '/'

operators = {'-', '+', '/', '*'}

def isOperator(c: chr):
    return c in operators

def calculate(a, operator, b):
    if operator == '+': return a+b
    elif operator == '/': return a/b
    elif operator == '-': return a-b
    else: return a*b

def eva(root: Node):
    if not root: return None
    if not isOperator(root.val):
        return root.val
    else:
        return calculate(eva(root.left), root.val, eva(root.right))

tree = Node(times)
tree.left = Node(plus)
tree.left.left = Node(3)
tree.left.right = Node(2)
tree.right = Node(plus)
tree.right.left = Node(4)
tree.right.right = Node(5)
print(eva(tree))


def rot(nums, k):
    k %= len(nums)
    print(k)
    for _ in range(k):
        prev =  nums[-1]
        for j in range(len(nums)):
            nums[j], prev = prev, nums[j]
    return nums

print(rot([1,2,34,5,], 2))

def sm(a):
    n = len(a)
    res = 1

    for i in range(n):
        if a[i] <= res:
            res += a[i]
        else:
            break
    return res

def insertionSort(nums, size):
    i, key, j = 0,0,0
    for i in range(len(nums)):
        key = nums[i]
        j = i-1
        print(key, j)
        while j >= 0 and nums[j] > key:
            nums[j+1] = nums[j]
            j -= 1
        nums[j+1] = key
    return nums

nums = [3, 2, 6, 5, 4]
k=2
print(insertionSort(nums, k))

def insertion_sort():
    arr = [3, 2, 6, 5, 4]
    for i in range(1, len(arr)):
        # Set key:
        key = arr[i]

        j = i - 1
        while j >= 0 and arr[j] > key:
            # Swap:
            arr[j + 1] = arr[j]
            arr[j] = key

            # Decrement 'j':
            j -= 1
    return arr

print(insertion_sort())

class Node:
    def __init__(self, child, isword):
        self.isword  = isword
        self.child = child

class Solution:
    def __init__(self) -> None:
        self.trie = None

    def build(self, words):
        self.trie = Node({}, False)
        for word in words:
            curr = self.trie
            for char in word:
                if char not in curr.child:
                    curr.child[char] = Node({}, False)
                curr = curr.child[char]
            curr.isword = True

    def findword(self, node, pref):
        if node.isword:
            words = []
            words += [pref]
        for char in node.child:
            words += self.findword(node.child[char], pref + char)
        return words

    def auto(self, pref):
        curr = self.trie
        for char in pref:
            if char not in curr.child:
                return []
            curr = curr.child[char]
        return self.findword(curr, pref)


class Node():
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

    def __str__(self):
        ans = str(self.val)
        if self.left:
            ans += str(self.left)
        if self.right:
            ans += str(self.right)
        return ans

class Solution:
    def sortedArr(self, nums: int):
        def tree(left:int, right:int):
            if left > right: return None
            mid = (left+right)//2
            newNode = Node(nums[mid])
            newNode.left = tree(left, mid-1)
            newNode.right = tree(mid+1, right)
            return newNode
        return tree(0, len(nums-1))


print(Solution().sortedArr([1,2,3,4,5,6]))

# Max sum of splitted binary tree
# what split of binary tree means. If we have sum for one of splitted tree equal to x, then we know that sum of another tree will be A - x, where A is sum of all nodes. So, for each subtree we just need to find sum of nodes. We can do it using usual dfs.

#     If we reached None node, return 0.
#     In the opposite case, we return sum of elements to the left + to the right + value of current node.
#     We add this sum to res: list in which we keep all sums of subtrees.
#     Finally, we return this sum, so we can use it later for recursion.
#     Then we find maximum value in ans: it will be sum of all nodes, because we have only positive ones and find maximum among x*(A-x).

class Solution:
    def maxProduct(self, root):
        def dfs(node):
            if not node: return 0
            ans = dfs(node.left) + dfs(node.right) + node.val
            res.append(ans)
            return ans

        res = []
        dfs(root)
        sum = max(res)
        return max(i*(sum - i) for i in res) % (10**9 + 7)

# Start and end points to first and last element of an array respectively
def partition(start, end, arr):
    # Initialize pivot's index to start
    pivot_index = start
    pivot = arr[pivot_index]

    # This loop run till start pointer crosses end pointer
    # and it does we swap the pivot with element on end pointer
    while start < end:
        # Increment the start pointer till it find an element greater than pivot
        while start < len(arr) and arr[start] <= pivot:
            start += 1

        # Decrement the end pointer till it finds an element less then pivot
        while arr[end] > pivot:
            end -= 1

        # if start & end have not crossed each other, swap then numbers
        if (start < end):
            arr[start], arr[end] = arr[end], arr[start]

    # swap pivot element with element in end pointer. it puts pivot at its correct place
    arr[end], arr[pivot_index] = arr[pivot_index], arr[end]

    # return end pointer to divide arr into 2
    return end

def quickSort(start, end, arr):
    if start < end:
        # p is paftition idx, arr p is at right place
        p = partition(start, end, arr)

        # sort element before and after partition
        quickSort(start, p - 1, arr)
        quickSort(p + 1, end, arr)

arr = [3, 12, 5, 2, 9, 1, 4]
quickSort(0, len(arr) - 1, arr)
print(arr)

class Node:
    def __init__(self, children, isword):
        self.children = children
        self.isword = isword

class solution:
    def __init__(self):
        self.trie = None

    def build(self, words):
        self.trie = Node({}, False)
        for word in words:
            current = self.trie
            for char in word:
                if char not in current.children:
                    current.children[char] = Node({}, False)
                current = current.children[char]
                current.isword = True

    def findWordFromNode(self, node, prefix):
        words = []
        if node.isword:
            words += [prefix]
        for char in node.children:
            words += self.findWordFromNode(node.children[char], prefix + char)
        return words

    def autocomplete(self, prefix):
        current = self.trie
        for char in prefix:
            if char not in current.children:
                return []
            current = current.children[char]
        return self.findWordFromNode(current, prefix)

# bst sub trree
class Node:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None

def size(root):
    if root is None:
        return 0
    return size(root.left) + 1 + size(root.right)

def isbst(node, min, max):
    if not node: return 0
    if (node.val < min or node.val > max):
        return False
    return isbst(node.left, min, node.val) and isbst(node.right, node.val, max)

def find(root):
    if isbst(root, float('-inf'), float('-inf')):
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
    def __init__(self, val, next):
        self.val = val
        self.next = next

class Solution:
    def rotate(self, head: Node, k):
        if not head or not head.next or k == 0:
            return head

        tail = head
        count = 1
        while tail.next:
            tail = tail.next
            count+= 1

        k = K % count
        if k == 0:
            return 0
        tail.next = head
        breakat = 1
        point = head
        while breakat != count - k:
            point = point.next
            breakat += 1
        head = point.next

def partialSort(nums, size):
    i, j, key = 0, 0, 0
    for i in range(size):
        key = nums[i]
        j = i-1

        while j >= 0 and nums[i] > key:
            nums[j+1] = nums[j]
            j = j-1
        nums[j+1] = key

# bst path sum root to leaf
class Node:
    def __init__(self, val, left=None, right = None):
        self.val = val
        self.left = left
        self.right = right

    def __repr__(self):
        return f"({self.val}, {self.left}, {self.right})"

def bstNumberSum(root, num):
    if root is None:
        return num
    else:
        ans = 0

        subsum = num - root.val

        if subsum == 0 and root.left == None and root.right == None:
            return True
        if root.left is not None:
            ans = ans or bstNumberSum(root.left, subsum)
        if root.right is not None:
            ans = ans or bstNumberSum(root.right, subsum)
        return ans

root = Node(10)
root.left = Node(8)
root.right = Node(2)
root.left.right = Node(5)
root.left.left = Node(3)
root.right.left = Node(2)

print(bstNumberSum(root, 125))

# CLone graph
class Node:
    def __init__(self, val, adj = None):
        self.val = val
        self.adj = adj

        self.printVisited = set()
            if self.adj is None:
                self.adj = []

    def __repr__(self):
        if self not in printVisitedL
        return ''
        else:
            self.printVisited.add(self)
            finalstr = ''
            for n in self.adj:
                finalstr += f'{n}\n'

            self.printVisited.remove(self)
            return finalstr + f'({self.val}, ({[n.value for n in self.adj]}))'

class solution:
    lookup = {None: None}
    def copyGraph(self, node):
        if node not in self.lookup:
            self.lookup[node] = Node(node.val)
            self.lookup[node].adj = [self.lookup.setdefault(neighbor, self.copyGraph(neighbot)) for neighbor in node.adj]
        return self.lookup[node]


n5 = Node(5)
n4 = Node(4)
n3 = Node(3, [n4])
n2 = Node(2)
n1 = Node(1, [n5])
n5.adj = [n3]
n4.adj = [n3, n2]
n2.adj = [n4]
graph_copy = Solution().deep_copy_graph(n1)
print(graph_copy)

# root to leaf sum
class Node:
    def __init__(self, val, left = None, right = None):
        self.val = val
        self.right = right
        self.left = left

def roottoleaf(root, target):
    if root is None:
        return target == 0
    else:
        ans = 0

        subsum = target - root.val
        if (subsum == 0 and root.left is None and root.right is None):
            return True
        if (root.left):
            ans = ans or roottoleaf(root.left, subsum)
        if root.right:
            ans = ans or roottoleaf(root.right, subsum)

        return ans

n6 = Node(6)
n4 = Node(4)
n3 = Node(3, None, n4)
n2 = Node(2, None, n6)
n1 = Node(1, n2, n3)

print(roottoleaf(n1, 2))

def firstMissing(nums):
    s = set([x for x in nums if 0 < x <= len(nums)])
    val = 1
    while val in s:
        val += 1
    return val

class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
    def __repe__(self):
        return f"value: {self.val}, left: ({self.left.__repr__()}, right: ({self.right.__repr__()})"

def filter(root, k):
    if root is None: return None
    root.left = filter(root.left, k)
    root.right = filter(root.right, k)

    if root.left is None and root.right is None and root.val == k:
        return None
    else:
        return root

n5 = Node(2)
n4 = Node(1)
n3 = Node(1, n4)
n2 = Node(1, n5)
n1 = Node(1, n2, n3)

print(filter(n1, 1))

class Node:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None

def inorder(root):
    if root is not None:
        inorder(root.left)
        print(root.val)
        inorder(root.right)

def removeNode(root):
    if root is None:
        return None
    root.left = removeNode(root.left)
    root.right = removeNode(root.right)
    if root.left is None and root.right is None:
        return root
    if root.left is None:
        newroot = root.right
        temp = root
        root = None
        del(temp)
        return newroot

    if root.right is None:
        newroot = root.left
        temp = root
        root = None
        del(temp)
        return newroot
    return root

class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.right = right
        self.left = left
    def __repr__(self):
        return f"(value: {self.val} Left: {self.left} Right: {self.right})"

def isIdentical(r1, r2):
    if r1 is None and r2 is None:
        return True
    if r1 is None or r2 is None:
        return False
    return (r1.val == r2.val and isIdentical(r1.left, r2.left) and isIdentical(r1.right, r2.right))

def findSubtree(s, t):
    if s is None:
        return True
    if t is None:
        return False
    if isIdentical(s, t):
        return True
    return findSubtree(t.left, s) or findSubtree(t.right, s)

t3 = Node(4, Node(3), Node(2))
t2 = Node(5, Node(4), Node(-1))
t = Node(1,t2, t3)

s = Node(4, Node(6, Node(0)))
print(findSubtree(s, t))

def sTask(tasks, n):
    freq = {}
    mintime = 0
    maxfreq = 0

    for i in range(len(tasks)):
        freq[tasks[i]] = freq.get(tasks[i], 0)
    maxfreq = max(freq.values())

    mintime = freq + (maxfreq -1 )* n-1

    maxtasks = list(freq.values()).count(maxfreq)
    mintime += maxtasks
    return max(mintime, len(tasks))


def close(points, k):
    points.sort(key = lambda k: k[0]**2 + k[1]**2)
    return points[:k]
print(close([(0, 0), (1, 2), (-3, 4), (3, 1)], 2))

class Node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None

    def size(root):
        if root is None:
            return 0
        return size(root.left) + 1 + size(root.right)

    def isBst(node, min, max):
        if node is None:
            return True
        if node.data < min or node.data > max:
            return False
        return isBst(node.left, min, node.data) and isBst(node.right, node.data, max)

    def findLargestBst(root):
        if isBst(root, float('-int'), float('-inf')):
            return size(root)
        return max(findLargestBST(root.left), findLargestBST(root.right))


# clone tree
class Node:
    def __init__(self, val):
        self.val = val
        self.right = None
        self.left = None

class sol:
    def find(self, a, b, node):
        def inorder(o: Node, c: Node):
            if o:
                inorder(o.left, c.left)
                if o is node:
                    self.ans = c
                inorder(o.right, c.right)
        inorder(a, b)
        return self.ans

# max area
def maxArea(h):
    i = 0
    j = len(h) - 1
    Max = 0
    while i < j:
        area = (j-i) * min(h[i], h[j])
        Max = max(area, Max)
        if h[i] < h[j]:
            i += 1
        else: j -= 1
    return Max
height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
print(maxArea(height))

def check(s):
    try:
        s = float(s)
        return True
    except:
        return False

print(check('12.3'))

def find_anagram(s, p):
    l = len(p)
    res = []
    c = Counter(p)
    for i in range(len(s) - l+1):
        tmp = s[i:i+l]
        if c == Counter(tmp):
            res.append(i)
    return res

class Solution:
    def roateRight(self, head: Node, k):
        if not head or not head.next or k == 0:
            return head
        tail = head
        count = 1
        while tail.next:
            tail = tail.next
            count += 1

        k = k % count
        if k == 0:
            return head

        tail.next = head
        breakAt = 1
        pointer = head
        while breakAt != count - k:
            pointer = pointer.next
            breakAt += 1
        head = pointer.next
        pointer.next = None
        return head

def findSmallest(arr):
    n = len(arr)
    res = 1
    for i in range(n):
        if (arr[i] <=  res):
            res += arr[i]
        else:
            break
arr = [1,2,3,8,9,10]
print(findSmallest(arr)) # 7

class solution:
    def rotate(self, nums, k):
        k %= len(nums)

        for _ in range(k):
            previous = nums[-1]
            for j in range(len(nums)):
                nums[j], previous = previous, nums[j]
        return nums
print(Solution().rotate([1,2,3,4,5], 2))

def kthsmall(arr, l, r, k):
    if (k >0, k <=r-l, + 1):
        pos= partition(arr, l, r)
        if (pos - l == k -1):
            return arr[pos]
        if (pos - l > k-1):
            return kthsmall(arr, l, pos-1, k)
        return kthsmall(arr, pos + 1, r, k-pos+l - 1)

def partition(arr, l, r):
    x = arr[r]
    i = l
    for j in range(l, r):
        if (arr[j] <= x):
            arr[i], arr[j] = arr[j], arr[i]
            i += 1
    arr[i], arr[r] = arr[r], arr[i]
    return i

#time module for calculating the execution time
import time

start = time.time()
end_number = 25*25

odd_numbers = range(1,end_number+1,2)

i = 0

skip = 1

ans = 1

while odd_numbers[i] != end_number:
	for j in range(4):
		i+= skip
		ans += odd_numbers[i]
	skip += 1

print(ans)

end = time.time()

print( end - start)

def mergeTree(root1, root2):
    if root1 == None: return root2
    if root2 == None: return root1
    root1.val += root2.val
    root1.left = mergeTree(root1.left, root2.left)
    root1.right = mergeTree(root1.right, root2.right)
    return root1

def plus(digits):
    res = []
    integer = int("".join(map(str, digits)))
    integer += 1
    for i in str(integer):
        res.append(int(i))
    return res
