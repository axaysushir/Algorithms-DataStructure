#  A naive recursive solution for find number at fib of n place
def fib(n):
    if n == 1 or n == 2:
        result = 1
    else :
        result = fib(n-1) + fib(n-2)
    return result

x = fib(8)

# memoization function
def fib_2(n, memo):
    if memo[n] is not None: # if memo isnot null return array
        return memo[n]
    if n == 1 or n == 2:
        result = 1
    else:
        result = fib_2(n-1, memo) + fib_2(n-2, memo)
    memo[n] = result
    return result

def fib_memo(n):
    memo = [None] * (n + 1)
    return fib_2(n, memo)

x = fib_memo(6)

# Bottom up approach 
def bottom_up(n):
    if n == 1 or n == 2:
        result = 1
    bottom_up = [None] * (n + 1)
    bottom_up[1] = 1
    bottom_up[2] = 1
    for i in range(3, n + 1):
        bottom_up[i] = bottom_up[i - 1] + bottom_up[i -2]
    return bottom_up[n]

x = bottom_up(9)
print(x)


