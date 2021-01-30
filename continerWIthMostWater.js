// Container with most water
// start with outside wall pick lowest  in height X width
// index of right - left wall =  result(max)
let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
var maxArea = function (height) {
  let i = 0;
  let j = height.length - 1; // last ele input arr
  let max = 0;
  let area;

  while (i < j) {
    area = (j - i) * Math.min(height[i], height[j]);
    max = Math.max(area, max); // pass heighest value
    // compare i and j (not change j value) we reach to middle
    height[i] < height[j] ? i++ : j--;
  }
  return max;
};

console.log(maxArea(height));