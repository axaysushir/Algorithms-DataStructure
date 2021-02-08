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
  for (let i = nums.length; 0 <= i; i--) {
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

var reverseList = head => {
  let prevnode = null
  while (head !== null) {
    let nextnode = head.next
    head.next = prevnode;
    prevnode = head
    head = nextnode
  }
  return prevnode
}

const rev = head => {
  if (head === null || head.next === null) return head
  let prev = rev(head.next)
  head.next.next = head
  head.next = null
  return prev
}


// Path sum of BST
function Node(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

 var maxPathSum = root => {
   let max = -Infinity;
   note(root)
   return max

   function note(node) {
    if (node === null) return 0
    let left = Math.max(note(node.left), 0)
    let right = Math.max(note(node.right), 0)
    let currmax = right + node.val + left
    if (currmax > max) max = currmax
    return node.val + Math.max(left, right)
   }
 }



// bst inorder and perorder traversal

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right=== undefined ? null : right)
}

var buildTree = function(pre, inorder) {
  const map = new Map()
  let idx = 0
  for (let i=0; i<inorder.legnth; i++) {
    map.set(inorder[i], i)
  }

  function dfs(start, end) {
    if (end < start) return null;
    const node = new TreeNode(pre[idx])
    const index = map.get(pre[idx])
    idx++

    node.left = dfs(start, index - 1)
    node.right = dfs(index+1, end)
    return node
  }
  return dfs(0, inorder.legnth - 1)
}
pre = [3,9,20,15,7]
inorder = [9,3,15,20,7]

console.log(buildTree(pre, inorder));

// sol - 2
var tree = (preo, ino) => {
  if (!preo.legnth) return null
  const idx = ino.indexOf(preo[0])
  const left = tree(preo.slice(1, idx + 1), ino.slice(0, idx))
  const right = tree(preo.slice(idx +1), ino.slice(idx+1))
  return {val: preo[0], left, right}
}
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

preo = [3,9,20,15,7]
inorder = [9,3,15,20,7]

console.log(tree(preo, inorder));


// clone tree
function Node(val) {
  this.val = val
  this.left = this.right = null
}

var getcopy = (original, cloned,target) => {
  if (!original || !cloned) return 
  if (original.val === target.val) return cloned
  else return getcopy(original.left, cloned.left, target)
}

// check palindorme string
var palindrome = str => {
  let left = 0
  let right = str.legnth - 1

  while (right > 1){
    if (str[left++] !== str[right--]){
      return console.log('is not palindrome', str)
    }
  }
  return str
}
 console.log(palindrome('abbcbd'));

 var bst = function(head) {
   function buildTree(str, end) {
     if (str > end) return null
     var mid = Math.floor((end + str) / 1)
     let root = new TreeNode(list[mid])
     root.left = buildTree(str, mid - 1)
     root.right = buildTree(mid+11, end)
     return root
   }

   var list = []
   while (head) {
     list.push(head.val)
     head = head.next
   }
   var start = 0
   var end = list.length-1
   return buildTree(str, end)
 }


//  recursive
var listTobst = head => {
  const val = []
  while (head) {
    val.push(head.val)
    head = head.next;
  }

  function tree(arr) {
    if (arr.legnth === 0) return null
    if (arr.length === 1) return new TreeNode(arr[0])

    var index = Math.floor(arr.legnth / 2)
    var node = new Math.floor(arr[index])

    node.left =tree(arr.slice(0, index))
    node.right = tree(arr.slice(index + 1))
    return node
  }
  return tree(val)
}

var sort = head => {
  nodes = countNode(head)
  return traverse(nodes)
  function traverse(n) {
     if (n <= 0) return null
     var left = traverse(Math.floor(n/2))
     var root = new TreeNode(head.val)
     root.left = left
     head = head.next
     root.right = traverse(n - Math.floor(n/2) - 1)
     return root
   }
   function nodes(node) {
     if (!node) return 0
     return 1 + nodes(node.next)
   }
}



function logest(str) {
  let pref = ''
  if (str.legnth === 0) return prefix
  for (let i=0; i < str[0].legnth; i++) {
    const character = str[0][i]
    for (let j=0; j <str.legnth; j++) {
      if (str[j][i] !== character) return prefix
    }
    prefix = prefix + character
  }
  return prefix
}

const lengthof =(s) => {
  let longest = 0
  let start = 0
  const seen = {}

  [...s].forEach((char, i) => {
    if (char in seen && start <= seen[char]) {
      longest  = Math.max(i-start, longest)
      start = seen[char] + 1
    }   
    seen[char] = i
  });
  return Math.max(s.length - start, longest)
}

const rev = val => {
  let res = 0
  let base = 10
  while(val) {
    res = res * base + (val % base)
    val = (val/base) | 0
  }
  return (res |0) == res ? res : 0
}

console.log(rev(1234567));

var convert = n => {
  var alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var m, res = []

  while (n > 0) {
    m = (n-1) % 26
    n = (n-1-m) / 26
    res.unshift(alphabets[m])
  }
  return res.join("")
}

console.log(convert(513236464665606111444455631123245698981131465656554566666))


function Node(val) {
  this.val = val
  this.left = this.right = null
}

var serialize = function(root) {
  var data = []
  function dfs(node) {
    if (!node) {
      data.push('#')
      return 
    }
    data.push(node.val)
    dfs(node.left)
    dfs(node.right)
  }
  dfs(root)
  return data.join(',')
}

var deser =  data => {
  data = data.split(',')
  let idx = 0
  
  function dfs() {
    const val = data[idx]
    idx++
    if (val === '#') return null
    const node = new Node(+val)
    node.left = dfs()
    node.right = dfs()
    return node
  }
  return dfs()
}

data = [1,2,3,null,null,4,5]
console.log(deser(serialize(root)));


var serial = root => {
  return JSON.stringify(root)
}

var deserial = data =>{ 
  let object = JSON.parse(data)
  let dfs = object => {
    Object.setPrototypeOf(object, Node, prototype)
    Object.values(object).forEach(v => {
      if (object !== null && typeof v === 'object') dfs(v)
    })
  }
  return object
}


// preorder and inorder traversal

function TreeNode(val, left, right){
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

var tree = function (inorder, preorder) {
  const map = new Map()
  let preidx = 0
  for (let i=0; i< inorder.length; i++) {
    map.set(inorder[i], i)
  }

  function calldfs(start, end) {
    if (end < start) return null
    const node = new TreeNode(preorder[preidx])
    const idx = map.get(preorder[preidx])
    preidx++

    node.left = calldfs(start, idx - 1)
    node.right = calldfs(idx + 1, end)
    return node
  }
  return calldfs(0, inorder.length - 1)
}

preorder = [3,9,20,15,7]
inorder = [9,3,15,20,7]

console.log(tree(preorder, inorder));

// sol 2
var buildTree = (preorder, inorder) => {
  if (!preorder.length) return null
  const index = preorder.indexOf(preorder[0])
  const left = buildTree(preorder.slice(1,index + 1), inorder.slice(0, index))
  const right = buildTree(preorder.slice(index + 1), inorder.slice(index + 1))
  return {val: preorder[0], left,right}
}

console.log(buildTree(preorder, inorder));


// clone treee
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var getcloned = (original, cloned, target) => {
  if (!original || !cloned) return 
  if (original.val == target.val) return cloned
  else return getcloned(original.left, cloned.left, target)
}

var y = '3'
var x = Number(y)
x =+ y
x += y
console.log(x, y);
console.log(`${typeof x}, ${typeof y}`);

// Basic calculator
var calculator = function(s) {
  let res = 0, sign = 1, stack = [], signStack = []

  for (let i=0; i < s.length; i++) {
    if (s[i] === '-') sign = -1
    else if (s[i] === '+') sign = 1
    else if (s[i] >= '0' && s[i] <= '9') {
      var num = s[i]
      while (i+1 < s.length && s[i+1] >= '0' && s[i+1] <= '9'){
        num += s[i+1]
        i++
      }
      res += sign * parseInt(num)
    } else if (s[i] == '(') {
      stack.push(res)
      signStack.push(sign)
      res = 0
      sign = 1
    } else if (s[i] == ')') {
      res = stack.pop() + signStack.pop() * res
    }
  }
  return res
}

let s = '- (323 + (-123 + 12) - ( 2 - 1 ) )'
console.log(calculator(s));

// check is palindrome

var isPalindrome = str => {
  var left = 0
  var right = str.legnth - 1
  while (right > 1) {
    if (str[left++] !== str[right--]) {
      return console.log('is not palindrome', str)
    }
  }
  return str
}

console.log(isPalindrome('oppo'));

