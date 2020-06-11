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
