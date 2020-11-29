# Given a list of numbers, and a target number n, find all unique combinations of a, b, c, d, such that a + b + c + d = n.

# using Hash set
def fourSum(nums, target):

    def ksum(nums, target, k):
        if len(nums) == 0 or nums[0] * k > target or target > nums[-1] * k:
            return []
        if k == 2:
            return twosum(nums, target)
        res = []
        for i in range(len(nums)):
            if i == 0 or nums[i-1] != nums[i]:
                for _, set in enumerate(ksum(nums[i + 1:], target - nums[i], k-1)):
                    res.append([nums[i]] + set)
        return res
    
    def twosum(nums, target):
        res = []
        s = set()
        for i in range(len(nums)):
            if len(res) == 0 or res[-1][1] != nums[i]:
                if target - nums[i] in s:
                    res.append([target - nums[i], nums[i]])
            s.add(nums[i])
        return res
    
    nums.sort()

    return ksum(nums, target, 4)
            

print(fourSum([1, 1, -1, 0, -2, 1, -1], 0))
# print [[-1, -1, 1, 1], [-2, 0, 1, 1]]

print(fourSum([3, 0, 1, -5, 4, 0, -1], 1))
# print [[-5, -1, 3, 4]]

print(fourSum([0, 0, 0, 0, 0], 0))
# print ([0, 0, 0, 0])
