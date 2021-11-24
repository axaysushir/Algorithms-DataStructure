// 85. Maximal Rectangle
// Hard

// Given a rows x cols binary matrix filled with 0's and 1's, find the largest rectangle containing only 1's and return its area.

 

// Example 1:

// Input: matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
// Output: 6
// Explanation: The maximal rectangle is shown in the above picture.

// Example 2:

// Input: matrix = []
// Output: 0

// Example 3:

// Input: matrix = [["0"]]
// Output: 0

// Example 4:

// Input: matrix = [["1"]]
// Output: 1

// call size exceeded
var maximalRectangle = function(matrix) {
    let maxarea = 0
    for (let i=0; i<matrix.length; i++) {
        for (let j=0; j<matrix[i].length; j++) {
            if (matrix[i][j] == '1') {
                let temp = explore(matrix, i, j)
                maxarea = Math.max(maxarea, temp)
            }
        }
    }
    return maxarea
};

const explore = (grid, i, j) => {
    if (i<0 || i>= grid.length || j < 0 || j > grid[i].length || grid[i][j] == '0') return 0
    grid[i][j] = '0'
    return 1+ explore(grid, i-1, j) + explore(grid, i+1, j) + explore(grid, i, j-1) + explore(grid, i, j+1)
}