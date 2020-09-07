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

let dividend = 6;
let divisor = 12;
console.log(devide(dividend, divisor));

const arr = [3, 3, 2, 1, 3, 2, 1];
arr.sort();
console.log(arr);

var strStr = function (haystack, needle) {
  if ((!haystack && !needle) || (haystack && !needle)) return 0;
  for (let i = 0; i < haystack.length; i++) {
    if (
      haystack[i] === needle[0] &&
      haystack.slice(i, i + needle.length) === needle
    ) {
      return i;
    }
  }
  return -1;
};

let haystack = "hello";
let needle = "ll";
console.log(strStr(haystack, needle));

// find ceil and floor of bst
class BST {
  constructor(root = null) {
    this.root = root;
  }
  insert(key, value) {
    if (!this.root) {
      this.root = new BSTNode(key, [value]);
      return;
    }

    let parent = null;
    let curr = this.root;

    while (curr) {
      if (key === curr.key) {
        return curr.values.unshift(value); // DP is reverse, so a newer equal node has a higher priority
      } else if (key < curr.key) {
        [parent, curr] = [curr, curr.left];
      } else [parent, curr] = [curr, curr.right];
    }

    let newNode = new BSTNode(key, [value]);
    if (key < parent.key) {
      parent.left = newNode;
    } else parent.right = newNode;
  }

  getFloor(key) {
    let p = this.root;
    targetNode = null;
    while (p) {
      if (key === p.key) {
        return p.values[0];
      }
      if (p.key <= key && (targetNode === null || p.key > targetNode.key)) {
        targetNode = p;
      }
      if (key < p.key) {
        p = p.left;
      } else {
        p = p.right;
      }
    }
    return targetNode ? targetNode.values[0] : null;
  }

  getCeiling(key) {
    let p = this.root,
      targetNode = null;
    while (p) {
      if (key === p.key) {
        return p.values[0];
      }
      if (p.key > key && (targetNode === null || p.key < targetNode.key)) {
        targetNode = p;
      }
      if (key < p.key) {
        p = p.left;
      } else p = p.right;
    }
    return targetNode ? targetNode.values[0] : null;
  }
}

class BSTNode {
  constructor(key, values = [], left = null, right = null) {
    this.key = key;
    this.values = values;
    this.left = left;
    this.right = right;
  }
}
let values = [2, 4, 6, 8, 10, 12, 14];

console.log(solution(values, 5));


// 
let x = 25
let y = -5
let multiply = function(x,y) {
  if (y==0 || x == 0) return 0
  if (y > 0) return (x + multiply(x, y-1))
  if (y < 0) return -multiply(x, -y)
}

console.log(multiply(x,y));

let devide = function(divi, dy) {
  let quot = 0
  let d = Math.abs(divi)
  let y = Math.abs(dy)
  while(d >= y) {
    d = d - y
    quot++
  }
  return quot
}

console.log(devide(25,4));


let nums = [1,2,3,4,1,4]

let duplicate = nums.filter((item ,index) => nums.indexOf(item) === index);
const unique = [...new Set(nums)]
console.log(duplicate)

let move = nums => {
  let (i = nums.length; 0 <= i; i--) {
    nums[i] == 0 && nums.splice(i, 1) && nums.push(0)
  }
  return nums
} 

let twosum = (nums, target) => {
  let sum = []
  for (let i=0; i< nums.length; i++) {
    for (let j = i+1; j < nums.legth; j++) {
      if (nums[i] + nums[j] === target) {
        sum.push(i)
        sum.push(j)
      }
    }
  }
  return sum
}

// meeting rooms
str = "The cat in the hat"

function reverse(str) {
  return str.split('').reverse().join('')
}
console.log(reverse(str)); //tah eht ni tac ehT
// reverse str by order
var reverseWords = function(s) {
  return s.trim().split(' ').reverse().join(' ').replace(/ +/g, ' ')
}
let ReverseWords = s => s.split(/\s+/g).filter(c => c !== '').reverse().join('')
console.log(reverseWords(str)); //hat the in cat The

/*
const google = 'google'
const fb = null // truthy & falsy value

if (google) {
  console.log('execute block 1')
}
// exe block 1
if (fb) {
  console.log('execute block 2');
}
// put fb is evaluated & null considered as not fals but falsy value
// ins some case we need true or false value to falsy
// how to convert falsy value to actual false or true
//let say in prod in authentication we need true or false value not falsy
if (!fb) {
  console.log('execute block 2');
}
// ex b1 b2 bcz it it consider as true or fasle boolena by js not falsy
// if we want exact true or false value we user ! but it reverse the logic
if (!!fb) {
  console.log('execute block 2');
}
// so it is best practice to error free code & still get same result
// when we wnt to convert some thing to null , 0
//  ! make it to true but we are 100% sure & second ! amek it false & give good performance in real app
const age = 0;

// bad
const hasAge = new Boolean(age); //create new obj

// good
const hasAge = Boolean(age);
//casting as boolean
// best
const hasAge = !!age;
*/