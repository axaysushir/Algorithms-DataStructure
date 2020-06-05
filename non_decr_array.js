// Hi, here's your problem today. This problem was recently asked by Microsoft:
// You are given an array of integers in an arbitrary order. Return whether or not it is possible to make the array non-decreasing by modifying at most 1 element to any value.
// We define an array is non-decreasing if array[i] <= array[i + 1] holds for every i (1 <= i < n).

// Example: o(N) time O(1) space
// [13, 4, 7] should return true, since we can modify 13 to any value 4 or less, to make it non-decreasing.
// [13, 4, 1] however, should return false, since there is no way to modify just one element to make the array non-decreasing.
// 68ms
var checkPossibility = function (nums) {
  let result = 0;
  nums.reduce((prev, curr, ind) => {
    // Break reduce loop early by cutting array
    // if it need more then 1 element change
    if (result > 2) nums.splice(ind, nums.length);
    if (prev > curr) {
      result++;
      if (ind >= 2 && curr < nums[ind - 2]) return prev;
    }
    return curr;
  });
  return result <= 1;
};
// 80ms
var checkPossibility = function (nums) {
  let count = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      if (i - 2 >= 0 && nums[i] < nums[i - 2]) {
        nums[i] = nums[i - 1];
      }
      count++;
    }
    if (count > 1) return false;
  }
  return true;
};
// 84ms
var checkPossibility = function (nums) {
  let left = nums.slice(0);
  let right = nums.slice(0);
  let i = nums.findIndex((a, i) => a > nums[i + 1]);
  if (~i) left.splice(i, 1);
  if (~i) right.splice(i + 1, 1);
  return (
    !left.some((a, i) => a > left[i + 1]) ||
    !right.some((a, i) => a > right[i + 1])
  );
};

let nums = [13, 4, 1];
console.log(checkPossibility(nums));
