// You are given an array of integers. Return the smallest positive integer that is not present in the array. The array may contain duplicate entries.
// BY FACEBOOK
// For example, the input [3, 4, -1, 1] should return 2 because it is the smallest positive integer that doesn't exist in the array.

// Your solution should run in linear time and use constant space.
// cyclic sort O(N) time, O(1) space
var firstMissingPositive = (nums) => {
    // If input array is empty smallest missing positive number is 1
    if (!nums.length) return 1;
    let n = nums.length;
    let i = 0;

    //cyclic sort: try placing each number from [1 .... n]
    // to its correctindex : nums[i] - 1 in arr
    while (i < n) {
        let j = nums[i] - 1
        // if there is positive number in the range [1....n]
        // and it it not at its correct indx (i-1)
        //swap nums[i] with nums[nums[i] - 1]
        if (nums[i] > 0 && n >= nums[i] && nums[i] !== nums[j]) {
            [nums[i], nums[j]] = [nums[j], nums[i]]
        } else i++
    }
    for (let i=0; i< nums.length; i++) {
        if (nums[i] !== (i+1)) return i+1
    }
    //if we reached here it means all number in nums array are containing 
    // the first 'n' positive numbers already, hence smallest missing positive would be (nums.length + 1)
    return nums.length + 1
} 
nums = [3, 4, , 1, -1]
console.log(firstMissingPositive(nums));

// solution 2: 
var firstMissingPositive = function(nums) {
    let n = 1
    while (nums.indexOf(n) >= 0) n++
    return n;
}

