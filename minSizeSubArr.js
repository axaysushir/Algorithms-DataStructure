// Minimum size subarray sum
//Given an array of n positive integers and a positive integer s, find the minimal length of a contiguous subarray of which the sum ≥ s. If there isn't one, return 0 instead.
// Input: s = 7, nums = [2,3,1,2,4,3]
// output = 2 is minimum length of sub array size [4,3]

//Until now, we have kept the starting index of subarray fixed, and found the last position. Instead, we could move the starting index of the current subarray as soon as we know that no better could be done with this index as the starting index. We could keep 2 pointer,one for the start and another for the end of the current subarray, and make optimal moves so as to keep the sum\text{sum}sum greater than sss as well as maintain the lowest size possible.
//
// Initialize left\text{left}left pointer to 0 and sum\text{sum}sum to 0
// Iterate over the nums\text{nums}nums:
//     Add nums[i]\text{nums}[i]nums[i] to sum\text{sum}sum
//     While sum\text{sum}sum is greater than or equal to sss:
//         Update ans=min⁡(ans,i+1−left)\text{ans}=\min(\text{ans},i+1-\text{left})ans=min(ans,i+1−left), where i+1−lefti+1-\text{left}i+1−left is the size of current subarray
//         It means that the first index can safely be incremented, since, the minimum subarray starting with this index with sum≥s\text{sum} \geq ssum≥s has been achieved
//         Subtract nums[left]\text{nums[left]}nums[left] from sum\text{sum}sum and increment left\text{left}left

var minSubArrayLen = function (s, nums) {
  let n = nums.length;
  let ans = Number.MAX_SAFE_INTEGER; // (2^53 - 1)
  let left = 0;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += nums[i];
    while (sum >= s) {
      ans = Math.min(ans, i + 1 - left);
      sum -= nums[left++];
    }
  }
  return ans !== Number.MAX_SAFE_INTEGER ? ans : 0;
};

var minSubArrayLen = function (s, nums) {
  let left = 0;
  let right = 0;
  let sum = 0;
  let res = 0;

  while (right < nums.length) {
    sum += nums[right];

    while (sum >= s) {
      let len = right - left + 1;
      if (res === 0 || len < res) res = len;
      sum -= nums[left++];
    }
    right++;
  }
  return res;
};

s = 11
nums = [2,3,5,2,4,3]
console.log(minSubArrayLen(s, nums));
