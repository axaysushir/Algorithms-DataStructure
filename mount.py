# Given an array A of integers, return true if and only if it is a valid mountain array.

# Recall that A is a mountain array if and only if:

#     A.length >= 3
#     There exists some i with 0 < i < A.length - 1 such that:
#         A[0] < A[1] < ... A[i-1] < A[i]
#         A[i] > A[i+1] > ... > A[A.length - 1]

A = [1, 2, 3, 5, 3, 1]

class Solution(object):
    def validMountainArray(self, A):
        N = len(A)
        i = 0

        while i + 1 < N and A[i] < A[i+1]:
            i += 1
        if i == 0 or i == N-1: # if first or last char in arr then return false
            return False
        while i + 1 < N and A[i] > A[i +1]: # if reach to peak point & pick is bigger then next element i++
            i += 1
        
        return i == N-1
# driver code
x = Solution().validMountainArray(A)
print(x)
# Given a string, find the length of the longest substring without repeating characters.
# Input: "abcabcbb"
# Output: 3 
# Explanation: The answer is "abc", with the length of 3. 
        



