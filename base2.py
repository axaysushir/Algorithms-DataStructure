# Given a non-negative integer n, convert n to base 2 in string form. Do not use any built in base 2 conversion functions like bin.
import string
digit = string.digits + string.ascii_letters

def int2base(x, base):
    if x < 0:
        sign = -1
    elif x == 0:
        return digit[0]
    else:
        sign = 1
    
    x *= sign
    digits = []

    while x :
        digits.append(digit[int(x % base)])
        x = int(x/base)
    if sign < 0:
        digits.append('-')
    
    digits.reverse()
    
    return ''.join(digits)

print(int2base(123, 2))

# solution2: convert to any base

def numTobase(n, b):
    if n == 0:
        return [0]
    digits = []

    while n:
        digits.append(int(n % b))
        n //= b
    return digits[::-1]

print(numTobase(123, 2))