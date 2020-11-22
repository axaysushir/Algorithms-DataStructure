'''
Pascal's Triangle is a triangle where all numbers are the sum of the two numbers above it. Here's an example of the Pascal's Triangle of size 5.
    1
   1 1
  1 2 1
 1 3 3 1
1 4 6 4 1

Given an integer n, generate the n-th row of the Pascal's Triangle.
'''

# Solution1 : O(n^3)
def pascal_triangle_row(n):
    # iterate through every line
    for line in range(0, n):
        # every line has integer equal to line number
        for i in range(0, line + 1):
            print(binomialCoeff(line, i))
        
        print()

def binomialCoeff(n,k):
    res = 1
    if k > n -k:
        k = n - k
    
    for i in range(0, k):
        res = res * (n-i)
        res = res // (i+1)
    return res
    
# pascal_triangle_row(6)
# [1, 5, 10, 10, 5, 1]


# Solution 2: O(n^2)
def pascal_triangle(n):
    for line in range(1, n + 1):
        c = 1 # represent C(line,i)
        for i in range(1, line + 1):
            # first value in line is always 1
            print(c, end=' ')
            c = int(c * (line - i)/ i)
        print('')

pascal_triangle(1000)