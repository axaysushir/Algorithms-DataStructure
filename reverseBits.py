''' Asked by Amazon
Given a 32 bit integer, reverse the bits and return that number.

Example:
Input: 1234 
# In bits this would be 0000 0000 0000 0000 0000 0100 1101 0010
Output: 1260388352
# Reversed bits is 0100 1011 0010 0000 0000 0000 0000 0000
'''
# convert numbere to bit
def to_bits(n):
  return '{0:08b}'.format(n)

def reverseBits(n):
    rev = 0

    # traversing bits of n from left to right
    while (n > 0):
        #  bitwise left shift 'rev' by 1
        rev = rev << 1
        # If current bit is 1:
        if (n & 1 == 1):
            rev = rev ^ 1
        # Bitwise right shift n by 1
        n = n >> 1
    
    return rev

print(to_bits(1234))
# 10011010010
print(reverseBits(1234))
# 601
print(to_bits(reverseBits(1234)))
# 1001011001
