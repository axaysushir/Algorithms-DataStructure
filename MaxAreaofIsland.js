// 695. Max Area of Island
// Medium

// You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

// The area of an island is the number of cells with a value 1 in the island.

// Return the maximum area of an island in grid. If there is no island, return 0.
// Input: grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]
// Output: 6
// Explanation: The answer is not 11, because the island must be connected 4-directionally.

// Example 2:

// Input: grid = [[0,0,0,0,0,0,0,0]]
// Output: 0

var maxAreaOfIsland = function(grid) {
    let maxarea = 0
    for (let i=0; i< grid.length; i++) {
        for (let j=0; j < grid[i].length; j++) {
            if (grid[i][j] == 1) {
                let temp = explore(grid, i, j)
                maxarea = Math.max(maxarea, temp)
            }
        }
    }
    return maxarea
};

const explore = (grid, i, j) => {
    if (i<0 || i >= grid.length || j <0 || j >= grid[i].length || grid[i][j] == 0) {
        return 0
    }
    grid[i][j] = 0
    return 1 + explore(grid, i-1, j) + explore(grid, i+1, j) + explore(grid, i, j-1) + explore(grid, i, j+1)
}