''' Asked by UBER
Given a list of possible coins in cents, and an amount (in cents) n, return the minimum number 
of coins needed to create the amount n. If it is not possible to create the amount using the given 
coin denomination, return None.
'''
import sys

def minimumCoins(coins, n, l):
    if n == 0:
        return 0
    
    # initialize result
    res = sys.maxsize
    #  Find every coin that is smaller then given target
    for i in range(0, l):
        if coins[i] <= n:
            subRes = minimumCoins(coins, n - coins[i], l)

            # check for overflow of result & see res is minimised
            if subRes != sys.maxsize and subRes + 1 < res:
                res = subRes + 1
    
    return res

coins = [1, 5, 10, 25]
n = 36
l = len(coins) # length of coins array

print(minimumCoins(coins, n, l))
# 3 coins (25 + 10 + 1)
# For recusrsion subproblem are called agian and again, this problem is solved by Dynamic
# programming. we can create temp array to recomputaion of same subproblem

# using dynamic programming

def minCoins(coins, t, l):
    # Table[i] sort the minimum num of coins require for i value
    table = [0 for i in range(t + 1)]
    table[0] = 0 # if target = 0

    # initialize all table value 1 to t
    for i in range(1, t + 1):
        table[i] = sys.maxsize
    
    # go through all coins smaller then i
        for j in range(l):
            if coins[j] <= i:
                result = table[i - coins[j]]
                if result != sys.maxsize and result + 1 < table[i]:
                    table[i] = result + 1
    
    return table[t]

coins = [1, 5, 10, 25]
t = 36
l = len(coins)

print(minCoins(coins, t, l))