# Check if two strings can be made equal by swapping one character among each other
# Given two strings A and B of length N, the task is to check whether the two strings can be made equal by swapping any character of A with any other character of B only once.

# Input: A = “SEEKSFORGEEKS”, B = “GEEKSFORGEEKG”
# Output: Yes
# First omit the elements which are the same and have the same index in both the strings. Then if the new strings are of length two and both the elements in each string are the same then only the swap is possible.

def canEqual(a, b):
    A = []
    B = []
    n = len(a)

    for i in range(n):
        # check only different char in str
        if a[i] != b[i]:
            A.append(a[i])
            B.append(b[i])

        # if str is already Equal
    if len(A) == len(B) == 0:
        return True
    # if len of the string are two
    if len(A) == len(B) == 2:
        if A[0] == A[1] and B[0] == B[1]:
            return True
    return False

print(canEqual('abcef', 'abdef'))
