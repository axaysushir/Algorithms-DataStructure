'''
Asked by Google : Low Level Design Implementation of  tictactoe""
Design a Tic-Tac-Toe game played between two players on an n x n grid. 
A move is guaranteed to be valid, and a valid move is one placed on an empty block in the grid. 
A player who succeeds in placing n of their marks in a horizontal, diagonal, or vertical row wins the game. 
Once a winning condition is reached, the game ends and no more moves are allowed. 
Below is an example game which ends in a winning condition
Given n = 3, assume that player 1 is "X" and player 2 is "O" 
board = TicTacToe(3);

board.move(0, 0, 1); -> Returns 0 (no one wins)
|X| | |
| | | |    // Player 1 makes a move at (0, 0).
| | | |

board.move(0, 2, 2); -> Returns 0 (no one wins)
|X| |O|
| | | |    // Player 2 makes a move at (0, 2).
| | | |

board.move(2, 2, 1); -> Returns 0 (no one wins)
|X| |O|
| | | |    // Player 1 makes a move at (2, 2).
| | |X|

board.move(1, 1, 2); -> Returns 0 (no one wins)
|X| |O|
| |O| |    // Player 2 makes a move at (1, 1).
| | |X|

board.move(2, 0, 1); -> Returns 0 (no one wins)
|X| |O|
| |O| |    // Player 1 makes a move at (2, 0).
|X| |X|

board.move(1, 0, 2); -> Returns 0 (no one wins)
|X| |O|
|O|O| |    // Player 2 makes a move at (1, 0).
|X| |X|

board.move(2, 1, 1); -> Returns 1 (player 1 wins)
|X| |O|
|O|O| |    // Player 1 makes a move at (2, 1).
|X|X|X|
'''

'''
Solution 1:
Construct an n*n grid, and check whether the row/column/diagonal line of the chess pieces are 
connected to a line each time a chess is played. The condition of the check is to calculate 
whether the number of row/column/diagonal piece marks is equal to n.
'''


class TicTacToe(object):
    def __init__(self, n):
        self.grid = [[' '] * n for i in range(n)]

    def move(self, row, col, player):
        # Player {player} makes a move at ({row}, {col}).
        if player == 1:
            mark = 'X'
        else:
            mark = 'O'

        self.grid[row][col] = mark
        # check winnign condition
        # check if row has the same mark
        n = len(self.grid)
        sumOfRow = sum([self.grid[row][c] == mark for c in range(n)])
        sumOfCol = sum([self.grid[r][col] == mark for r in range(n)])
        sumOfLeftDiagonal = sum([self.grid[i][i] == mark for i in range(n)])
        sumOfRightDiagonal = sum(
            [self.grid[i][n - 1 - i] == mark for i in range(n)])

        if sumOfCol == n or sumOfRow == n or sumOfRightDiagonal == n or sumOfLeftDiagonal == n:
            return player
        else:
            return 0


# Solution 2:
'''
No need to create a grid, just record the value of each row, column and two diagonals.
For each chess game, the chess assignment for player 1 is 1, and the chess assignment for player 2 is -1.
Then we only need to check whether the value of the current row/column/diagonal is equal to n or -n.
'''


class ticTacToe(object):
    def __init__(self, n):
        self.row = [0] * n
        self.col = [0] * n
        self.diag = 0
        self.xdiag = 0
        self.n = n

    def move(self, row, col, player):
        if player == 1:
            count = 1
        else:
            count = -1

        self.row[row] += count
        self.col[col] += count
        if row == col:
            self.diag += count
        if row + col == self.n - 1:
            self.xdiag += count

        if self.n in [self.row[row], self.col[col], self.diag, self.xdiag]:
            return 1
        if -self.n in [self.row[row], self.col[col], self.diag, self.xdiag]:
            return 2
        return 0


board = ticTacToe(3)
board.move(0, 0, 1)
board.move(0, 2, 2)
board.move(2, 2, 1)
board.move(1, 1, 2)
board.move(2, 0, 1)
board.move(1, 0, 2)
print(board.move(2, 1, 1))
