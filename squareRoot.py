# Given a positive integer, find the square root of the integer without using any built in square root or power functions (math.sqrt or the ** operator). Give accuracy up to 3 decimal points.
'''
Start iterating from i = 1. If i * i = n, then print i as n is a perfect square whose square root is i.
Else find the smallest i for which i * i is strictly greater than n.
Now we know square root of n lies in the interval i – 1 and i and we can use Binary Search algorithm to find the square root.
Find mid of i – 1 and i and compare mid * mid with n, with precision upto 5 decimal places.
    If mid * mid = n then return mid.
    If mid * mid < n then recur for the second half.
    If mid * mid > n then recur for the first half.
'''
import math

def square(n, i, j):
    mid = (i+j) / 2
    mult = mid * mid

    #  if mid its self is square return 
    if ((mult == n) or (abs(mult - n) < 0.00001)):
        return mid
    # if mult is less then n recure for 2nd half
    elif mult < n:
        return square(n, mid, j)
    # recure 1st half
    else:
        return square(n, i, mid)

def sqrt(n):
    i = 1
    # if sqrt is not found
    found = False
    while found == False:
        # if n is perfect square
        if i * i == n:
            print(i)
            found == True
        elif (i*i > n):
            # Square root will lie in the interval i-1 and i
            res = square(n, i-1, i)
            print('{0:.3f}'.format(res))
            found = True
        i += 1

# Code runner
if __name__ == "__main__":
    n = 123

    sqrt(n)
  
# print(sqrt(3))
# 2.236
