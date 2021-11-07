// You are given a list of numbers, and a target number k. Return whether or not there are two numbers in the list that add up to k.
// add two sum to spacific target [2, 7, 4, 9] target 9
// FACEBOOK
var twosum = function (nums, target) {
  let sums = [];
  for (var i = 0; i < nums.length; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        sums.push(i);
        sums.push(j);
      }
    }
  }
  return sums;
};

let nums = [2, 7, 11, 15];
let target = 17;
console.log(twosum(nums, target));

// check number palindrome input= 212 retrun true
// either convert to string then reverse and check
// check half number to first helf
// using for loop
// convert to string
const clean = (str) => str.toLowerCase().replace(/[\w_]/g, "");
const isPalindrome = (str) => {
  const cleanStr = clean(str);
  for (let i = 0; i < cleanStr.length / 2; i++) {
    if (cleanStr[i] !== cleanStr[cleanStr.length - 1 - i]) return false;
  }
  return true;
};

var str = "121";
console.log(isPalindrome(str));

/*
Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

The tests are generated such that there is exactly one solution. You may not use the same element twice.
nput: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].
*/

var twoSum = function(numbers, target) {
  let l = 0, r = numbers.length-1;
  while (l < r) {
      let sum = numbers[l] + numbers[r]
      if (sum == target){
          return [l+1, r+1]
      } else if (sum > target){
          r--
      } else l++
  }
};