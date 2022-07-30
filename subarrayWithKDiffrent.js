/* 992. Subarrays with K Different Integers
Hard

Given an integer array nums and an integer k, return the number of good subarrays of nums.

A good array is an array where the number of different integers in that array is exactly k.

    For example, [1,2,3,1,2] has 3 different integers: 1, 2, and 3.

A subarray is a contiguous part of an array.

Example 1:

Input: nums = [1,2,1,2,3], k = 2
Output: 7
Explanation: Subarrays formed with exactly 2 different integers: [1,2], [2,1], [1,2], [2,3], [1,2,1], [2,1,2], [1,2,1,2]

Example 2:

Input: nums = [1,2,1,3,4], k = 3
Output: 3
Explanation: Subarrays formed with exactly 3 different integers: [1,2,1,3], [2,1,3], [1,3,4].
*/

var subarraysWithKDistinct = function(nums, k) {
    function atmost(k) {
        let l = 0, count = {}, res= 0

        for (let i=0; i<nums.length; i++) {
            if (count[nums[i]] == null) count[nums[i]] = 0
            if (count[nums[i]] == 0) k--
            count[nums[i]]++

            while (k < 0) {
                count[nums[l]]--
                if (count[nums[l]] == 0) k++
                l++
            }
            res += i - l+1
        }
        return res
    }
    return atmost(k) - atmost(k-1)
}