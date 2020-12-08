# Given a list of positive numbers, find the largest possible set such that no 
# elements are adjacent numbers of each other.
'''
Loop for all elements in arr[] and maintain two sums incl and excl where incl = Max sum 
including the previous element and excl = Max sum excluding the previous element.

Max sum excluding the current element will be max(incl, excl) and max sum including the 
current element will be excl + current element (Note that only excl is considered because elements cannot be adjacent).

At the end of the loop return max of incl and excl.
'''

def maxNonAdjacentSum(nums):
    incl = 0
    excl = 0

    for i in nums:
        # current max excluding i
        newExcl = excl if excl > incl else incl

        # current max including i
        incl = excl + i
        excl = newExcl
    
    # return max of incl and excl 
    return excl if excl > incl else incl

print(maxNonAdjacentSum([3, 4, 1, 1]))
# 5
# max sum is 4 (index 1) + 1 (index 3)

print(maxNonAdjacentSum([2, 1, 2, 7, 3]))
# 9
# max sum is 2 (index 0) + 7 (index 3)
