'''
Asked by Microsoft
An IP Address is in the format of A.B.C.D, where A, B, C, D are all integers between 0 to 255.

Given a string of numbers, return the possible IP addresses you can make with that string by splitting into 4 parts of A, B, C, D.

Keep in mind that integers can't start with a 0! (Except for 0)

Example:
Input: 1592551013
Output: ['159.255.101.3', '159.255.10.13']
'''
# 36ms Runtime
# Function t check if IP digits are valid or not
def is_valid(ip):
    # split string by '.'
    ip = ip.split('.')

    # check for corner cases
    for i in ip:
        if (len(i) > 3 or int(i) < 0 or int(i) > 255):
            return False
        if len(i) > 1 and int(i) == 0:
            return False
        if (len(i) > 1 and int(i) != 0 and i[0] == '0'):
            return False
    return True

# Function to generate all IP address:
def generateIpAddress(s):
    size = len(s)
    
    # Check for string size
    if size > 12:
        return []
    newStr = s
    result = []

    # Generate different combination
    for i in range(1, size - 2):
        for j in range(i + 1, size - 1):
            for k in range(j + 1, size):
                newStr = newStr[:k] + "." + newStr[k:]
                newStr = newStr[:j] + "." + newStr[j:]
                newStr = newStr[:i] + "." + newStr[i:]

                # check for valid combinations
                if is_valid(newStr):
                    result.append(newStr)
                newStr = s
    
    return result

a = "12212211135"
print(generateIpAddress(a))

'''
Time Complexity: O(n^3), where n is the length of the string 
Three nested traversal of the string is needed, where n is always less than 12.
Space Complexity: O(n). 
As as extra space is needed.
'''