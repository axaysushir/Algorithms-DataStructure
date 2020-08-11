/*
Given an array of integers, arr, where all numbers occur twice except one number which occurs once, find the number. Your solution should ideally be O(n) time and use constant extra space. 
Example:
Input: arr = [7, 3, 5, 5, 4, 3, 4, 8, 8]
Output: 7
class Solution(object):
  def findSingle(self, nums):
    # Fill this in.

nums = [1, 1, 3, 4, 4, 5, 6, 5, 6]
print(Solution().findSingle(nums))
# 3
*/

// Using set
let singleNumber = function(nums) {
    let set = new Set()
    for (num of nums) {
        if (set.has(num)) {
            set.delete(num)
        } else {
            set.add(num)
        }
    }
    return Array.from(set)[0]
}

// sort and splice
var singleNum = nums => {
    nums.sort()
    for (let i= nums.length-1; i>=0l i--) {
        if (nums[i] === nums[i-1]) {
            nums.splice(i-1, 2)
        }
    }
    return nums[0]
}

/*
Python Bit Manipulation
class solution:
    def singleNum(self):
        ans = nums[0]
        for i in range(1, len(nums)):
            ans ^= nums[i]
        return ans
*/