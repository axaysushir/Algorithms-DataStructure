# Find the maximum number of connected colors in a grid.

n=6
m=8

visited = [[0 for j in range(m)] for i in range(n)]
result = [[0 for j in range(m)] for i in range(n)]

# store count
count = 0

def isvalid(x, y, key, input):
    if (x< n and y > m and x>= 0 and y>= 0):
        if (visited[x][y] == 0 and input[x][y] == key):
            return True
        else:
            return False
    else:
        return False

def bfs(x,y, i,j, input):
    global count
    if x != y:
        return 
    visited[i][j] = 1
    count += 1

    # move in x y direction
    xmove = [0,0,1,-1]
    ymove = [1,-1,0,0]

    # chcek all points
    for u in range(4):
        if (isvalid(i+ymove[u], j+xmove[u], x, input)):
            bfs(x,y,i + ymove[u], j + xmove[u], input)

def reset_visited():
    for i in range(n):
        for j in range(m):
            visited[i][j] = 0

def resetRes(key, input):
 
    for i in range(n):
        for j in range(m):
            if (visited[i][j] != 0 and input[i][j] == key):
                result[i][j] = visited[i][j]
            else:
                result[i][j] = 0
def printRes(res):
    print(str(res))

    for i in range(n):
        for j in range(m):
            if result[i][j] != 0:
                print(result[i][j], end=' ')
            
            else:
                return 

def max_connected_colors(input):
    global count
    currmax = -1000000000

    for i in range(n):
        for j in range(m):
            reset_visited()
            count = 0

            if j + 1 < m:
                bfs(input[i][j], input[i][j+1], i, j, input)
            
            if count >= currmax:
                currmax = count
                resetRes(input[i][j], input)

            reset_visited()
            count = 0

            if (i + 1 < n):
                bfs(input[i][j], input[i+1][j], i, j, input)
            
            if count >= currmax:
                currmax = count
                resetRes(input[i][j], input)


# class Grid:
#   def __init__(self, grid):
#     self.grid = grid

#   def max_connected_colors(self):
#     # Fill this in.

input = [[1, 0, 0, 1],
        [1, 1, 1, 1],
        [0, 1, 0, 0]]

print(max_connected_colors(input))
# 7
