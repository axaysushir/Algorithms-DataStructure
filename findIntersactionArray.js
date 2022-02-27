// Given two arrays, write a function to compute their intersection - the intersection means the numbers that are in both arrays.
// BY AMAZON
// Example 1:
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]
// Example 2:
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Note:
// Each element in the result must be unique.
// The result can be in any order.

// solution 1
var intersaction = (nums1, nums2) => {
  let set1 = Array.from(new Set(nums1)),
    set2 = new Set(nums2);
  return set1.filter((num) => set2.has(num));
};
nums1 = [1, 2, 2, 1], nums2 = [2, 2];
console.log(intersaction(nums1, nums2));

// solution 2
var intersaction = function (nums1, nums2) {
  return [...new Set(nums1.filter((num) => nums2.includes(num)))];
};

// solution 3
var intersaction = (nums1, nums2) => {
  let output = new Set();
  let result = [];
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] === nums2[j]) {
        output.add(nums1[i]);
      }
    }
  }

  for (let num of output) {
    result.push(num);
  }
  return result;
};

// solution 4 - Using HASH MAP
// Create a map of one of the arrays by looping over, this will allow us to keep track of our numbers and look them up using O(1) time, compared to keeping them in the array O(n).

// Then loop through the other array, checking to see if the number already exists. It's important to check by using map[n] >= 0 because if the number is 0 it will convert to false, which we don't want.

// If the number is in our map, we want to add it to a "Set". Set is a data type much like a map, but only allows unique items. This is perfect because the output only wants us to return the value of the common numbers, not the numbers themselves, each, individually.

// Lastly, we need to convert our Set back to an array, which we can do by using Array.from() or through the use of array destructuring.

// Return... and that's it!  time complexity: O(m + n)
var intersac = function (nums1, nums2) {
  let map = {},
    res = new Set();

  for (let n of nums1) map[n] = n;
  for (let n of nums2) map[n] >= 0 && res.add(n);

  // return Array.from(res)  // use any return both work
  return [...res];
};

// Python solution in 1 line

// class Solution():
//     def intersaction(self, nums1, nums2):
//         return list(set(nums1) & set(nums2))

// print(Solution().intersaction(nums1, nums2))
