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

// devide without multiply devide
var devide = function (dividend, divisor) {
  let i = 0;
  if (dividend === -2147483648 && divisor === -1) {
    return 2147483647;
  }
  let div = Math.abs(dividend);
  let divy = Math.abs(divisor);

  while (div >= divy) {
    div = div - divy;
    i++;
  }
  let nagative = 0 - i;
  if (dividend > 0 && divisor > 0) return i;
  if ((dividend < 0 && divisor > 0) || (dividend > 0 && divisor < 0))
    return nagative;
  else return i;
};

let dividend = 7;
let divisor = 12;
console.log(devide(dividend, divisor));

const arr = [3, 3, 2, 1, 3, 2, 1];
arr.sort();
console.log(arr);


var strStr = function(haystack, needle) {
  if ((!haystack && !needle) || (haystack && !needle)) return 0
  for (let i=0; i< haystack.length; i++) {
    if (haystack[i] === needle[0] && haystack.slice(i, i + needle.length) === needle){
      return i
    }
  } 
  return -1
};

let haystack = 'hello'
let needle= 'll'
console.log(strStr(haystack, needle));

