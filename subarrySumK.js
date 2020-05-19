// subarray sum equals K
// Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.
// Input:nums = [1,1,1], k = 2   Output: 2
// The simplest method is to consider every possible subarray of the given nums array, find the sum of the elements of each of those subarrays and check for the equality of the sum obtained with the given kkk. Whenver the sum equals kkk, we can increment the countcountcount used to store the required result.
// brute force solution Time complexity: O(n3), consider all subarray take O(n2) tiem and check sum takes O(n) time
// Space complexity  = O(1)
let nums = [1, 1, 1];
let k = 2;

var subarray = function (nums, k) {
  let count = 0;
  for (let start = 0; start < nums.length; start++) {
    for (let end = start + 1; end <= nums.length; end++) {
      let sum = 0;
      for (let i = start; i < end; i++) sum += nums[i];
      if (sum == k) count++;
    }
  }
  return count;
};
console.log(subarray(nums, k));

// CALCULATE WITHPUT SPACE O(n2) consider every sub array possible
// WE CONSIDER DIFFERENT END POINTS. CHOOSE PERTICULAR START POINT WHILE ITER THR. END POINTS
// 1 FIND THE SUM FOR EACH SUBARRAY FROM START TO END
// 2 ADD THAT ELEMENTS TO MAKE SUM & WHEN SUM IS = K THEN UPDATE COUNT++
// 3 REPEAT PROCESS FOR NEXT SUBARRAY WHILE RESET SUM VALUE = 0
var subarray = function (nums, k) {
  let count = 0;
  for (let start = 0; start < nums.length; start++) {
    let sum = 0;
    for (let end = start; end < nums.length; end++) {
      sum += nums[end];
      if (sum == k) count++;
    }
  }
  return count;
};
let nums = [1, 1, 1];
let k = 2;
console.log(subarray(nums, k));

// USING HASHMAP O(n) time complexity & O(1) space compexity
var subarray = function (nums, k) {
  let count = 0;
  let sum = 0;
  let map = new Map();
  map.set(0, 1); // store prefix sum value 0= sum 1= number of time sum found
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    let target = sum - k;
    if (map.has(target)) count += map.get(target); // get target count ++
    if (!map.has(target)) map.set(sum, 0); // not target set counter 0
    map.set(sum, map.get(sum) + 1); //every time we get sum count + by 1
  }
  return count;
};
let nums = [1, 1, 1];
let k = 2;
console.log(subarray(nums, k));
console.table(subarray(nums, k))



