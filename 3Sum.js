// Given an array, nums, of n integers, find all unique triplets (three numbers, a, b, & c) in nums such that a + b + c = 0. Note that there may not be any triplets that sum to zero in nums, and that the triplets must not be duplicates.

// Example:
// Input: nums = [0, -1, 2, -3, 1]
// Output: [0, -1, 1], [2, -3, 1]
// using two pointer technique to find 2sum to make it zero for every non re-occurring elements in array
// we don't need to think about memoization because the array is already sorted and we're skipping on the basis of that

var threeSum = function (nums) {
  var target = 0;
  var result = [];

  if (nums.length < 3) return result;
  // sorting is ok because the function is already O(n^2)
  // and sort is O(nlogn)
  // this also lets us stop iterating once weve passed the target value
  nums = nums.sort((a, b) => a - b);

  // well use i as our anchor as we move through the array
  // we stop at nums.length - 2 to prevent undefined for k
  for (let i = 0; i < nums.length - 2; i++) {
    // we can stop here if the current iterator is greater than the target value
    if (nums[i] > target) break;

    // if our iterator is same as previous value skip it to prevent dupicate result
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    // start j at i+1
    let j = i + 1;
    let k = nums.length - 1;
    // walking j and k towards each other to find all possible values
    // with i as our anchor value
    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];
      if (sum === target) {
        result.push([nums[i], nums[j], nums[k]]);
        // skip duplicate value of j and k
        while (nums[j] === nums[j + 1]) j++;
        while (nums[k] === nums[k - 1]) k--;

        // move j and k invard
        j++;
        k--;
        continue;
      }

      if (sum < target) {
        j++;
      }
      if (sum > target) {
        k--;
      }
    }
  }
  return result;
};

var nums = [0, -1,-1, 1];
console.log(threeSum(nums));
