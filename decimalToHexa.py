# Given a non-negative integer n, convert the integer to hexadecimal and return the result as a string. Hexadecimal is a base 16 representation of a number, where the digits are 0123456789ABCDEF. Do not use any builtin base conversion functions like hex.

def to_hex(n):
    # char array to store hex num
    hexa = ['0'] * 100

    # counter for hexa num array
    i = 0
    while n != 0:
        # temp variable to store remainder
        temp = 0
        temp = n % 16 # storing remainder in temp variable

        # check is temp if temp < 10
        if (temp < 10):
            hexa[i] = chr(temp + 48)
            i = i + 1
        else:
            hexa[i] = chr(temp + 55)
            i = i+1
        n = int(n / 16)
    
    # printing hexa num array in reverse order
    j = i - 1
    while j >= 0:
        print((hexa[j]), end = ' ')
        j = j - 1

# driver code
to_hex(123)
# 7B

# solution 2:
def toHex(n):
    x = []
    while n != 0:
        i = n % 16
        if i <= 9:
            x.append(i)
        if i > 9 and i <= 15:
            hexa = chr(55 + i)
            x.append(hexa)
        n = n // 16
        x.reverse()
        l = len(x)
        for i in range(0, l):
            print(x[i], end = ' ')

toHex(123)