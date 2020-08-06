''' BY Facebook Leetcode- 45
Starting at index 0, for an element n at index i, you are allowed to jump at most n indexes ahead. Given a list of numbers, find the minimum number of jumps to reach the end of the list.

Example:
Input: [3, 2, 5, 1, 1, 9, 3, 4]
Output: 2
Explanation:

The minimum number of jumps to get to the end of the list is 2: 
3 -> 5 -> 4
solution:

1. We start travering the array from start
2. While traversing, we keep a track on maximum reachable index and update it accordingly.
3. If we reach the previous reachable index, this implies we have reached this index with 
   current jumps and now we can reach the next maximum possible index by current jumps+1 jumps 
   and update the previous reachable index to maximum reachable index. Now, if updated previous 
   reachable index is greater than equal to last index, get out of loop.

'''

class Solution:
    def jump(self, nums):
        if len(nums) == 1: return 0

        reachableIndex = 0
        previousReachableIndex = 0
        jump = 0

        for curr in range(len(nums)):
            if curr + nums[curr] >= reachableIndex:
                reachableIndex = curr + nums[curr]

            if curr == previousReachableIndex:
                jump += 1
                previousReachableIndex = reachableIndex
                if previousReachableIndex >= len(nums) - 1:
                    break
        return jump

nums = [3, 2, 5, 1, 1, 9, 3, 4]
x = Solution().jump(nums)
print(x)