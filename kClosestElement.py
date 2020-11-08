'''
Given a list of sorted numbers, and two integers k and x, find k closest numbers to the pivot x.

Solution:
Here is a simple solution which is O(n). Easier to implement than the binary search one, 
but more efficient than Approach 1. The idea is that we can take advantage of the fact the 
array is already sorted. We're looking for a region of length k which minimizes sum of the 
absolute difference between all its elements and x. We can use a sliding window technique. 
Each time we slide the window forward we undo the contribution from the element we removed 
and add in the new contribution from the next element.
'''

def closest_nums(nums, k, x):
    new_i = 0
    minDiff = 0
    for i in range(k):
        minDiff += abs(nums[i] - x)
    
    prevDiff = minDiff
    for i in range(1, len(nums) - k + 1):
        # substract old window start
        newDiff = prevDiff - abs(nums[i-1] - x)

        # Add the new window
        newDiff += abs(nums[i+k-1] - x)
        if newDiff < minDiff:
            minDiff = newDiff
            new_i = i
        
        prevDiff = newDiff
    
    return nums[new_i: new_i + k]
 
print(closest_nums([1, 3, 7, 8, 9], 3, 5))
# [7, 3, 8]
