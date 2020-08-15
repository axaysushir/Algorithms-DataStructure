/* Asked by Uber
Given a number of integers, combine them so it would create the largest number.

Example:
Input:  [17, 7, 2, 45, 72]
Output:  77245217
def largestNum(nums):
  # Fill this in.

print largestNum([17, 7, 2, 45, 72])
# 77245217
*/
// Solution 1

var largestNumber = (nums) => {
  if (nums.length === 1) return String(parseInt(nums[0]));

  const str = nums
    .sort((a, b) =>
      parseInt(String(b) + a) > parseInt(String(a) + b) ? 1 : -1
    ) // sort
    .reduce((a, e) => a + String(parseInt(e)), ""); // concatenate
  // Incase there are no positive numbers, and Just multiple 0's
  return parseInt(str) ? str : "0";
};

console.log(largestNumber([17, 7, 2, 45, 72]));

// Solution2

var largestNum = (nums) => {
  return nums
    .sort((a, b) => {
      const aArr = numsToArr(a);
      const bArr = numsToArr(b);

      const mergeAB = aArr.concat(bArr);
      const mergeBA = bArr.concat(aArr);

      for (let i = 0; i < mergeAB.length; i++) {
        if (mergeAB[i] === mergeBA[i]) continue;
        return mergeBA[i] - mergeAB[i];
      }
    })
    .reduce((prev, curr) => {
      if (prev === "0") prev = "";
      return prev + "" + curr;
    }, "");
};

var numsToArr = (num) => {
  if (!num) return [0];
  const arr = [];
  while (num) {
    arr.push(num % 10);
    num = Math.floor(num / 10);
  }
  return arr.reverse();
};
console.log(largestNum([17, 7, 2, 45, 72]));

// Regex
function largestNumber(num) {
  return (
    num
      .sort(function (a, b) {
        return b + "" + a - (a + "" + b);
      })
      .join("")
      .replace(/^0*/, "") || "0"
  );
}
