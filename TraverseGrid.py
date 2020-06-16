# NUmber of ways to traverse grid by microsoft
# You 2 integers n and m representing an n by m grid, determine the number of ways you can get from the top-left to the bottom-right of the matrix y going only right or down.
# n = 2, m = 2 return 2
# This should return 2, since the only possible routes are:
# Right, down
# Down, right.
# number of ways a cell can be reached is = Number of ways it can reach the cell above it + number of ways it can reach the cell which is left of it.
# So, start filling the 2D array according to it and return the last cell after completely filling the array.

class Solution:
    def uniquePaths(self, m, n):
        # return 1 if first row
        if m == 1 or n == 1:
            return 1
        # recursively find no of ways to reach last cell
        return (uniquePaths(m-1, n) + uniquePaths(m, n-1))

# dynamic programming time complexxity O(m*n)


class Solution:
    def uniquePaths(self, m, n):
        dp = [[0 for i in range(m+1)] for j in range(n + 1)]

        for i in range(1, m+1):
            for j in range(1, n+1):
                if (i == 1 or j == 1):
                    dp[i][j] = 1
                else:
                    dp[i][j] = (dp[i-1][j] + dp[i][j-1])
        return dp[m][n]


m = 5
n = 5
print(Solution().uniquePaths(m, n))

#  dp


class Solution:
    def uniquePaths(self, m, n):
        dp = [[0] * n for _ in range(m)]
        for i in range(m):
            for j in range(n):
                if i == 0 or j == 0:
                    dp[i][j] = 1
                elif i == 0:
                    dp[i][j] = dp[i][j-1]
                elif j == 0:
                    dp[i][j] = dp[i-1][j]
                else:
                    dp[i][j] = dp[i-1][j] + dp[i][j-1]
        return dp[m-1][n-1]


class Solution:
    def uniquePaths(self, m: int, n: int) -> int:
        dp = [[0 for column in range(m)] for row in range(n)]
        dp[0][0] = 1
        for row in range(n):
            for col in range(m):
                if col > 0 or row > 0:
                    if row == 0:
                        dp[row][col] = dp[row][col-1]
                    elif col == 0:
                        dp[row][col] = dp[row-1][col]
                    else:
                        dp[row][col] = dp[row-1][col] + dp[row][col-1]
        return dp[n-1][m-1]
