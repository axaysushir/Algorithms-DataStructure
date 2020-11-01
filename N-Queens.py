'''
N-Queens is the problem where you find a way to put n queens on a nxn chess 
board without them being able to attack each other. Given an integer n, return 
1 possible solution by returning all the queen's position

# Solution: Backtracing

1) Start in the leftmost column
2) If all queens are placed
    return true
3) Try all rows in the current column. 
   Do following for every tried row.
    a) If the queen can be placed safely in this row 
       then mark this [row, column] as part of the 
       solution and recursively check if placing
       queen here leads to a solution.
    b) If placing the queen in [row, column] leads to
       a solution then return true.
    c) If placing queen doesn't lead to a solution then
       unmark this [row, column] (Backtrack) and go to 
       step (a) to try other rows.
3) If all rows have been tried and nothing worked,
   return false to trigger backtracking.
'''
global N
N = 4
def n_queens(n):
    for i in range(N):
        for j in range(N):
            print(n[i][j], end = ' ')
        print()

# function to check if queen is plcaed on board safely
def isSafe(n, row, col):
    # check is row on left side
    for i in range(col):
        if n[row][i] == 1:
            return False
    
    # check upper diagonal on left side
    for i, j in zip(range(row, -1, -1), range(col, -1, -1)):
        if n[i][j] == 1:
            return False
    
    # check lower diagonal on left side
    for i, j in zip(range(row, N, 1), range(col, N, 1)):
        if n[i][j] == 1:
            return False
    
    return True

def solution(n, col):
    # if all Q are placed then return true
    if col >= N:
        return True
    # consider this col and try plcaing all queens in all row one by 1
    for i in range(N):
        if isSafe(n, i, col):
            # place the queen
            n[i][col] = 1

            if solution(n, col+ 1) == True:
                return True
            # if placing quuen does not meet solution
            n[i][col] = 0
    # if queen can not be placed in any of row of this col
    return False

def solveNqueen():
    n = [ [0, 0, 0, 0], 
        [0, 0, 0, 0], 
        [0, 0, 0, 0], 
        [0, 0, 0, 0] ] 
    if solution(n, 0) == False:
        print('No solution')
        return False
    
    n_queens(n)
    return True

solveNqueen()

# There can be many answers
# [(0, 0), (1, 2), (2, 4), (3, 1), (4, 3)]

# Q . . . .
# . . . Q .
# . Q . . .
# . . . . Q
# . . Q . .
