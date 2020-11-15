# Given two strings which represent non-negative integers, multiply the two numbers and return 
# the product as a string as well. You should assume that the numbers may be sufficiently large 
# such that the built-in integer type will not be able to store the input (Python does have BigNum, 
# but assume it does not exist).

def multiply(str1, str2):
    return str(eval(str1 + '*' + str2))

def multiply2(str1, str2):
    return str(int(str1) * int(str2))

print(multiply2("11", "13"))
# 143
