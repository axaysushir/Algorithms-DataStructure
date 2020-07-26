// By MICROSOFT: LEETCODE
// You are given an array of integers. Return the length of the longest increasing subsequence (not necessarily contiguous) in the array.

// Example:
// [0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15]

// The following input should return 6 since the longest increasing subsequence is 0, 2, 6, 9 , 11, 15.
// Solution using dynamic programming
// The problem is reduced to what is the length of the longest increasing sequence to i
// dp[i] = if (nums[i] > nums[j]) { dp[i] = Math.max(dp[j] +1, dp[i])}
var lengthOfLIS = (nums) => {
  const dp = new Array(nums.length + 1);
  dp.fill(1); // initially fill array with 1
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    max = Math.max(dp[i], max);
  }
  return max;
};

nums = [0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15];
console.log(lengthOfLIS(nums));

// solution 2: o(n Log n)
// Time: O(nlogn)
// Space: O((n+1) * n/2) = O(nlogn)
var lengthOfLIS = (nums) => {
  let dp = [[nums[0]]];
  for (let i of nums) {
    let f = false;
    // for every entry in the dynamic array check if i > its last element
    for (let j of dp) {
      if (i <= j[j.length - 1]) {
        f = true;
        j[j.length - 1] = i;
        break;
      }
    }
    if (!f) dp.push(dp[dp.length - 1].concat([i]));
  }
  return nums.length > 0 ? dp[dp.length - 1].length : 0;
};
nums = [0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15];
console.log(lengthOfLIS(nums));



// Python
// longest increasing subsequence O(n log n)

// class Solution():
//     def findLongestSub(self, nums):
//         if len(nums) <2 : 
//             return len(nums)
        
//         stack = [nums[0]]
//         for i in nums[1:]:
//             if stack[-1] < i:
//                 stack.append(i)
//             else: 
//                 pos = bisect.bisect_left(stack, i, 0, len(stack)) # Binary seacrh
//                 stack[pos] = i
//         return len(stack)

// # solution2: O(n)

// class Solution:
//     def lengthOfLIS(self, nums: List[int]) -> int:
//         if len(nums) <= 1:
//             return len(nums)
//         note = [1 for x in range(len(nums))]
//         for i in range(1, len(nums)):
//             if nums[i] > nums[i - 1]:
//                 note[i] = note[i - 1] + 1
//         return max(note)

// nums = [0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15]
