'''
Asked by Apple
The Fibonacci sequence is the integer sequence defined by the recurrence relation: F(n) = F(n-1) + F(n-2),
where F(0) = 0 and F(1) = 1. In other words, the nth Fibonacci number is the sum of the prior two Fibonacci numbers.
Below are the first few values of the sequence:

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144...

Given a number n, print the n-th Fibonacci Number.
Examples:
Input: n = 3
Output: 2

Input: n = 7
Output: 13
'''


#  A naive recursive solution for find number at fib of n place
def fib(n):
    if n == 1 or n == 2:
        result = 1
    else:
        result = fib(n-1) + fib(n-2)
    return result


x = fib(8)

# memoization function


def fib_2(n, memo):
    if memo[n] is not None:  # if memo is not null return array
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
print(x)

# Bottom up approach


def bottom_up(n):
    if n == 1 or n == 2:
        result = 1
    bottom_up = [None] * (n + 1)
    bottom_up[1] = 1
    bottom_up[2] = 1
    for i in range(3, n + 1):
        bottom_up[i] = bottom_up[i - 1] + bottom_up[i - 2]
    return bottom_up[n]


x = bottom_up(7)
print(x)
