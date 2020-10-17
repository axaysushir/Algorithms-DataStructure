# Given a list of sorted numbers (can be both negative or positive), return the list of numbers squared in sorted order.

# Using sort
def square_numbers(nums):
  n  = len(nums)
  for i in range(n):
    nums[i] = nums[i] ** 2
  
  return sorted(nums)


print(square_numbers([-5, -3, -1, 0, 1, 4, 5]))

# Time Complexity: O(Nlog⁡N), where N is the length of A.
# Space Complexity: O(N). 

# Two pointer : Time complexity: O(N), space: O(N)
# We can use two pointers to read the positive and negative parts of the array - 
# one pointer j in the positive direction, and another i in the negative direction.

# Now that we are reading two increasing arrays (the squares of the elements), we 
# can merge these arrays together using a two-pointer technique.

def sortedSquare(A):
    n = len(A)
    j = 0
    while j < n and A[j] < 0:
        j += 1
    i = j - 1

    ans = []
    while 0 <= i and j < n:
        if A[i]**2 < A[j]**2:
            ans.append(A[i]**2)
            i -= 1
        else:
            ans.append(A[j]**2)
            j += 1
    
    while i >= 0:
        ans.append(A[i]**2)
        i -= 1
    while j < n:
        ans.append(A[j]**2)
        j += 1
    
    return ans

print(sortedSquare([-5, -3, -1, 0, 1, 4, 5]))