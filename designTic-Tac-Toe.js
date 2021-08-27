var TicTacToe = n => {
    let rows = [n], cols = [n], diag = 0, xdiag = 0, row, col, player  

    function move(row, col, player) {
        let count = player == 1 ? 1: -1;
        rows[row] += count
        cols[col] += count
    
        if(row == col) diag += count
    
        // x diagonal
        if (row + col == n - 1) xdiag += count
        // if any of then equal to n return 1
        if (Math.abs(rows[row]) == n ||
            Math.abs(cols[col]) == n ||
            Math.abs(diag) == n ||
            Math.abs(xdiag) == n) {
                return count > 0 ? 1 : 2
        }
        return 0
    }
    return move(row, col, player)
}

let board;
board = TicTacToe(3)
board.move(0, 0, 1)
board.move(0, 2, 2)
board.move(2, 2, 1)
board.move(1, 1, 2)
board.move(2, 0, 1)
board.move(1, 0, 2)
console.log(board.move(2,1,1));