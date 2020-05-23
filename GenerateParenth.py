#  Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

# For example, given n = 3, a solution set is:

# [
#   "((()))",
#   "(()())",
#   "(())()",
#   "()(())",
#   "()()()"
# ]
#  Brute force time complexity: O(2 ^ 2n * n) for each 2 ^2n sequence we need to create
# and validate sequence which take O(n) work. SPACE COMPLEXITY: O(2 ^2n * n)
class Solution:
    def generateParenthesis(self, n):
        def generate(A=[]):
            if len(A) == 2*n:
                if valid(A):
                    ans.append("".join(A))
            else:
                A.append('(')
                generate(A)
                A.pop()
                A.append(')')
                generate(A)
                A.pop()

        def valid(A):
            bal = 0
            for c in A:
                if c == '(':
                    bal += 1
                else:
                    bal -= 1
                if bal > 0:
                    return False
            return bal == 0

        ans = []
        generate()
        return ans

# backtracking
# Instead of adding '(' or ')' every time as in Approach 1, let's only add them when we know it will remain a valid sequence. We can do this by keeping track of the number of opening and closing brackets we have placed so far.
# We can start an opening bracket if we still have one (of n) left to place. And we can start a closing bracket if it would not exceed the number of opening brackets.
# Time complexity: depnd o how many ele in generate(n). this shows catalan number 1/n+1(2n n). which is bound by 4^n / n root(n)
#  time complexity O(4n/ root(n)) each valid sequence has n steps during backtracking process
# space complexity: O(4n/ root(n)) uses O(n) space to store sequence
class Solution:
    def backtrackParenthesis(self, n):
        ans = []
        def backtrack(S='', left = 0, right = 0):
            if len(S) == 2 * n:
                ans.append(S)
                return 
            if left < n:
                backtrack(S+'(', left + 1, right)
            if right < left:
                backtrack(S+')', left, right + 1)
        
        backtrack()
        return ans

x = Solution().backtrackParenthesis(3)
print(x)

#  clsoer number
# To enumerate something, generally we would like to express it as a sum of disjoint subsets that are easier to count.
# Consider the closure number of a valid parentheses sequence S: the least index >= 0 so that S[0], S[1], ..., S[2*index+1] is valid. Clearly, every parentheses sequence has a unique closure number. We can try to enumerate them individually.

# For each closure number c, we know the starting and ending brackets must be at index 0 and 2*c + 1. Then, the 2*c elements between must be a valid sequence, plus the rest of the elements must be a valid sequence.
class Solution(object):
    def generateParenthesis(self, N):
        if N == 0: return ['']
        ans = []
        for c in range(N):
            for left in self.generateParenthesis(c):
                for right in self.generateParenthesis(N-1-c):
                    ans.append('({}){}'.format(left, right))
        return ans