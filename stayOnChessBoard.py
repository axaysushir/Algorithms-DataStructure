'''
Asked by GOOGlE
A chess board is an 8x8 grid. Given a knight at any position (x, y) and a number of moves k, 
we want to figure out after k random moves by a knight, the probability that the knight will 
still be on the chessboard. Once the knight leaves the board it cannot move again and will be considered off the board.

# Solution: Dynamic Programming
One thing that we can observe is that at every step the Knight has 8 choices to choose from. Suppose, the Knight has to 
take k steps and after taking the Kth step the knight reaches (x,y). There are 8 different positions from where the Knight 
can reach to (x,y) in one step, and they are: (x+1,y+2), (x+2,y+1), (x+2,y-1), (x+1,y-2), (x-1,y-2), (x-2,y-1), (x-2,y+1), (x-1,y+2).

What if we already knew the probabilities of reaching these 8 positions after K-1 steps? Then, the final probability after K steps 
will simply be equal to the (Σ probability of reaching each of these 8 positions after K-1 steps)/8;
Here we are dividing by 8 because each of these 8 positions have 8 choices and position (x,y) is one of the choice.
For the positions that lie outside the board, we will either take their probabilities as 0 or simply neglect it.

Since, we need to keep track of the probabilities at each position for every number of steps, we need Dynamic Programming to solve this problem.
We are going to take an array dp[x][y][steps] which will store the probability of reaching (x,y) after (steps) number of moves.
Base case : if number of steps is 0, then the probability that the Knight will remain inside the board is 1.
'''
# direction vector for the knight
dx = [1,2,2,1,-1,-2,-2,-1]
dy = [2,1,-1,-2,-2,-1,1,2]
N = 8

def is_knight_on_board(x, y, steps):
    # initialize array
    dp = [[[ 0 for i in range(N + 1)] 
                for j in range(N + 1)]
                for k in range(N + 1)]
    
    # For 0 number of step each position will have probability 1
    for i in range(N):
        for j in range(N):
            dp[i][j][0] = 1
    
    # for every number of step s
    for s in range(1, steps + 1):
        # for every position (x, y) after s number of step
        for x in range(N):
            for y in range(N):
                prob = 0.0

                # for every position reacheble from (x,y)
                for i in range(8):
                    nx = x + dx[i]
                    ny = x + dy[i]

                    # if this position lies inside board
                    if (inside(nx, ny)):
                        prob += dp[nx][ny][s - 1] / 8.0
                
                # store the result
                dp[x][y][s] = prob
    
    return dp[x][y][steps]

def inside(x, y):
    return (x >= 0 and x < N and y >= 0 and y < N)

# Code runner
print(is_knight_on_board(0, 0, 1))

'''
Time Complexity: O(NxNxKx8) which is O(NxNxK), where N is the size of the board and K is the number of steps.
Space Complexity: O(NxNxK)
'''