// Given a 2-dimensional grid consisting of 1's (land blocks) and 0's (water blocks), count the number of islands present in the grid. The definition of an island is as follows:
// 1.) Must be surrounded by water blocks.
// 2.) Consists of land blocks (1's) connected to adjacent land blocks (either vertically or horizontally). 
// Assume all edges outside of the grid are water.
// Example: 
// Input: 
grid = [
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
  ]

// Output: 3
//  Recursive solution
let numIslands = function(grid) {
    if (grid === null || grid.length === 0) {
        return 0;
    }
    
    let numberOfIslands = 0;
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === '1') {
                numberOfIslands += getIslandCount(grid, i, j);
            }
        }
    }
    
    return numberOfIslands;
};

let getIslandCount = function(grid, i, j) {
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] === '0') {
        return 0;
    }
    
    grid[i][j] = '0';

    getIslandCount(grid, i + 1, j);
    getIslandCount(grid, i - 1, j);
    getIslandCount(grid, i, j + 1);
    getIslandCount(grid, i, j - 1);

    return 1;
};

console.log(numIslands(grid));


grid2 = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
  ]
  // recursive solution O(MN)
var numIslands = function(grid) {
    const visited = Array.from(new Array(grid.length), () => (new Array(grid[0].length).fill(0)));
    
    let count = 0;    
    
    const traverse = (x, y) => {
        // console.log({x, y})
        
        if (grid[x][y] == 0) return;
        
        if (visited[x][y]) return;
        
        visited[x][y] = 1;
        
        //go bot
        if (x + 1 < grid.length) {
            traverse(x+1, y)
        } 
        //go top
        if (x - 1 >= 0) {
            traverse(x-1, y)
        }       
        //go right
        if (y + 1 < grid[x].length) {
            traverse(x, y+1)
        }       
        //go left
        if (y - 1 >= 0) {
            traverse(x, y - 1)
        }
    } 
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (visited[i][j] == 1) {
                continue;
            }
            if (grid[i][j] == 0) {
                continue;
            }
            traverse(i, j);
            count = count + 1;
        }
    }   
    return count;
};
console.log(numIslands(grid2));

// 695. Max Area of Island
// Medium

// You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

// The area of an island is the number of cells with a value 1 in the island.

// Return the maximum area of an island in grid. If there is no island, return 0.