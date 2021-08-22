// Leetode 73: Set Matrix Zeros
// Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's, and return the matrix.
// You must do it in place.

// Using Additional memory
// Time complexity: O(m x n) Space Complexity: O(m+n)
var setZeroes = function(matrix) {
    let m = matrix.length;
    let n = matrix[0].length;
    let rows = new Set()
    let cols = new Set()
    
    for (let i=0; i< m; i++) {
        for (let j=0; j<n; j++) {
            if (matrix[i][j] === 0) {
                rows.add(i)
                cols.add(j)
            }
        }
    }
    
    for (let i=0; i<m; i++) {
        for (let j=0; j<n; j++) {
            if (rows.has(i) || cols.has(j)) {
                matrix[i][j] = 0;
            }
        }
    }
};

// Solution 2: Space efficient O(1)
// time complexity: O(m x n)
var setZeroes = function(matrix) {
    let m = matrix.length;
    let n = matrix[0].length;
    let isCol = false
    
    // first cell for both first row & col is same. We use additional variable
    for (let i=0; i< m; i++) {
        if (matrix[i][0] === 0){
            isCol = true
        }
        // if element is zero, we set the first ele of corresponsing row & col to 0
        for (let j=1; j<n; j++) {
            if (matrix[i][j] === 0){
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }
    
    // iterate over the array using first row & col, update ele
    for (let i=1; i<m; i++) {
        for(let j=1; j<n; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }
    
    // if the first row need to be set to 0 as well
    if (matrix[0][0] === 0) {
        for (let j=0; j<n; j++) {
            matrix[0][j] = 0;
        }
    }
    // if first col need to be set to 0
    if (isCol) {
        for (let i=0; i<m; i++) {
            matrix[i][0] = 0;
        }
    }
};