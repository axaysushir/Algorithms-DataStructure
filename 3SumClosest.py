# Given a list of numbers and a target number n, find 3 numbers in the list that sums closest to the target number n. There may be multiple ways of creating the sum closest to the target number, you can return any combination in any order.

def closest_3sum(nums, target):
    diff = float('inf')
    nums.sort()
    for i in range(len(nums)):
        lo, hi = i + 1, len(nums) - 1
        while lo < hi:
            sum = nums[i] + nums[lo] + nums[hi]
            if abs(target - sum) < abs(diff):
                diff = target - sum
            if sum < target:
                lo += 1
            else:
                hi -= 1
        
        if diff == 0:
            break
    return target - diff

print(closest_3sum([2, 1, -5, 4], 3))
# Closest sum is -5+1+2 = -2 OR -5+1+4 = 0
# print [-5, 1, 2]
