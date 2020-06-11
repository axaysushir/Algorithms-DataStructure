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

# edit distance
def minDistance(self, s1, s2):
    @lru_cache(None)
    def dp(i,j):
        if i < 0 or j < 0:
            return max(i,j) + 1
        return dp(i-1, j-1) if s1[i] == s2[j] else min(dp(i-1,j), dp(i-1, j-1), dp(i, j-1)) + 1
    return dp(len(s1) -1, len(s2) -1)

class Solution(object):
    def minDistance(self, word1, word2):
        cache = {}
        def recur(m,n):
            if (m,n) in cache:
                return cache[(m,n)]
            else:
                if m == 0:
                    result = n
                elif n == 0:
                    result = m
                elif word1[m - 1] == word2[n - 1]:
                    result = recur(m-1, n-1)
                else:
                    insert = 1 + recur(m, n-1)
                    delete = 1 + recur(m-1, n)
                    replace = 1 + recur(m-1, n-1)
                    result = min(insert, delete, replace)
                cache[(m,n)] = result
                return result
        return recur(len(word1), len(word2))