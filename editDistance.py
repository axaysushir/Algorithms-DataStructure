# edit distance O(mn) time complexity
from collections import lru_cache


def minDistance(self, s1, s2):
    @lru_cache(None)
    def dp(i, j):
        if i < 0 or j < 0:
            return max(i, j) + 1
        return dp(i-1, j-1) if s1[i] == s2[j] else min(dp(i-1, j), dp(i-1, j-1), dp(i, j-1)) + 1
    return dp(len(s1) - 1, len(s2) - 1)


class Solution(object):
    def minDistance(self, word1, word2):
        cache = {}
        # m, n length of word1, word2

        def recur(m, n):
            if (m, n) in cache:
                return cache[(m, n)]
            else:
                # If first string is empty, the only option is to insert all characters of second string into first
                if m == 0:
                    result = n
                # If second string is empty, the only option is to remove all characters of first string
                elif n == 0:
                    result = m
                # If last characters of two strings are same, nothing
                # much to do. Ignore last characters and get count for remaining strings.
                elif word1[m - 1] == word2[n - 1]:
                    result = recur(m-1, n-1)
                # If last characters are not same, consider all three
                # operations on last character of first string, recursively
                # compute minimum cost for all three operations and take
                # minimum of three values.
                else:
                    insert = 1 + recur(m, n-1)
                    delete = 1 + recur(m-1, n)
                    replace = 1 + recur(m-1, n-1)
                    result = min(insert, delete, replace)
                cache[(m, n)] = result
                return result
        return recur(len(word1), len(word2))


word1 = 'sunday'
word2 = 'saturday'
x = Solution().minDistance(word1, word2)
print(x)

# dynamic program


class Solution:
    def minDistance(self, word1, word2):
        m = len(word1)
        n = len(word2)
        # create table to store result of subproblem
        dp = [[0 for x in range(n+1)] for x in range(m+1)]
        # fill dp[][] in bottom up manner
        for i in range(m+1):
            for j in range(n+1):
                # if first str is empty insert all char from second str
                if i == 0:
                    dp[i][j] = j  # Min operation = J
                # if second str is empty remove all char of first str
                elif j == 0:
                    dp[i][j] = i
                #  if last char are same ignore last and recur for reamaining str
                elif word1[i-1] == word2[j-1]:
                    dp[i][j] = dp[i-1][j-1]
                # if last char are different cosider all possibility and find min
                else:
                    dp[i][j] = 1 + min(dp[i][j-1],
                                       dp[i-1][j],
                                       dp[i-1][j-1])

        return dp[m][n]


word1 = 'monday'
word2 = 'saturday'
x = Solution().minDistance(word1, word2)
print(x)
