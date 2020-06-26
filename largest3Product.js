// This problem was recently asked by Microsoft:

// You are given an array of integers. Return the largest product that can be made by multiplying any 3 integers in the array.

// Example:
// solution 1: consider all triplets O(n^3) time complx.
// solution 2: use sorting O(nlog n) Sorting the numsnumsnums array takes O(nlogn) time. and space
//Another solution could be to sort the given numsnumsnums array(in ascending order) and find out the product of the last three numbers.

// But, we can note that this product will be maximum only if all the numbers in numsnumsnums array are positive. But, in the given problem statement, negative elements could exist as well.
// Thus, it could also be possible that two negative numbers lying at the left extreme end could also contribute to lead to a larger product if the third number in the triplet being considered is the largest positive number in the numsnumsnums array.
// Thus, either the product nums[0]×nums[1]×nums[n−1]nums[0] \times nums[1] \times nums[n-1]nums[0]×nums[1]×nums[n−1] or nums[n−3]×nums[n−2]×nums[n−1]nums[n-3] \times nums[n-2] \times nums[n-1]nums[n−3]×nums[n−2]×nums[n−1] will give the required result. Thus, we need to find the larger one from out of these values.

var nums = [1, 2, 3, 4] //should return 128 as the largest product can be made by multiplying -4 * -4 * 8 = 128.

var maximumProduct = function(nums) {
    let sorted = nums.sort((a,b) => a-b)
    let len = nums.length;
    let res1 = sorted[0] * sorted[1] * sorted[len - 1]
    let res2 = sorted[len - 1] * sorted[len - 2] * sorted[len - 3]
    return Math.max(res1, res2)
    
}

// O(n) 
 // get top 3 max and top 2 min in one pass
// return max of top 3, or top1 and last 2

var maximumProduct = function(nums) {
    let max1 = -Infinity;
    let max2 = -Infinity;
    let max3 = -Infinity;
    let min2 = Infinity;
    let min1 = Infinity;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > max1) {
        [max1, max2, max3] = [nums[i], max1, max2];
      } else if (nums[i] > max2) {
        [max2, max3] = [nums[i], max2];
      } else if (nums[i] > max3) {
        max3 = nums[i];
      }
      if (nums[i] < min1) {
        [min2, min1] = [min1, nums[i]];
      } else if (nums[i] < min2) {
        min2 = nums[i];
      }
    }
    return Math.max(max1 * max2 * max3, max1 * min1 * min2);
  };
var nums = [1, 2, 3, 4]
console.log(maximumProduct(nums))