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
    # initialize quotient = 0
    quotient = 0
    while (dividend >= divisor):
        dividend -= divisor # 10 - 7 = 3 increase quotient by 1 and repeat
        quotient += 1
    return sign * quotient

print(divide(a, b))