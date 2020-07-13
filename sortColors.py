# Given an array with n objects colored red, white or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white and blue.
# by APPLE
# Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

# Note: You are not suppose to use the library’s sort function for this problem.

# Can you do this in a single pass?

# Example:
# Input: [2,0,2,1,1,0]
# Output: [0,0,1,1,2,2]

# 1Pass 32 ms
class Solution:
    def sortColors(self, nums):
        # Point at the last 0
        idx = -1
        
        for i, val in enumerate(nums):
            if val == 0:
                nums.pop(i)
                nums.insert(idx+1, val)
                idx += 1
            elif val == 1:
                nums.pop(i)
                nums.insert(idx+1,val)

nums = [2,0,2,1,1,0]
print(Solution().sortColors(nums))

# 2 pass
class Solution:
    def sortColors(self, nums):
        for i, val in enumerate(nums):
            if val == 0:
                nums.pop(i)
                nums.insert(0, val)
        for i, val in reversed(list(enumerate(nums))):
            if val == 2:
                nums.pop(i)
                nums.append(val)

nums = [2,0,2,1,1,0]
print(Solution().sortColors(nums))