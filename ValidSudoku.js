/*
Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

    Each row must contain the digits 1-9 without repetition.
    Each column must contain the digits 1-9 without repetition.
    Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.

Note:

    A Sudoku board (partially filled) could be valid but is not necessarily solvable.
    Only the filled cells need to be validated according to the mentioned rules.

 

Example 1:

Input: board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: true

Example 2:

Input: board = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: false
Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.
*/

// Check duplicate in current row
function notInrow(board, row) {
    let seen = new Set();
    for (let i=0; i<9; i++) {
        // if seen return false
        if (seen.has(board[row][i])) return false

        // if not empty cell insert val at current cell
        if (board[row][i] !== '.') seen.add(board[row][i])
    }
    return true;
}

// check dupliacte in column
function notInCol(board, col) {
    let seen = new Set()
    for (let i=0; i<9; i++) {
        if (seen.has(board[i][col])) return false
        if(board[i][col] !== '.') seen.add(board[i][col])
    }
    return true;
}

// check any duplicate in 3x3 box
function notInBox(board, sRow, sCol) {
    let seen = new Set();
    for (let i=0; i<3; i++) {
        for (let j=0; j<3; j++) {
            let curr = board[i + sRow][j + sCol]
            if (seen.has(curr)) return false
            if (curr !== '.') seen.add(curr)
        }
    }
    return true
}

// check curr row & col and curr 3x3 box is valid
function isValid(board, row, col) {
    return notInrow(board, row) && notInCol(board, col) && notInBox(board, row - row%3, col-col%3)
}
var isValidSudoku = function(board) {
    for (let i=0; i<board.length; i++) {
        for (let j=0; j<board.length; j++) {
            // if curr rwo or curr col or curr 3x3 box is not valid return false
            if (!isValid(board, i, j)) return false
        }
    }
    return true
};

board = [
[".",".","4",".",".",".","6","3","."],
[".",".",".",".",".",".",".",".","."],
["5",".",".",".",".",".",".","9","."],
[".",".",".","5","6",".",".",".","."],
["4",".","3",".",".",".",".",".","1"],
[".",".",".","7",".",".",".",".","."],
[".",".",".","5",".",".",".",".","."],
[".",".",".",".",".",".",".",".","."],
[".",".",".",".",".",".",".",".","."]]

console.log(isValidSudoku(board));