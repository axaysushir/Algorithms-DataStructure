''' ASked by Microsoft
A maze is a matrix where each cell can either be a 0 or 1. A 0 represents that the cell is empty, and a 1 represents a wall that cannot be walked through. You can also only travel either right or down.

Given a nxm matrix, find the number of ways someone can go from the top left corner to the bottom right corner. You can assume the two corners will always be 0.

Example:
Input: [[0, 1, 0], [0, 0, 1], [0, 0, 0]]
# 0 1 0
# 0 0 1
# 0 0 0
Output: 2
The two paths that can only be taken in the above example are: down -> right -> down -> right, and down -> down -> right -> right.
'''
def mazePath(maze):
    r = 4
    c = 4
    # if initial cell is blocked there is no way to move
    if (maze[0][0] == -1):
        return 0
    
    # init left most column
    for i in range(r):
        if maze[i][0] == 0:
            maze[i][0] = 1
        # if we encounter a blocked cell in left most row there is no way of visiting
        # any cell below it
        else:
            break
    
    # initialize top most row
    for i in range(1, c, 1):
        if maze[0][i] == 0:
            maze[0][i] = 1
        else:
            break
    
    # if cell is -1 ignore it else do recursion to count value maze[i][j]
    for i in range(1, r, 1):
        for j in range(1, c, 1):
            # if block then ignore cell
            if maze[i][j] == -1:
                continue
            # if wereach maze[i][j] from maze[i-1][j] then icrement count
            if maze[i-1][j] > 0:
                maze[i][j] = maze[i][j] + maze[i-1][j]
            # if wereach maze[i][j] from maze[i][j-1] then icrement count
            if maze[i][j-1] > 0:
                 maze[i][j] = maze[i][j] + maze[i][j-1]
    
    # if final cell is blocked outout 0
    if maze[r-1][c-1] > 0:
        return maze[r-1][c-1]
    else:
        return 0

print(mazePath([[0, 0, 0, 0], 
            [0, -1, 0, 0], 
            [-1, 0, 0, 0], 
            [0, 0, 0, 0 ]] ))

print(mazePath([[0, 1, 0,0],
                [0, 0, 1, 1],
                [0, 0, 1, 0], 
                [1, 0, 1,0]]))
