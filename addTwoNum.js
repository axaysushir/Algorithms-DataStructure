// addTwoNumbers([1,2,3], [4,5,6])
var addTwoNumbers = function (l1, l2) {
  let result = new ListNode(0);
  let currentNode = result;
  let carryOver = 0;

  while (l1 != null || l2 != null) {
    let v1 = 0;
    let v2 = 0;
    if (l1 != null) v1 = l1.val;
    if (l2 != null) v2 = l2.val;

    let sum = v1 + v2 + carryOver;
    carryOver = Math.floor(sum / 10);
    sum = sum % 10;
    currentNode.next = new ListNode(sum);

    currentNode = currentNode.next;
    if (l1 != null) l1 = l1.next;
    if (l2 != null) l2 = l2.next;
  }

  if (carryOver > 0) {
    currentNode.next = new ListNode(carryOver);
  }
  return result.next;
};

// longest common prefix go, good, google
str = ['hoo', 'hood', 'hoom', 'hooore']
function longestCommonPrefix(strs) {
  let prefix = "";
  if (strs.length === 0) return prefix;
  for (let i = 0; i < strs[0].length; i++) {
    const character = strs[0][i];
    for (let j = 0; j < strs.length; j++) {
      if (strs[j][i] !== character) return prefix;
    }
    prefix = prefix + character;
  }
  return prefix;
}

// 3. Longest Substring Without Repeating Characters
// Input: "abcabcbb", "bbbbb" =1, "pwekwew"=3
// Output: 3 
// Explanation: The answer is "abc", with the length of 3. 
var lengthOfLongestSubstring = function (s) {
  const len = s.length;
  if (len < 2) return len;
  let result = [];
  let temp = [];
  [...s].forEach((ele) => {
    if (temp.includes(ele)) {
      // find index of ele in temp arr increment by 1
      tmp = [...temp.slice(tmp.findIndex((y) => y === ele) + 1)];
    }
    temp.push(ele);
    if (temp.lenght > result.lenght) result = temp;
  });
  return result.length;
};

// store in HASH
const lengthOfLongestSubstring = (s) => {
  let longest = 0;
  let start = 0;
  const seen = {};

  [...s].forEach((char, i) => {
    if (char in seen && start <= seen[char]) {
      longest = Math.max(i - start, longest);
      start = seen[char] + 1;
    }

    seen[char] = i;
  });

  return Math.max(s.length - start, longest);
};

function lengthOfLongestSubstring(s) {
  let res = 0,
  let  tmp = [];
  for (const char of s) {
    // keep track of index for each char 
    const index = tmp.indexOf(char);
    if (index > -1) {
      tmp = tmp.slice(index + 1);
    }
    tmp.push(char);
    if (tmp.length > res) res = tmp.length;
  }
  return res;
}

// reverse integer
const reverse = (val) => {
  let res = 0;
  const Base = 10;
  while (val) {
    res = res * Base + (val % Base);
    val = (val / Base) | 0;
  }
  return (res | 0) == res ? res : 0;
};
var x = 1
console.log(reverse(x));


// reverse integers
const reverse = (num) =>
  parseFloat(num.toString().split("").reverse().join("")) * Math.sign(num);

console.log(reverse(153423));

// Container with most water
// start with outside wall pick lowest  in height X width
// index of right - left wall =  result(max)
let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
var maxArea = function (height) {
  let i = 0;
  let j = height.length - 1; // last ele input arr
  let max = 0,
    area;

  while (i < j) {
    area = (j - i) * Math.min(height[i], height[j]);
    max = Math.max(area, max); // pass heighest value
    // compare i and j (not change j value) we reach to middle
    height[i] < height[j] ? i++ : j--;
  }
  return max;
};

console.log(maxArea(height));

// longest palindromic substring
// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// sol 1: longest common substring find lonest s and check reverse (O(n^2))
// sol 2: Brute force :pick all ele and check palindorme O(n^3) space O(1)
//  sol3: Dyncamic programming O(n^2) time & space
var longestPalindrome = function (s) {
  let start = 0
  let maxLen = 0
  if (s === null || s.length < 1 || s === undefined) return "";
  for (let i = 0; i < s.lenght; i++) {
    let len1 = expandAroundCenter(s, i, i);
    let len2 = expandAroundCenter(s, i, i + 1); // expand + 1 index
    let len = Math.max(len1, len2); // find max of r or left

    if (len > maxLen) {
      maxLen = len;
      start = i - Math.floor((len - 1) / 2);
    }
  }
  return str.substr(start, maxLen);
};
// @time complexity: O(n)
// @space complexity: O(1)
var expandAroundCenter = (s, left, right) => {
  // char at out border is the same
  while (left >= 0 && right < s.length && s.charAt(left) == s.charAt(right)) {
    left--;
    right++;
  }
  return right - left - 1;
};



// string camelcase to snake case
function camelToSnakeCase( string) {
  return string.split(/(?=[A-Z])/).map(x => x.toLowerCase()).join('_')
}

var x =camelToSnakeCase('HelloWorldSnale')
console.log(x)

function camelToSnakeCase(string) {
 return string.split(/(?=[A-Z])/).join('_').toLowerCase()
}
var Y = camelToSnakeCase('HelloWorld')
console.log(Y)

snakeToCamel = str => str.replace(/([-_]\w)/g, g => g[1].toUpperCase())
console.log(snakeToCamel('Snake_Case'))

const snakeToCamel = str => str.replace(/([-_][a-z])/g, g => g.toUpperCase().replace('-', '').replace('_', ''))
console.log(snakeToCamel('snake_case'))