# find smallest first missing interger in array
#  O(N) solution
class Solution:
    def firstMissingPositive(self, nums):
        s = set([x for x in nums if 0 < x <= len(nums)])
        val = 1
        while val in s: val += 1
        return val

nums = [3, 4, 1, 6]
print(Solution().firstMissingPositive(nums))
