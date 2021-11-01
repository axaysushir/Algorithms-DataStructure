'''
Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.

 

Example 1:

Input: grid = [[1,3,1],[1,5,1],[4,2,1]]
Output: 7
Explanation: Because the path 1 → 3 → 1 → 1 → 1 minimizes the sum.

Example 2:

Input: grid = [[1,2,3],[4,5,6]]
Output: 12
'''
class Solution:
    def minPathSum(self, grid):
        if len(grid) == 0:
            return 0
        rows = len(grid)
        cols = len(grid[0])
        #Simple DP Grid Reduction Approach
        for row in range(rows):
            for col in range(cols):
                if row > 0 or col > 0: #if not in top left corner
                    if row == 0: #if we're at top row
                        grid[row][col] += grid[row][col - 1] 
                    elif col == 0: #if we're at leftmost column
                        grid[row][col] += grid[row - 1][col]
                    else: #otherwise we check both top and left (possible spots to come from) and get minimum
                        grid[row][col] += min(grid[row - 1][col], grid[row][col - 1])
        #return bottom right spot
        return grid[-1][-1]