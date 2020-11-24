# Given two binary numbers represented as strings, return the sum of the two binary numbers as a 
# new binary represented as a string. Do this without converting the whole binary string into an integer.


def sum_binary(bin1, bin2):
    maxLen = max(len(bin1), len(bin2))

    x = bin1.zfill(maxLen)
    y = bin2.zfill(maxLen)

    res = ''
    carry = 0

    for i in range(maxLen - 1, -1, -1):
        r = carry
        r += 1 if x[i] == '1' else 0
        r += 1 if y[i] == '1' else 0
        res = ('1' if r % 2 == 1 else '0') + res
        # calculate carry
        carry = 0 if r < 2 else 1
    
    if carry != 0 : res = '1' + res

    return res.zfill(maxLen)
  
print(sum_binary("11101", "1011"))
# 101000
