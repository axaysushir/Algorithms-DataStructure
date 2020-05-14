def printZigZag(str, n):
    if n==1:
        return print(str)
    # find lenght of str 
    l = len(str)
    # create an arr of str for all row
    arr = ["" for x in range(l)]
    # initialize index for arr of string arr[]
    row = 0
    # traverse through string
    for i in range(l):
        # append current char to current roe
        arr[row] += str[i]
        # if last row is reached set direction to up
        if row == n-1: # total row - index 3-1= 0,1,2
            down = False
        # if first row is reached change direction to down
        elif row == 0: 
            down = True
        # if direction is down inc row++ or row--
        if down:
            row += 1
        else: 
            row -= 1
    
    for i in range(n):
        print(arr[i], end = "")
str = 'GEEKSFORGEEKS'
n = 4
printZigZag(str, n)



# devide two integers without mode, devide, multi
a = 12
b = 5
# print(a ^ b)

def divide(dividend, divisor):
    # calculate the sign if -
    sign = -1 if ((dividend < 0) ^ (divisor < 0)) else 1
    # update dividend and divisor positive
    divisor = abs(divisor)
    dividend = abs(dividend)
    # initialixe quotient = 0
    quotient = 0
    while (dividend >= divisor):
        dividend -= divisor # 10 - 7 = 3 increase quotient by 1 and repeat
        quotient += 1
    return sign * quotient

print(divide(a, b))

# palindrome number
class slolution(object):
    def isPalindrome(self, x):
        return str(x) == str(x)[::-1]


