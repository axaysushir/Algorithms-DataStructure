// Given a sorted list of numbers, return a list of strings that represent all of the consecutive numbers.
// BY Facebook
// Example:
// Input: [0, 1, 2, 5, 7, 8, 9, 9, 10, 11, 15]
// Output: ['0->2', '5->5', '7->11', '15->15']
// Assume that all numbers will be greater than or equal to 0, and each element can repeat.
// LEETCODE 228 :  SUMMARY RANGES

// with two pointers
var findRanges = function (nums) {
  const ranges = [];
  let i = 0;
  // iterate throughthe nums and use J to identify incontinuity
  // when incontinuity occurs, compose the current range and set I for new starting point
  for (let j = 1; j <= nums.length; j++) {
    if (nums[j] !== nums[j - 1] + 1) {
      if (i === j - 1) {
        ranges.push(`${nums[i]}`);
      } else {
        ranges.push(`${nums[i]}->${nums[j - 1]}`);
      }
      i = j;
    }
  }
  return ranges;
};

// Simply peek ahead one element. If it breaks the sequence, write the current range to our range list.
var summaryRanges = (nums) => {
  var ranges = [];
  var startRange = nums[0];

  for (var i = 0; i < nums.length; i++) {
    if (
      (i + 1 < nums.length && nums[i + 1] !== nums[i] + 1) ||
      i === nums.length - 1
    ) {
      ranges.push(
        nums[i] === startRange ? startRange + "" : startRange + "->" + nums[i]
      );
      startRange = nums[i + 1]; // new range start at next element
    }
  }
  return ranges;
};
nums = [0, 1, 2, 4, 5, 7];

console.log(summaryRanges(nums));


// solution 3
function findRange(nums) {
  var res = [];
  start = nums[0];
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] + 1 !== nums[i + 1]) {
      res.push(
        start === nums[i] ? nums[i] + "->" + nums[i] : start + "->" + nums[i]
      );
      start = nums[i + 1]; // start new range at next elelment
    }
  }
  return res;
}
nums = [0, 1, 2, 5, 7, 8, 9, 9, 10, 11, 15];
console.log(findRange(nums));
// output : [ '0->2', '5->5', '7->9', '9->11', '15->15' ]
