# Asked by facebook
# Given a 9x9 board, determine if it is a valid Sudoku board. 
# The board may be partially filled, where an empty cell will be 
# represented by the space character ' '.

# The Sudoku board could be partially filled, where empty cells are filled with the character ‘.’.
# An empty Sudoku board is also valid.
# A valid Sudoku board (partially filled) is not necessarily solvable. Only the filled cells need to be validated.

# check is there is any duplicate in curr row or not
def notInRow(arr, row):
    store = set()
    for i in range(0, 9):
        # if already encountered before return false
        if arr[row][i] in store:
            return False
        # if not empty cell insert value at curr cell
        if arr[row][i] != ' ':
            store.add(arr[row][i])
    
    return True

# check duplicate in curr column
def notInCol(arr, col):
    store = set()
    for i in range(0, 9):
        if arr[col][i] in store:
            return False
        # if not empty cell insert value at curr cell
        if arr[col][i] != ' ':
            store.add(arr[col][i]) 
    return True

def notInBox(arr, sRow, sCol):
    store = set()
    for row in range(0, 3):
        for col in range(0, 3):
            curr = arr[row + sRow][col + sCol]

            if curr in store:
                return False
            if curr != ' ':
                store.add(curr)
    
    return True

def isValid(arr, row, col):
    return (notInRow(arr, row) and notInCol(arr, col) and notInBox(arr, row - row % 3, col - col % 3))

def validate_sudoku(arr, n):
    for i in range(0, n):
        for j in range(0, n):
            if not isValid(arr, i, j):
                return False
    
    return True


board = [
    [5, ' ', 4, 6, 7, 8, 9, 1, 2],
    [6, ' ', 2, 1, 9, 5, 3, 4, 8],
    [1,   9, 8, 3, 4, 2, 5, 6, 7],
    [8,   5, 9, 7, 6, 1, 4, 2, 3],
    [4,   2, 6, 8, 5, 3, 7, 9, 1],
    [7,   1, 3, 9, 2, 4, 8, 5, 6],
    [9,   6, 1, 5, 3, 7, 2, 8, 4],
    [2,   8, 7, 4, 1, 9, 6, 3, 5],
    [3,   4, 5, 2, 8, 6, 1, 7, 9],
]

print(validate_sudoku(board, 9))
