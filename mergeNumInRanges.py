# Given a sorted list of numbers, return a list of strings that represent all of the consecutive numbers.
# BY FACEBOOK
# Example:
# Input: [0, 1, 2, 5, 7, 8, 9, 9, 10, 11, 15]
# Output: ['0->2', '5->5', '7->11', '15->15']
# Assume that all numbers will be greater than or equal to 0, and each element can repeat.

def findranges(nums):
    nums = sorted(set(nums))
    gaps = [[start,end] for start, end in zip(nums, nums[1:]) if start + 1 < end]
    edges = iter(nums[:1] + sum(gaps, [])+ nums[-1:])
    return list(zip(edges, edges))

nums = [0, 1, 2, 5, 7, 8, 9, 9, 10, 11, 15]
print(findranges(nums))  #[(0, 2), (5, 5), (7, 11), (15, 15)]

# anothre solution
def findRanges(nums):
    res = []
    a = b = nums[0]                           # a and b are range's bounds

    for ele in nums[1:]:
        if ele == b+1: 
            b = ele                           # range grows
        else:                                # range ended
            res.append(a if a==b else (a,b)) # is a single or a range?
            a = b = ele                       # let's start again with a single
    res.append(a if a==b else (a,b))         # corner case for last single/range
    return res
nums = [0, 1, 2, 5, 7, 8, 9, 9, 10, 11, 15]
print(findRanges(nums))
# [(0, 2), 5, (7, 9), (9, 11), 15]

