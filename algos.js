var generateParenthesis = function (n) {
  const res = [];
  backtrack("", n, n);
  return res;

  function backtrack(parens, left, right) {
    if (left === 0 && right === 0) {
      res.push(parens);
      return;
    }
    if (left > 0) backtrack(parens + "(", left - 1, right);
    if (right > left) backtrack(parens + ")", left, right - 1);
  }
};

x = generateParenthesis(3);
console.log(x);

// leetcode 150, 56, 165

let searchIndex = function (nums, target) {
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == target) return i;
    else if (target > nums[i]) {
      index = i + 1;
      if (target < nums[i + 1]) return index;
    }
  }
  return index;
};
let nums = [1, 12, 3, 4, 5, 9, 6];
let target = 6;
x = searchIndex(nums, target);
console.log(x);
