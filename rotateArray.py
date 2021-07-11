# Given an array and an integer k, rotate the array by k spaces. Do this without 
# generating a new array and without using extra space.

# Rotate ele by 1 unit at a time: O(n X K) space: O(1)
class Solution:
    def rotate(self, nums, k):
        k %= len(nums) # speed up rotation

        for _ in range(k):
            previous = nums[-1]
            for j in range(len(nums)):
                nums[j], previous = previous, nums[j]
        return nums

print(Solution().rotate([1,2,3,4,5], 2))

# using extra array
# We use an extra array in which we place every element of the array at 
# its correct position i.e. the number at index i in the original array 
# is placed at the index (i+k)% length of array(i + k) \% \text{ length of 
# array}(i+k)% length of array. Then, we copy the new array to the original one.

def rotateArr(nums, k):
    n = len(nums)
    a = [0] * n
    for i in range(n):
        a[(i+k) % n] = nums[i]
    
    nums[:] = a
    return nums

print(rotateArr([1,2,3,4,5,6,7], 3))