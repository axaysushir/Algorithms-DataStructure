# Given a number n, find the least number of squares needed to sum up to the number.

def square_sum(n):
    if n <= 3:
        return n
    res = n
    for x in range(1, n+1):
        temp = x*x
        if temp > n:
            break
        else:
            res = min(res, 1+ square_sum(n-temp))
    
    return res

print(square_sum(13))
# Min sum is 32 + 22
# 2
 
# Dynamic programming
from math import ceil, sqrt

def getMinSquares(n):
    dp = [0,1,2,3] #base case
    for i in range(4, n+1):
        # max value is i as i can always 
        # be represented as 1 * 1 + 1 * 1 + ...
        dp.append(i)
        # go through all smaller num
        for x in range(1, int(ceil(sqrt(i))) + 1):
            temp = x*x
            if temp > i:
                break
            else:
                dp[i] = min(dp[i], 1 + dp[i-temp])
    
    return dp[n]

print(getMinSquares(6))
