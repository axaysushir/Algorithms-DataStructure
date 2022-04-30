# Given a 2d n x m matrix where each cell has a certain amount of change on the
# floor, your goal is to start from the top left corner mat[0][0] and end in the
# bottom right corner mat[n - 1][m - 1] with the most amount of change. You can
# only move either left or down.

def max_change(mat):
  # Fill this in.
  res = 0
  dp = [[0 for i in range(n + 2)] for j in range(n)]

  # copy all ele of fisrt row into dp first row
  for i in range(n):
      for j in range(1, n+1):
          dp[i][j] = max(dp[i-1][j-1], max(dp[i-1][j], dp[i-1][j+1])) + \
          mat[i][j-1]

  for i in range(n+1):
      res = max(res, dp[n-1][i])

  return res

mat = [
    [0, 3, 0, 2],
    [1, 2, 3, 3],
    [6, 0, 3, 2]
]
n = 4
print(max_change(mat))
# 13
