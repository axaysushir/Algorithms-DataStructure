'''
Asked by Microsoft
A UTF-8 character encoding is a variable width character encoding that can vary from 1 to 4 bytes depending on the character. The structure of the encoding is as follows:
1 byte:  0xxxxxxx
2 bytes: 110xxxxx 10xxxxxx
3 bytes: 1110xxxx 10xxxxxx 10xxxxxx
4 bytes: 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx

Given a list of integers where each integer represents 1 byte, return whether or not the list of integers is a valid UTF-8 encoding.

# SOlution : string mainipulation:

Start processing the integers in the given array one by one.
    For every integer, obtain the binary representation in the string format. Since integers can be very large, we should only keep/consider 
    the 8 least significant bits of data and discard the rest as mentioned in the problem statement. After this step, you should have 8-bits 
    or 1-byte string representation for the integer. Let the string we get here be called bin_rep.

There are two scenarios that we need to consider here in the next step.
    One is that we are in the middle of processing some UTF-8 encoded character. In this case we simply need to check the first two bits 
    of the string and see if they are 10 i.e. the 2 most significant bits of the integer being 1 and 0. bin_rep[:2] == "10"
    The other case is that we already processed some valid UTF-8 characters and we have to start processing a new UTF-8 character. 
    In that case we have to look at a prefix of the string representation and look at the number of 1s that we encounter before encountering 
    a 0. This will tell us the size of the next UTF-8 character.
We keep on processing the integers of the array in this way until we either end up processing all of them or we find an invalid scenario.

'''


class Solution:
    def validUtf8(self, data):
        # number of byte in current utf-8 character
        nBytes = 0

        # for each int in data array
        for num in data:
            # get the binary representation of lease significant 8 bits
            binary = format(num, '#0100b')[-8:]

            # if this is the case start processing new utf 8 char
            if nBytes == 0:
                # get the number of 1's in the beginning of str
                for bit in binary:
                    if bit == '0':
                        break
                    nBytes += 1
                # 1 byte char
                if nBytes == 0:
                    continue

                # invalid case
                if nBytes == 1 or nBytes > 4:
                    return False
            else:
                # process int which represent bytes that are part of utf-8 char
                if not (binary[0] == '1' and binary[1] == '0'):
                    return False

            # reduce the number of bytes to process by 1 after each int.
            nBytes -= 1

            # case where we dont have complere data for utf-8 chars
        return nBytes == 0

print(Solution().validUtf8([197, 130, 1]))

# Solution 2:
'''
While scanning the array, two cases pop up.

    in the middle of a multi-byte
    at the beginning
'''

class Solution():
    def validUtf8(self, data):
        count = 0
        for x in data:
            x = bin(x)[2:].zfill(8)
            # in the middle of the multibyte
            if count:
                if x.startswith('10'):
                    count -= 1
                else: 
                    return False
            else:
                # beginning of data
                count = x.find('0')
                if count == -1 or count == 1 or count > 4:
                    return False
                if count:
                    count -= 1
        
        return count == 0



print(Solution().validUtf8([197, 130, 1]))
# True
print(Solution().validUtf8([235, 140, 4]))
# False
print(Solution().validUtf8([0b11000000, 11000000]))
# True