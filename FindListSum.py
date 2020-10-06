'''
Create a class that initializes with a list of numbers and has one method called sum. 
sum should take in two parameters, start_idx and end_idx and return the sum of the list 
from start_idx (inclusive) to end_idx` (exclusive).

You should optimize for the sum method.
'''

class ListFastSum:
  def sum(self, nums, start_idx, end_idx):
    l = len(nums)
    for i in range(1, l):
        nums[i] = nums[i] + nums[i-1]
    return nums[end_idx - 1] - nums[start_idx - 1]

print(ListFastSum().sum([1, 2, 3, 4, 5, 6, 7], 2, 3))
# 12 because 3 + 4 + 5 = 12
