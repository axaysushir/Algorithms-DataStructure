// You are given an array of integers. Find the maximum sum of all possible contiguous subarrays of the array.

// Example: by Twitter

let nums = [34, -50, 42, 14, -5, 86]

// Given this input array, the output should be 137. The contiguous subarray with the largest sum is [42, 14, -5, 86].
// Your solution should run in linear time. O(n)
// kadane's algorithm  
let maxSubarray = function(nums) {
    let maxCurrent = nums[0] // set current element to max first
    let maxGlobal = nums[0]  // set current element to max. global
    // compare nums[0] with next item nums[i] & find max value to make it global array item
    for (let i=1; i< nums.length; i++) {
        maxCurrent = Math.max(nums[i], maxCurrent + nums[i])
        if (maxCurrent > maxGlobal) maxGlobal = maxCurrent
    }
    return maxGlobal
}

console.log(maxSubarray(nums));
