// Find first and last indices of traget element in sorted array
// Your algorithm's runtime complexity must be in the order of O(log n).
// If the target is not found in the array, return [-1, -1].
// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1] ASKED BY AIRBNB

var searchRange = function (nums, target) {
  let indices = [];

  indices.push(nums.indexOf(target));
  indices.push(nums.lastIndexOf(target));

  return indices;
};

let nums = [5, 7, 7, 8, 8, 10];
let target = 8;
console.log(searchRange(nums, target));

// Binary search
var searchRange = (nums, target) => {
  let low = 0, high = nums.length - 1, mid, left = -1, right = -1
  while (low <= high) {
    mid = Math.floor((low+high)/2)
    if (nums[mid] === target){
      left = mid
      high = mid - 1
    }
    else if (nums[mid] > target) {
      high = mid - 1
    }
    else low = mid + 1
  }

  low = 0
  high = nums.length - 1
  while (low <= high) {
    mid = Math.floor((low + high) / 2)
    if (nums[mid] === target) {
      right = mid
      low = mid + 1
    } else if (nums[mid] > target){
      high = mid - 1
    } else low = mid + 1
  }
  return [left, right]
}
let nums = [5, 7, 7, 8, 8, 10];
let target = 8;
console.log(searchRange(nums, target));



function intersecarr(arr1, arr2) {
  let res = [], output = new Set()
  for (let i=0; i<arr1.length; i++) {
    for (let j=0; j<arr2.length; j++) {
      if (nums1[i] === nums2[j]) {
        output.add(num1[i])
      }
    }
  }
  for (let n of output) res.push(n)
  return res
}

console.log(intersecarr([123], [3,4,5]));