'''
Asked by Amazon:
MS Excel column titles have the following pattern: A, B, C, ..., Z, AA, AB, ..., AZ, BA, BB, ..., ZZ, AAA, AAB, ... etc. 
In other words, column 1 is named "A", column 2 is "B", column 26 is "Z", column 27 is "AA" and so forth. Given a positive 
integer, find its corresponding column name. 
Examples: 
Input: 26
Output: Z

Input: 51
Output: AY

Input: 52
Output: AZ

Input: 676
Output: YZ

Input: 702
Output: ZZ

Input: 704
Output: AAB

'''

def convertToTitle(n):
    alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    length = len(alphabets)
    base = ''

    while n > 0:
        n -= 1
        n, j = divmod(n, length)
        base += alphabets[j]
    return base[::-1]

class Solution:
    def convertToTitle(self, n):
        bits = []
        while n:
            n, bit = divmod(n - 1, 26)
            bits.append(bit)

        title = ''
        offset = ord('A')
        while bits:
            bit = bits.pop()
            title += chr(offset + bit)
        return title

print(convertToTitle(27))