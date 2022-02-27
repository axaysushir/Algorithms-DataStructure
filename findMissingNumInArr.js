/*
Given an array of integers of size n, where all elements are between 1 and n inclusive, find all of the elements of [1, n] that do not appear in the array. Some numbers may appear more than once.

Example:
Input: [4,5,2,6,8,2,1,5]
Output: [3,7]

*/
// Solution 1: O(n)
var missingNumber = function (nums) {
  let len = nums.length;
  if (!len) return 0;
  let sum = len * ((len + 1) / 2);
  let arrsum = nums.reduce((a, b) => {
    return a + b;
  });
  return sum - arrsum;
};

// Solution 2: O(n)
var missingNumber = function (nums) {
  let actualSum = nums.length;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    actualSum = actualSum + i;
    sum = sum + nums[i];
  }
  return actualSum - sum;
};

// Solution 3:

const missingNumber = function (nums) {
  nums.sort((a, b) => a - b);
  let sum = 0;
  let max = 0;
  for (let n of nums) {
    sum += n;
    if (n > max) max = n;
  }
  return (max * (max + 1)) / 2 - sum;
};

console.log(missingNumber([5, 2, 3, 1]));
/*
class Solution:
    def missingNumber(self, nums):
        if len(nums) == max(nums):
            for num in range(max(nums)):
                if num not in nums:
                return num
        else:
    return len(nums)
*/
