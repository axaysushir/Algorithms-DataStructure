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

let moveZeros = nums => {
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
class Node {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
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
class Node {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
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


class Node {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
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

// buddy string
var buddy = (a, b) => {
  if (a === '') return false;
  if (a.length !== b.length) return false;
  if (a === b) return a.legnth !== new Set(a).size;

  let charA, charB, count = 0
  for (let i=0; i<a.legnth; i++) {
    if (a[i] !== b[i]){
      count += 1
      if (!charA) {
        charA = a[i]
        charB = b[i]
      } else {
        if (charA !== b[i] || charB !== a[i]) return false
      }
    }
  }
  return count === 2 ? true : false
}

console.log(buddy('ab', 'ba'));


var threesum = nums => {
  var target = 0
  var res = []

  if (nums.length < 3) return res

  nums = nums.sort((a,b) => a -b)
  for (let i=0; i< nums.length - 2; i++) {
    if (nums[i] > target) break

    if (i>0 && nums[i] === nums[i-1]) continue

    var j = i+ 1
    var k = nums.length - 1
    while (j < k) {
      var sum = nums[i] + nums[j] + nums[k]
      if (sum === target) {
        res.push([nums[i], nums[j], nums[k]])
        while (nums[j] === nums[j+1]) j++
        while (nums[k] === nums[k-1]) k--
        j++
        k--
        continue;
      }
      if (sum > target) j++
      if (sum < target) k--
    }
  }
  return res
}
nums = [0, -1, 2, -1]
console.log(threesum(nums));

var matrix = (nums,r,c) => {
  const total = nums.length * nums[0].length;
  if (r * c > total) return nums
  const flatten = nums.flat()
  const res = []
  for (let i=0; i<r; i++) {
    const newArr = flatten.splice(0, c)
    res.push(newArr)
  }
  return res
}

console.log(matrix([[1, 2], [3, 4], [5,6]],2,6));
console.log(matrix([[1,2,3], [4,5,6], [7,8,9]], 5, 9))

var removeDup = s => {
  let res = []
  for (const char of s) {
    if (res[res.length - 1] === char) {
      res.pop()
      continue
    }
    res.push(char)
  }
  return res.join('')
}

console.log(removeDup('cabba'));
console.log(removeDup('abbfggreee'));

// add two lists togather
var addnum = (l1, l2) => {
  var res = new ListNode(0)
  var currentNode = res
  var carry = 0

  while (l1 != null || l2 != null) {
    let v1, v2 = 0
    if (l1 != null) v1 = l1.val
    if (l2 != null) v2 = l2.val

    var sum = v1 + v2 + carry
    carry = Math.floor(sum / 10)
    sum = sum % 10
    currentNode.next = new ListNode(sum)
    currentNode = currentNode.next
    if (l1 != null) v1 = l1.next
    if (l2 != null) v2 = l2.next
  }
  if (carry > 0) currentNode.next = new ListNode(carry)
  return res.next
}


var serch = (nums, tar) => {
  var ind = 0
  for (let i=0; i<nums.length; i++) {
      if (nums[i] == tar) return i
      else if (tar > nums[i]) {
          ind = i+1
          if (tar < nums[i+1]) return ind
      }
  }
  return ind
}

x = serch([1,2,3], 6)
console.log(x)

var search = (nums, target) => {
  return (
    nums.indexOf(target) &&
    nums.concat(traget).sort((a, b) => a - b).indexOf(target)
  )
}

//delete duplicate nodes
var del = head => {
  var node = new ListNode(-1)
  var ans = node
  var pre = head, cur = head
  while(cur) {
    while (cur.next && cur.val == cur.next.val) cur = cur.next
    if (pre == cur) (ans.next = cur), (ans = ans.next);
    pre = cut = cur.next
  }
  ans.next = null
  return node.next
}

var duplicate = head => {
  if (!head) return null
  var pre = new ListNode(0)
  pre.next = head;
  var node = pre

  while (node.next && node.next.next) {
    if (node.next.val = node.next.next.val) {
      var val = node.next.val
      while(node.next && node.next.val == val) {
        node.next = node.next.next
      }
    } else node = node.next
  }
  return pre.next
}

var count = n => {
  var res = 0
  while (n !== 0) {
    n = (n & (n << 1))
    res++
  }
  return res
}

console.log(count(123))

var str = (a,b) => {
  if (a.length === 0 && b.length === 0) return true
  var n = a.length
  var tmp = a.split('')
  for (let i=0; i<=n; i++) {
    tmp.push(tmp[0])
    tmp.shift()
    if (tmp.join('') == b) return true
  }
  return false
}

console.log(str('abc', 'cab'));

var shift = (a, b) => {
  if (a.length !== b.length) return false
  if (!a && !b) return true

  for (let i=0; i< a.length; i++) {
    if (a.charAt(i) === b.charAt(0)) {
      if (a.slice(i) + a.slice(0, i) === b) return true
    }
  }
  return false
}

console.log(shift('abcde', 'bcdea'))
console.log(str('abc', 'cadb'));


// Dijkstra's Algorithm
var arr = [3,3,2,1,3,2,1,2,1,3,3,2,2,1,1], mid = 2, i=0, j=0, n= arr.length-1

while (j <= n) {
  if (arr[j] < mid) {
    [arr[i], arr[j]] = [arr[j], arr[i]]
    i++
    j++
  } else if (arr[j] > mid)  {
    [arr[n], arr[j]] = [arr[j], arr[n]]
    n--
  } else j++
}

console.log(arr)

const count = arr.reduce((acc, curr) => {
  acc[curr]++
  return acc
}, {1:0, 2:0, 3:0})

arr.forEach((_, j) => {
  if (j < count[1])
  arr[j] = 1
  else if (j < count[1]+count[2])
  arr[j] = 2
  else arr[j] = 3
})
console.log(arr)


// remove nth node from linked list
var removeNode = (head, n) => {
  var listNode;
  var dummy = new listNode(0)
  dummy.next = head;
  var length = 0;
  first = head;

  while (first !== null) {
    lenght ++
    first = first.next
  }
  length--
  first = dummy;
  while (length > 0) {
    length--
    first = first.next
  }
  first.next  = first.next.next;
  return dummy.next
}

// reverse linked list

var rev = head => {
  var prevNode = null
  while (head !== null) {
    var nextNode = head.next
    head.next = prevNode
    prevNode = head;
    head = nextNode
  }
  return prevNode
}

const rever = head => {
  if (head === null || head.next === null) return head
  var prevNode = rever(head.next)
  head.next.next = head;
  head.next = null
  return prevNode
}

const rev = head => reverse(head, null);
const reverse = (head, next) => {
  if (!node) return next
  var temp = node.next
  node.next = next
  return reverse(temp, node)
}

var minsub = (s, nums) => {
  var n = nums.length;
  var ans = Number.MAX_SAFE_INTEGER;
  var left = 0, sum = 0;

  for (let i=0; i<n; i++) {
    sum += nums[i]
    while (sum >= s) {
      ans = Math.min(ans, i+1 - left)
      sum -= nums[left++]
    }
  }
  return ans !== Number.MAX_SAFE_INTEGER ? ans : 0;
}

var min = (s, nums) => {
  var left = 0, right = 0, sum = 0, res = 0;
  while(right < nums.length) {
    sum += nums[right]

    while (sum >= s) {
      var len = right -left + 1
      if (res === 0 || len < res) res = len
      sum -= nums[left++]
    }
    right++
  }
  return res
}
s = 11;
nums = [2, 3, 5, 2, 4, 3];
console.log(min(s, nums));


var simplestPath = path => {
  var start = []
  path = path.split('/').filter(file => file.length && file != '.')
  console.log(path)

  for (let file of path) {
    if (file == '..') start.pop()
    else start.push(file)
    console.log(file);
  }
  return '/' + start.join('/')
}

console.log(simplestPath('/Users/Joma/Documents/../Desktop/./../'))


var num = [2, 1, 4, 7, 2, 0, 5]

class Median {
  constructor() {
    this.arr = []
  }

  addnum(num) {
    if (this.arr.length === 0) {
      this.arr.push(num)
      return
    }
    let l = 0
    let r = this.arr.length

    while (l < r) {
      mid = Math.floor((l + r)/ 2)
      if (num > this.arr[mid]) {
        l = mid + 1
      } else {
        r = mid
      }
    }
    this.arr.splice(l, 0, num)
  }

  findmed() {
    const mid = Math.floor(this.arr.length / 2)
    return (this.arr.length & 1) === 1 ? this.arr[mid] : (this.arr[mid] + this.arr[mid -1] / 2)
  }
}

var reInt = x => {
  var nag = x < 0
  var rev = 0;
  if (nag) x *= -1
  while (x > 0) {
    rev = (rev * 10) + (x % 10)
    console.log(rev, 'rev');
    x = Math.floor(x/10)
    console.log(x, "x")
  }
  if (rev > (2** 31 -1)) return 0
  return nag ? (rev * -1) : rev
}

console.log(reInt(987));
console.log(reInt(123456799712336));
// console.log(2 ** 31 );

var plus = digit => {
  for (let i= digit.length-1; i>=0; i--) {
    if (digit[i] != 9) {
      digit[i]++
      return digit
    } else {
      digit[i] = 0
    }
  }
  digit.unshift(1)
  return digit
}

console.log(plus([1,9,9]));

var arr = [3,3,2,1,3,2,1], mid = 2, i = 0, j = 0, n = arr.length - 1
while (j <= n) {
  if (arr[j] < mid) {
    [arr[i], arr[j]] = [arr[j], arr[i]]
    i++
    j++
  } else if (arr[j]> mid) {
    [arr[n], arr[j]] = [arr[j], arr[n]]
    n--
  } else j++
}
console.log(arr)

// sprial order
var spiral = matrix => {
  if (matrix.length === 0 || matrix.length[0] === 0) return []
  var res = []
  // add first row
  res = res.concat(matrix.shift())

  for(let i=0; i < matrix.length-1; i++) {
    res.push(matrix[i].pop())
  }
  const lastrow = matrix.pop()
  if (lastrow) res = res.concat(lastrow.reverse())
  for(let i= matrix.length-1; i>=0; i--) {
    if (matrix[i].length) res.push(matrix[i].shift())
  }
  return res.concat(spiral(matrix))
}

var spiral = matrix => {
  let res = []

  while (matrix.length > 0) {
    var top= matrix.shift()
    var bottom = (matrix.pop() || []).reverse()
    var left = [], right = []
    for (let i=0; i < matrix.length; i++) {
      if (matrix[i].length > 0) {
        right.push(matrix[i].pop())
        left.unshift(matrix[i].shift())
      }
    }
    res.push(...top, ...left, ...right, ...bottom)
  }
  return res
}
let matrix = [[1,  2,  3,  4,  5],
             [6,  7,  8,  9,  10],
             [11, 12, 13, 14, 15],
             [16, 17, 18, 19, 20]]
console.log(spiral(matrix));

// Detect cycle in linked list
var hasCycle = head => {
  let nodeseen = new Set()
  while(!head) {
    if (nodeseen.has(head)) return true
    else nodeseen.add(head)
    head = head.next
  }
  return false
}

var cyclic = head => {
  if (!head || head.next === null) return false
  var slow = head;
  var fast = head.next
  while (slow != fast) {
    if (fast == null || fast.next == null) {
      return false
    }
    slow = slow.next;
    fast = fast.next.next
  }
  return true
}

var rotateString = (a, b) => {
  return a.length === b.length && (a+a).includes(b)
}
console.log(rotateString('abcde', 'cdeab'))

var shift =  (a, b) => {
  if (a.length !== b.length) return false
  if (!a && !b) return true
  for (let i=0; i<a.length; i++) {
    if (a.charAt(i) === b.charAt(0)) {
      if (a.slice(i) + a.slice(0, i) === b) return true
    }
  }
  return false
}
console.log(shift('abcde', 'bcdea'));

// alphabet
const isSorted = (words, order) => {
  const alphabet = {}
  for (let i=0; i< order.length; i++) {
    alphabet[order[i]] = i
  }

  for (let i=0; i<words.length-1; i++) {
    let first = words[i]
    let sec = words[i+1]
    let minlen = Math.min(first.length, sec.length)
    let comparison = false
    for (let j=0; j<minlen; j++) {
      if (first[j] === sec[j]) continue
      comparison = true
      if (alphabet[first[j]] > alphabet[sec[j]]) return false
      break
    }
    if (!comparison && first.length > sec.length) return false
  }
  return true
}
console.log(isSorted(["zyx", "zyxw", "zyxwa"], "zyxwvutsrqponmlkjihgfedcba"));

const sorted = (word, order) => {
  for (let i=0; i<word.length-1; i++) {
    var word1 = word[i]
    var word2 = word[i+1]
    if (!isRightOrder(word1, word2, order)) return false
  }
  return true
}

const isRightOrder = (word1, word2, order) => {
  var length = word1.length > word2.length ? word1.length : word2.length;
  for (let i=0; i < length; i++) {
    let ind1 = order.indexOf(word1[i])
    let ind2 = order.indexOf(word2[i])

    if (ind1 < ind2) return true
    if (ind1 > ind2) return false
  }
  return true
}
console.log(sorted(["zyx", "zyxw", "zyxwa"], "zyxwvutsrqponmlkjihgfedcba"));

var threeSum = nums => {
  var target = 0;
  var res = []

  if (nums.length<3) return res;
  nums = nums.sort((a, b) => a - b);

  for (let i=0; i < nums.length; i++) {
    if (nums[i] > target) break;
    if (i >0 && nums[i] === nums[i-1]) continue
    let j = i+1
    let k = nums.length - 1
    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k]
      if (sum === target) {
        res.push([nums[i], nums[j], nums[k]])
        while (nums[j] === nums[j+1]) j++;
        while (nums[k] === nums[k-1]) k--;
        j++
        k--
        continue
      }
      if (sum < target) j++
      if (sum > target) k--
    }
  }
  return res
}
var nums = [0, -1,-1, 1];
console.log(threeSum(nums));
02564220025

// search index

let searchIdx = (nums, target) => {
  let index = 0
  for (let i=0; i <nums.length; i++) {
    if (nums[i] == target) return i
    else if (target > nums[i]) index = i+1
    if (target <nums[i+1]) return index
  }
  return index
}

let search = (nums, tar) => {
  return (nums.indexOf(tar) && nums.concat(tar).sort((a,b) => a-b).indexOf(tar))
}
x= search([1,2,3], 5)
console.log(x)

// top frequent words
var topK = (words, k) => {
  const hash = words.reduce((map, word) => {
    if (map.has(word)) map.set(word, map.get(word) + 1)
    else map.set(word, 1)
    return map
  }, new Map())

  const sorted = [...hash].sort((a,b) => {
    if (a[1] > b[1]) return -1
    if (a[1] < b[1]) return 1
    if (a[0] > b[0]) return 1
    if (a[0] < b[0]) return -1
  })
  return sorted.slice(0, k).map(([x]) => x)
}

// find binry tree cousins

var isCousins = function(root, x, y) {
  var xParent, yParent = null
  var xDepth, yDepth = 0
  depthOfTree(root, x, y, 0, null)
  if (xDepth == yDepth && xParent !== yParent) return true
}

function depthOfTree(root, x, y, depth, prev)  {
  if (root == null) return
  if (root.val == x) {
    xParent = prev
    xDepth = depth
  }
  if (root.val == y) {
    yParent = prev
    yDepth = depth
  }
  depth++
  prev = root
  depthOfTree(root.left, x, y, depth, prev)
  depthOfTree(root.right, x, y, depth, prev)
}

let deleteNode = head => {
  if (!head) return null
  let pre = new ListNode(0)
  pre.next = head
  let node = pre

  while (node.next && node.next.next) {
    if (node.next.val === node.next.next.val) {
      let val = node.next.val
      while (node.mext && node.next.val == val) {
        node.next = node.next.next
      }
    } else node = node.next
  }
  return pre.next
}

var delDup = head => {
  var node = new ListNode(-1)
  var ans = node;
  var pre = head, cur = head;
  while (cur) {
    while (cur.next && cur.val == cur.next.val) cur = cur.next
    if (pre == cur) (ans.next = cur), (ans = ans.next)
    pre = cur = cur.next
  }
  ans.next = null
  return node.next
}

var subarraySum = (nums, k) => {
  var count = 0
  for (let s = 0; s < nums.length; s++) {
    for (let e =s+1; e < nums.length; e++ ) {
      var sum = 0
      for (let i=0; i< e; i++) sum += nums[i]
      if (sum == k) count++
    }
  }
  return count
}

let nums = [1, 1, 1];
let k = 2;
console.log(subarraySum(nums, k));

// using hashmap
var sub = (nums, k) => {
  let count = 0
  let sum = 0
  let map = new Map()
  map.set(0, 1)
  for (let i=0; i<nums.length; i++) {
    sum += nums[i]
    let target = sum - k
    if (map.has(target)) count += map.get(target)
    if (!map.has(target)) map.set(sum, 0)
    map.set(sum, map.get(sum) + 1)
  }
  return count
}

// search range
var searchRange = (nums, target) => {
  let low = 0, high = nums.length-1, mid, right = -1, left = -1;
  while (low < high) {
    mid = Math.floor((low+high)/2)
    if (nums[mid] === target) {
      left = mid
      high = mid - 1
    } else if (nums[mid] > target) {
      high = mid -1
    }
    else low = mid + 1
  }
  low = 0
  high = nums.length -1
  while (low <= high) {
    mid = Math.floor((low+high)/2)
    if (nums[mid] === target) {
      right = mid
      low = mid + 1
    } else if (nums[mid] > target) {
      high = mid - 1
    } else low = mid + 1
  }
  return [left, right]
}

let nums = [1,2,4,5,6,8,9,1,3,8]
let target = 8
console.log(searchRange(nums, target));

// invert binary tree
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : null;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var invertTree = root => {
  if (root === null) return null;
  const right = invertTree(root.right)
  const left = invertTree(root.left)
  root.left = right
  root.right = left
  return root
}

// Dfs
var invert = root => {
  var stack = [root]
  while (stack.length) {
    let n = stack.pop()
    if (!n) continue
    [n.left, n.right] = [n.right, n.left]
    stack.push(n.left, n.right)
  }
  return root
}

const inverted = root => {
  if (root === null) return root;
  [root.left, root.right] = [inverted(root.right), inverted(root.left)]
  return root
}

//
// 0 batches can be made
batches(
  { milk: 100, butter: 50, flour: 5 },
  { milk: 132, butter: 48, flour: 51 }
)
batches(
  { milk: 100, flour: 4, sugar: 10, butter: 5 },
  { milk: 1288, flour: 9, sugar: 95 }
)

// 1 batch can be made
batches(
  { milk: 100, butter: 50, cheese: 10 },
  { milk: 198, butter: 52, cheese: 10 }
)

// 2 batches can be made
batches(
  { milk: 2, sugar: 40, butter: 20 },
  { milk: 5, sugar: 120, butter: 500 }
)
console.log(Object.getPrototypeOf(batches))
const batches = (recipe, available) => {
  return Math.floor(
    Math.min(...Object.keys(recipe).map(k => available[k] / recipe[k] || 0))
  )
}

console.log(batches({ milk: 100, butter: 50, cheese: 10 },{ milk: 198, butter: 52, cheese: 10 }));

console.log(typeof typeof 0) // "string"

document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', handleButtonClick)
})

document.addEventListener('click', e => {
  if (e.target.closest('button')) handleButtonClick()
})

// generate an array containing the fibonacci seq upto n
const fibonacci = n => {
  [...Array(n)].reduce((acc, val, i) => acc.concat(i > 1 ? acc[i-1] + acc[i-1]: i), [])
}

var foo = 1
var bar = () => {
  console.log(foo);
  var foo = 2
}
console.log(bar());

// mask charcters
const mask = (str, maskChar='#') =>
  str.slice(-4).padStart(str.length, maskChar)

console.log(mask('12345678901', '#'));

class Node {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.right = val === undefined ? null : right;
    this.left = val === undefined ? null : left;
  }
}

var maxPathSum = root => {
  let max = -Infinity
  note(root)
  return max

  function note(node) {
    if (node === null) return 0
    let left = Math.max(note(node.left), 0)
    let right = Math.max(note(note.right), 0)
    let currmax = right + left + node.val
    if (currmax > max) max = currmax
    return node.val + Math.max(left, right)
  }
}

let searchind = (nums, target) => {
  let idx = 0
  for(let i=0; i<nums.length; i++) {
    if (nums[i] == target) return i
    else if (target > nums[i]){
      idx = i+1
      if (target < nums[i+1]) return idx
    }
  }
  return idx
}

console.log(searchind([1,2,3,4], 0));

var sorted = head => {
  const val = []
  while (head) {
    val.push(head.val)
    head = head.next
  }
  function construct(arr)  {
    if (arr.length === 0) return null
    if (arr.length === 1) return new TreeNode(arr[0])

    let index = Math.floor(arr.length/2)
    let node = new TreeNode(arr[index])
    node.left = construct(arr.slice(0, index))
    node.right = construct(arr.slice(index+1))
    return node
  }
  return construct(val)
}

var listbst = head => {
  const countNode(node) {
    if (!node) return 0
    return 1 + countNode(node.next)
  }
  const numbofnodes = countNode(head)
  return traverse(numbofnodes)
  function traverse(n) {
    if (n <= 0) return null
    let left = traverse(Math.floor(n/2))
    let root = new TreeNode(head.val)
    root.left = left
    head = head.next
    root.right = travrse(n-Math.floor(n/2) -1)
    return root
  }
}

function TreeNode(val) {
  this.val = val
  this.left = this.right = null;
}
var targetNum = (original, cloned, target) => {
  if (!original || !cloned) return
  if (original.val == target.val) return cloned
  else return targetNum(original.left, cloned.left, target)
}

var remNthNode = (head, n) => {
  let list;
  let dummy = new list(0)
  dummy.next = head
  let length = 0
  first = head

  while (first != null) {
    length++
    first = first.next
  }
  length -= n;
  first = dummy
  while (length>0) {
    length--
    first = first.next
  }
  first.next = first.next.next
  return dummy.next
}

// rev integers
var reverse = x => {
  let nag = x < 0
  let rev = 0
  if (nag) x *= -1
  while (x > 0) {
    rev = (rev*10) + (x %10)
    console.log(rev);
    x = Math.floor(x/10)
  }
  if (reverse > (2**31-1)) return 0
  return nag ? (rev * -1) : rev
}
console.log(reverse(-123));

var simplepath = path => {
  let start = []
  path = path.split('/').filter(file => file.length && file != '.')
  for (let file of path) {
    if (file =='..') start.pop()
    else start.push(file)
  }
  return '/' + start.join('/')
}

let add = (l1, l2) => {
  let res = new ListNode(0)
  let curNode = res
  let carry = 0

  while (l1 != null || l2 != null) {
    var v1 = 0
    var v2 = 0
    if (l1 != null) v1 = l1.val;
    if (l1 != null) v2 = l2.val;

    let sum = v1 + v2 + carry
    carry = Math.floor(sum /10)
    sum = sum % 10
    curNode.next = new listNode(sum)

    curNode = curNode.next;
    if (l1 != null) l1 = l1.next;
    if (l2 != null) l2 = l2.next;

  }
  if (carry > 0) {
    curNode.next = new listNode(carry)
  }
  return res.next
}

// Longets common prefix
let strs = ["hoo", "hood", "hoom", "hooore"];

function longest(strs) {
  let pre = ''
  if (strs.length == 0) return pre;
  for (let i=0; i < strs[0].length; i++) {
    const char = strs[0][i]
    for (let j=0; j < strs.length; j++) {
      if (strs[i][j] !== char) return pre;
    }
    pre = pre + char
  }
  return pre;
}

var mat = (nums, r, c) => {
  const total = nums.length * nums[0].length
  console.log(total); // 4

  const flatten = nums.flat()
  console.log(flatten);
  const res = []
  for (let i=0; i <r; i++) {
    const newArr = flatten.splice(0, c)
    console.log(newArr);
    res.push(newArr)
  }
  return res
}
mat([[1, 2], [3, 4]],3,2)

var threeSum = nums => {
  var target = 0;
  var res = []

  if (nums.length < 3) return res
  nums = nums.sort((a, b) => a-b)
  for (let i=0; i < nums.length -2, i++) {
    if (nums[i] > target) break;
    if (i > 0 && nums[i] === nums[i-1]) continue
    let j = i+1
    let k = nums.length-1
    while (j <k) {
      var sum = nums[i] + nums[j] + nums[k]
      if (sum === target){
        res.push([nums[i], nums[j], nums[k]])
        while (nums[j] === nums[j+1]) j++
        while (nums[k] === nums[k-1]) k--
        j++
        k--
        continue
      }
      if (sum < target) j++
      if (sum > target) k--
    }
  }
  return res
}

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var serialize = root => {
  let data = []
  function callDFS(node) {
    if (!node) {
      data.push('#')
      return
    }
    data.push(node.val)
    callDFS(node.left)
    callDFS(node.right)
  }
  callDFS(root)
  return data.join(',')
}

var deserial = data => {
  data = data.split(',')
  let index = 0
  function call() {
    const val = data[index]
    index++
    if (val === '#') return null
    const node = new TreeNode(+val)
    node.left = call()
    node.right = call()
    return node
  }
  return call
}

// serialize
let serial = root => {
  let res = []
  if (root) {
    res.push(root.val)
    res.push(...serial(root.right))
    res.push(...serial(root.left))
  } else res.push(null)
  return res;
}

let deserial = (data = []) =>{
  let val = data.shift()
  if (val == null) return null;
  let node = new TreeNode(val)
  node.left = deserial(data)
  node.right = deserial(data)
  return node
}

// using json
var serialize = root => {
  return JSON.stringify(root)
}

var deserialixe = data =>{
  let object = Json.parse(data)
  let dfs = object => {
    Object.setPrototypeOf(object, TreeNode.prototype)
    Object.values(object).forEach(v => {
      if (object != null && typeof v === 'object')
        dfs(v)
    })
  }
  return object;
}

// construct binary treee
function TreeNode(val, left, right){
  this.val = val === undefined ? 0 : val
  this.right = right === undefined ? null : right
  this.left = left === undefined ? null : left
}

let buildTree = (inorder, postorder) => {
  if (inorder.length === 0) return null;
  const inverted = {}
  for (let i=0; i< inorder.length; i++) {
    inverted[inorder[i]] = i
  }

  const helper = (instart, inend, postart, poend) =>{
    if (instart > inend || postart > poend) return null;
    const root = new TreeNode(postorder[poend])
    const idx = inverted[postorder[poend]]
    root.left = helper(instart, idx-1, postart, postart+idx - instart - 1)
    root.right = helper(idx + 1, inend, postart + idx - instart, poend - 1)
    return root;
  }
  return helper(0, inorder.length - 1, 0, postorder.legnth - 1)
}

postorder = [3,9,20,15,7]
inorder = [9,3,15,20,7]
console.log(buildTree(inorder, postorder));

// preorder bst
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0: val;
  this.right = right === undefined ? null: right;
  this.left = left === undefined ? null: left;
}

var build = (preorder, inorder) => {
  const map = new Map()
  let preidx = 0
  for (let i=0; i < inorder.length; i++) {
    map.set(inorder[i], i)
  }

  function calldfs(start, end) {
    if (end < start) return null;
    const node = new TreeNode(preorder[preidx])
    const idx = map.get(preorder[preidx])
    preidx++
    node.left = calldfs(start, idx-1)
    node.right = calldfs(idx+1, end)
    return node
  }
  return calldfs(0, inorder.length - 1)
}
preorder = [3,9,20,15,7]
inorder = [9,3,15,20,7]

console.log(build(preorder, inorder));

var revList = head => {
  let prevnode = null;
  while (head != null) {
    let nextnode = head.next;
    head.next = prevnode;
    prevnode = head;
    head = nextnode;
  }
  return prevnode
}

let list = head => {
  if (head == null || head.next == null) return
  let prevnode = list(head.next)
  head.next.next = head
  head.next = null;
  return prevnode
}

// invert binary tree
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null :  right;
}

var invert = root =>{
  if (root === null) return null;
  const left = invert(root.left)
  const right = invert(root.right)
  root.left = right;
  root.right = left;
  return root;
}

var inverted = root => {
 let stack = [root]
 while (stack.length) {
   let n = stack.pop()
   if (!n) continue
   [n.left, n.right] = [n.right, n.left]
   stack.push(n.left, n.right)
 }
 return root;
}

const targetindex = (nums, target) => {
  let ind = 0
  for (let i=0; i < nums.length; i++) {
    if (nums[i] ===  target) return i
    else if (target > nums[i]) {
      ind = i+1
      if (target < nums[i+1]) return ind
    }
  }
  return ind;
}

console.log(targetindex([1,2,3,4,5], 10));

const s = (a, b) => {
  if (a.length == 0 && b.legnth == 0) return true
  let n = a.length;
  let temp = a.split('')
  for (let i= 0; i <= n; i++) {
    temp.push(temp[0])
    temp.shift()
    console.log('temp', temp);
    if (temp.join('') == b) return true;
  }
  return false
}
console.log(s('abcde', 'ebcda'));


// serialize and deserialize

class Node {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

const serialize = root => {
  var res = []
  if (root) {
    res.push(root.val)
    res.push(...serialize(root.left))
    res.push(...serialize(root.right))
  } else res.push(null)
  return res;
}

const deser = (data = []) => {
  let val = data.shift()
  if (val == null) return null;
  let node = new Node(val)
  node.left = deser(data)
  node.right = deer(data)
  return node
}

data = [1,2,3,null,null,4,5]
console.log(deser(serialize(root)));

// longest plaindromic substr
var expand = (s, left, right) =>{
  while (left >= 0 && right < s.length && s.charAt(left) == s.charAt(right)) {
    left--
    right++;
  }
  return right - left - 1
}

const lenoflong = s => {
  var tmp = []
  var res = 0
  for (const char of s) {
    const index = tmp.indexOf(char)
    console.log('index', index);
    if (index > - 1) {
      tmp = tmp.slice(index + 1)
    }
    tmp.push(char)
    console.log('temp', tmp);
    if (tmp.length > res) res = tmp.length;
  }
  return res
}

console.log(lenoflong('abaca'));

// container with most water
let h = [1,8,6,2,5,4,8,3,7];

let maxarea = h => {
  let i=0, j = h.length - 1, max = 0, area;
  while (i < j) {
    area = (j-i) * Math.min(h[i], h[j])
    console.log(area, j, i);
    max = Math.max(area, max);
    h[i] < h[j] ? i++ : j--;
  }
  return max;
}
console.log(maxarea(h));
console.log('11' + 1, '11' - 1);

// rev int
const rev = val => {
  let res = 0;
  const base = 10;
  while(val) {
    res = res * base + (val %base)
    val = (val/base) | 0

  }
  return  (res | 0) == res ? res : 0
}

console.log(rev(1248))

let sort_color = nums => {
  let red = 0, white = 0, blue = nums.length - 1;
  while (white <= blue) {
    if (nums[white] == 0) {
      swap(red++, white--)
    } else if (nums[white] == 1) {
      white++
    } else if (nums[white] == 2) {
      swap(blue--, white)
    }
  }
  return nums

  function swap(a, b) {
    let temp = nums[a]
    nums[a] = nums[b]
    nums[b] =  temp;
  }
}

Array.prototype.insert = (index, item) => {
  this.splice(index, 0, item)
}

// let sort_color = nums => {
//   let id = -1
//   res = []
//   for (const [i, e] of nums.entries()) {
//     console.log(i, e)
//     if (e === 0) {
//       nums.splice(i, 1)
//       console.log(nums)
//     } else if (e === 1){
//       nums.splice(i, 1)
//     }
//   }
//   return res
// }

let sort_color = nums => {
  for (let i=0; i< nums.length; i++) {
    for (let j= nums.length -1; j > i; j--) {
      if (nums[i] > nums[j]) {
        let swap = nums[j]
        nums[j] = nums[i]
        nums[i] = swap
      }
    }
  }
  return nums
}

nums = [2,0,2,1,1,0]
console.log(sort_color(nums));

// part sort using insertion sort

let sort = (nums) => {
  let key, j
  for (let i=0; i < nums.length; i++) {
    key = nums[i]
    j = i-1;
    while (j >= 0 && nums[j] > key) {
      nums[j+1] = nums[j]
      j -= 1
    }
    nums[j+1] = key
  }
  return nums
}


nums = [3, 2, 6, 5, 4]
// nums =  [10, 9, 8, 7, 4, 70, 60, 50]
k=4
console.log(sort(nums, k));

// top k frequent words
var topk = (words, k) => {
  const hash = words.reduce((map, word) => {
    console.log(map, word)
    if (map.has(word)) map.set(word, map.get(word) + 1)
    else map.set(word, 1)
    return map
  }, new Map())
  console.log(hash)

  const sorted = [...hash].sort((a,b) => {
    console.log('sort', a, b);
    if (a[1] > b[1]) return -1
    if (a[1] < b[1]) return 1
    if (a[0] > b[0]) return 1
    if (a[0] < b[0]) return -1
    return 1
  })
  console.log(sorted);
  return sorted.slice(0, k).map(([x]) => x)
}

var kfreq = (words, k) => {
  let hash = {}

  for (let i=0; i<words.length; i++) {
    let temp = (hash[words[i]] ? hash[words[i]] : 0) + 1
    hash[words[i]] = temp
    console.log(temp);
  }

  let res = Object.keys(hash).sort((next, prev) => {
    console.log(hash[next], hash[prev])
    if (hash[prev] - hash[next] == 0) {
      return next.localeCompare(prev)
    } else return hash[prev] - hash[next]
  })
  console.log(res);
}

var nums = ["daily", "interview", "pro", "pro",
"for", "daily", "pro", "problems"], k = 2

console.log(kfreq(nums, k));



class Trie {
  constructor() {
    this.trie = null;
    this.isword = []
  }

  newNode() {
    return {
      isLeaf: false,
      child: {}
    }
  }

  build(word) {
    if (!this.trie) this.trie = this.newNode()
    let root = this.trie;
    for (const char of word) {
      if (!char in root.child) {
        root.child[char] = this.newNode()
      }
      root = root.child[char]
    }
    root.isLeaf = true
  }

  find(word) {
    let root = this.trie;
    for (const char of word) {
      if (char in root.child) {
        root = root.child[char];
      } else return null;
    }
    return root
  }

  traverse(root, word) {
    if (root.isLeaf) {
      this.isword.push(word)
      return;
    }
    for(const char in root.child) {
      this.traverse(root.child[char])
    }
  }

  complete(word, child=null) {
    const root = this.find(word)
    if (!root) return this.isword;
    const children = root.child
    let spread = 0;
    for (const char in children) {
      this.traverse(children[char])
      spread++
      if (child && spread === child) break;
    }
    return this.isword;
  }
}

let sol = new Trie()
sol.build(['dog', 'dark', 'cat', 'door', 'dodge', 'car', 'apple', 'mobile', 'phone', 'smart phone', 'pc', 'graphic card']);
console.log(sol.find(complete('ca')))

// uniq num
let single = nums => {
  let set = new Set()
  for (num of nums) {
    if (set.has(num)) set.delete(num)
    else set.add(num)
  }
  return Array.from(set)[0]
}

var singular = nums => {
  nums.sort()
  for (let i= nums.length-1; i>= 0; i--) {
    if (nums[i] === nums[i-1]) {
      console.log(nums[i], nums[i-1]);
      nums.splice(i-1, 2)
    }
  }
  return nums[0]
}

arr = [7, 3, 5, 5, 4, 3, 4, 8, 8]
console.log(singular(arr));


class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
var iscous = (root, x, y) => {
  let xpar, ypar = null;
  let xdep, ydep = 0;

  depthoftree(root, x, y, 0, null)
  if(xdep == ydep && xpar !== ypar) return true
}

function depthoftree(root,x, y, depth, prev) {
  if (root == null) return;
  if (root.val == x) {
    xpar = prev
    xdep = depth
  }
  if (root.val == y) {
    ypar = prev;
    ydep = depth;
  }
  depth++
  prev = root
  depthoftree(root.left, x, y, depth, prev)
  depthoftree(root.right, x, y, depth, prev)
}

// clone tree
function Node(val) {
  this.val = val;
  this.left = this.right = null;
}

var clone = (ori, clone, tar) => {
  if (!ori || !clone) return
  if (ori.val === tar.val) return clone;
  else return clone(ori.left, tar.left, tar)
}

// compare version number

var compare = (v1, v2) => {
  let a = v1.split('.')
  let b = v2.split('.')

  for (let i=0; i< a.length || i < b.length; i++) {
    let first = i < a.length ? parseInt(a[i], 10) : 0;
    let second = i < b.length ? parseInt(b[i], 10) : 0;
    console.log(first, second);
    if (first  < second) return -1
    if (first > second) return 1
  }
  return 0;
}

let v1 = '1.2.3'
let v2 = '1.2.3.1'
console.log(compare(v1, v2));

// climb stairs
var climbe = n =>{
  if (n==1) return 1
  let dp = [n]
  dp[1] = 1
  dp[2] = 2
  for (let i=3; i<= n; i++) {
    dp[i] = dp[i-1] + dp[i-2]
  }
  console.log(dp)
  return dp[n]
}

let climbst = n => {
  let memo = []
  return climb(0, n, memo)
}

let climb = (i, n, memo) => {
  if (i > n) return 0;
  if (i==n) return 1;
  if (memo[i] > 0) return memo[i]
  memo[i] = climb(i+1, n, memo) + climb(i+2, n, memo)
  return memo[i]
}
console.log(climbe(25));

let matrix = [[1,  2,  3,  4,  5],
             [6,  7,  8,  9,  10],
             [11, 12, 13, 14, 15],
             [16, 17, 18, 19, 20]]
var spiralGrid = (matrix) => {
  if(matrix.length === 0 || matrix.length[0] === 0) return []
  let res = []

  res = res.concat(matrix.shift())

  for (let i=0; i<matrix.length-1; i++){
    res.push(matrix[i].pop())
  }

  const lastrow = matrix.pop()
  if (lastrow) res = res.concat(lastrow.reverse())
  for (let i=matrix.legnth -1; i>= 0; i--) {
    if (matrix[i].length) res.push(matrix[i].shift())
  }
  return res.concat(spiralGrid(matrix))
}
console.log(spiralGrid(matrix))

const isSorted = (words, order) => {
  for (let i=0; i<words.length; i++) {
    let word1 = words[i]
    let word2 = words[i+1]
    if (!isRightOrder(word1, word2, order)) return false;
  }
  return true
}

const isRightOrder = (word1, word2, order) =>{
  let length = word1.length > word2.length ? word1.length : word2.length;
  for (let i=0; i<length; i++) {
    let ind1 = order.indexOf(word1)
    let ind2 = order.indexOf(word2)
    if (ind1 < ind2) return true
    if (ind1 > ind2) return false
  }
  return true
}

console.log(isSorted(['zyx', 'zyxw', 'zyxw'], "zyxwvutsrqponmlkjihgfedcba"))

let maxim = (root) => {
  let max= -Infinity
  note(root)
  return max
  function note(root) {
    if (!node) return 0;

    let left = Math.max(note(root.left), 0)
    let right = Math.max(note(root.right), 0)
    let cur = right + root.val +left
    if (cur > max) max = cur
    return node.val + Math.max(left, right)
  }
}

// longest consec seq
let longest = nums =>{
  if (nums.length === 0) return 0
  nums.sort((a,b) => a-b)
  let longestStreak = 1
  let curStreak = 1
  for(let i =1; i<nums.length; i++) {
    if (nums[i] !== nums[i-1]) {
      if (nums[i] == nums[i-1]+1){
        curStreak+= 1
      } else {
        longestStreak = Math.max(longestStreak, curStreak)
        curStreak = 1
      }
    }
  }
  return Math.max(longestStreak, curStreak)
}
nums = [100, 4, 200, 1, 3, 2]
console.log(longest(nums));

// meeting rooms
var meetingRooms = interval =>{
  let start = [], end = []
  intervals.forEach(i =>{
    start.push(i.start);
    end.push(i.end);
  })
  start.sort((a,b) => a-b)
  end.sort((a,b) => a-b)
  let rooms = 0
  let endpoint = 0
  for (let i=0; i<interval.length; i++) {
    if (start[i] < end[endpoint]) rooms++
    else endpoint++
  }
  return rooms
}
intervals = [
  { start: 0, end: 30 },
  { start: 5, end: 10 },
  { start: 15, end: 20 },
];
console.log(meetingRooms(intervals));

// Jump indexes
let jump = nums => {
  if (nums.length === 1) return 0;

  let reachidx = 0, previdx = 0, jump = 0;
  for (let i=0; i<nums.length; i++) {
    if (i + nums[i] >= reachidx) {
      reachidx = i+nums[i]
    }
    if (i === previdx) {
      jump += 1
      previdx = reachidx
      if (previdx >= nums.length -1) break;
    }
  }
  return jump
}

console.log(jump([3, 2, 5, 1, 1, 9, 3, 4]));

// Find str in str()

var strstr = (haystack, needle) => {
  if ((!haystack && !needle)|| (haystack && !needle)) return 0
  let idx = haystack.indexOf(needle)
  return idx
}

haystack = "", needle = "ll"
console.log(strstr(haystack, needle));

let invertTree = root => {
  if (!root) return null;
  let left = invertTree(root.left)
  let right = invertTree(root.right)
  root.left = right
  root.right = left
  return root
}

let invertTree = root => {
  let stack = [root]
  while (stack.legnth) {
    let n = stack.pop()
    if (!n) continue;
    [n.left, n.right] = [n.right, n.left]
    stack.push(n.left, n.right)
  }
  return root
}

let maxPath = root => {
  let max = -Infinity
  note(root)
  return max
  function note(node) {
    if (!node) return null;
    let right = Math.max(note(node.right), 0)
    let left = Math.max(note(root.left), 0)
    let currmax = node.val + right + left
    if (currmax > max) max = currmax
    return Math.max(left, right) + node.val
  }
}

const twoSum = (nums, k) => {
  let sums  = []
  for (let i=0; i<nums.length; i++) {
    for (let j=i+1; j<nums.length; j++) {
      if (nums[i] + nums[j] === k){
        sums.push(i)
        sums.push(j)
      }
    }
  }
  return sums
}

console.log(twoSum([1,2,7,8], 10));

// tic tac toe
const tictac = n => {
  let rows = [n], cols = [n], diag = 0, xdiag = 0
  function move(row, col, player) {
    let count = player == 1? 1 : -1;
    rows[row] += count
    cols[col] += count

    if (row == col) diag += count
    if (row + col == n- 1) xdiag += count
    if (Math.abs(rows[row] == n) || Math.abs(cols[col] == n) || Math.abs(diag) == n || Math.abs(xdiag) == n) {
      return count > 0 ? 1 :  2
    }
    return 0
  }
}

// sort colors
let sortColors = nums => {
  let n = nums.length;
  for (let i=0; i<n; i++) {
    for (let j = n-1; j> i; j--) {
      if (nums[i] > nums[j]) {
        let swap = nums[j]
        nums[j] = nums[i]
        nums[i] = swap
      }
    }
  }
  return nums
}

nums = [2,0,2,1,1,0]
console.log(sortColors(nums));

// top k ele
var topK = (words, k) => {
  let hash = {}
  for (let i=0; i<words.length; i++) {
    let temp = (hash[words[i]] ? hash[words[i]] : 0 + 1)
    hash[words[i]]  = temp
  }

  let res = Object.keys(hash).sort((next, pre) => {
    if (hash[pre] - hash[next] == 0) {
      return next.localeCompare(pre)
    } else return hash[pre] - hash[next]
  })
  return res.slice(0, k)
}
console.log(topK(["daily", "interview", "pro", "pro",
"for", "daily", "pro", "problems"], 2));

var isPalindrome = str => {
  let left = 0, right = str.length -1;
  while (right > 1) {
    if (str[left++] !== str[right--]) {
      return 'Is not palindrome: ' + str
    }
  }
  return true
}

console.log(isPalindrome('oppo'));

// steps
var climb = n => {
  if(n ==1 ) return 1
  let dp= [n+1]
  dp[1] = 1
  dp[2] = 2
  for (let i=3; i<=n;i++) {
    dp[i] = dp[i-1] + dp[i-2]
  }
  return dp[n]
}

console.log(climb(4));

let plusOne = nums => {
  for (let i= nums.length -1; i>=0; i--) {
    if (nums[i] !== 9) {
      nums[i]++
      return nums
    } else {
      nums[i] = 0
    }
  }
  nums.unshift(1)
  return nums
}

console.log(plusOne([9, 9, 8, 9]));

let addnums = (l1, l2) => {
  let res = new ListNode(0)
  let carry = 0
  let currnode = res

  while (l1 !== null || l2 !== null) {
    let v1 = 0, v2 = 0;
    if (l1 !== null) v1 = l1.val;
    if (l2 !== null)  v2 = l2.val;
    let sum = v1 + v2 + carry
    carry = Math.floor(sum /10)
    sum = sum % 10

    currnode.next = new Listnode(sum)
    currnode = currnode.next;
    if (l1 !== null) l1 = l1.next
    if (l2 !== null) l2 = l2.next;

  }
  if (carry > 0) {
    currnode.next = new Listnode(carry)
  }
  return res.next
}

var rev = head => {
  let prev = null
  while (head.next !== null) {
    nextnode = head.next
    head.next = prev
    prev = head
    head = nextnode
  }
  return prev
}

const revlist = head =>  {
  if(head == null || head.next == null) return head;
  let prev = revlist(head.next)
  head.next.next = head;
  head.next = null
  return prev
}

// rotate LL
class Node {
  constructor(val, next) {
    this.val = val
    this.next = next
  }

  rotate(head, k) {
    if (!head || !head.next || k == 0) return head;
    let tail = head;
    let count = 1
    while (tail.next) {
      tail = tail.next;
      count++
    }
    k = k % count
    if(k == 0) return head;
    tail.next = head
    let breakat = 1
    pointer = head
    while (breakat !== count - k) {
      pointer = pointer.next
      breakat++
    }
    head = pointer.next
    pointer.next = None
    return head
  }
}

// delete duplicate
var del = head => {
  let node = new ListNode(-1)
  let ans = node, pre = head, cur = head;
  while (cur) {
    while (cur.next && cur.val == cur.next.val) cur = cur.next;
    if (pre == cur) {
      ans.next = cur
      ans = ans.next
    }
    pre = cur = cur.next;
  }
  ans.next = null
  return node.next
}

var dele = head => {
  if (!head) return null
  let pre = new ListNode(0)
  let node = pre
  pre.next = head;
  while(node.next && node.next.next) {
    if (node.next.val === node.next.next.val) {
      let val = node.next.val;
      while (node.next && node.next.val === val) {
        node.next = node.next.next
      }
    } else node = node.next
  }
  return pre.next
}

let getIslandcount = function (grid, i, j) {
  if (i<0 || i >= grid.length || j >= grid[i].length) return 0;
  grid[i][j] = '0'
  getIslandcount(grid, i+1, j)
  getIslandcount(grid, i, j+1)
  getIslandcount(grid, i-1, j)
  getIslandcount(grid, i, j-1)
  return 1;
}

const numberOfIslands = grid => {
  if (grid === null || grid.length === 0) return 0;
  let islands= 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
        if (grid[i][j] === '1') {
            islands += getIslandcount(grid, i, j);
        }
    }
}
  return islands
}

grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
console.log(numberOfIslands(grid));

// get Intersectio in node:.
let getIntersactionNode = (headA, headB) => {
  if (headA === null || headB === null) return null;
  let p1 = headA, p2 = headB;
  while (p1 !== p2) {
    p1 = p1.next;
    p2 = p2.next
    if (p1 === p2) return p1
    if (p1 === null) p1 = headB;
    if (p2 === null) p2 = headA;
  }
  return p1
}

// JUmp
function jump(nums) {
  if (nums.length == 1) return 0;
  let jumps = 0, maxreach = nums[0], steps = nums[0]
  for (let i=1; i<nums.length-1; i++) {
    maxreach = Math.max(maxreach, i + nums[i])
    console.log(maxreach, 'max');
    steps--
    console.log('step', steps);
    if (steps == 0) {
      jumps++
      steps = maxreach - i
    }
    console.log(jumps);
  }
  return jumps + 1
}
console.log(jump([3, 2, 5, 1, 1, 9, 3, 4]));

const kthLargest = (nums, k) => {
  function mergeSort(arr) {
    if (arr.length === 0 || arr.length === 1) return arr;
    const mid = Math.floor(arr.length /2)
    const left = mergeSort(arr.slice(0, mid))
    const right = mergeSort(arr.slice(mid))
    let res = [], l = 0, r = 0;
    while (l <left.length && r < right.length) {
      if (left[l] < right[r]) {
        res.push(left[l])
        l++
      } else {
        res.push(right[r])
        r++
      }
    }
    res = res.concat(left.slice(l), right.slice(r))
    return res
  }
  return mergeSort(nums)[k-1]
}

let balance = s => {
  let ans = 0, bal = 0;
  for (let i=0; i<s.length; i++) {
    bal += s.charAt(i) == '(' ? 1: -1;
    if (bal == -1) {
      ans++
      bal++
    }
    return ans + bal;
  }
}

console.log(balance('(()()'));

const mergeList = (l1, l2) =>{
  if (!l1 || !l2) return l1 || l2
  if (l1.val > l2.val) [l1, l2] = [l2, l1]
  l1.next = mergeList(l1.next, l2)
  return l1 || l2
}
let l1 = [1, 2, 4];
let l2 = [1, 3, 4];
console.log(mergeList(l1, l2));

const meeting = interval => {
  let st = [], end = []
  interval.forEach(interval => {
    st.push(interval.st)
    end.push(interval.end)
  })
  st.sort((a,b) => a-b)
  end.sort((a,b) => a -b)
  let rooms = 0, endpoint = 0;
  for (let i=0; i<interval.length; i++) {
    if (st[i] < end[endpoint]) rooms++;
    else endpoint++
  }
  return rooms
}
intervals = [
  { start: 0, end: 30 },
  { start: 5, end: 10 },
  { start: 15, end: 20 },
];
console.log(meeting(intervals));

let missing = nums => {
  let n=1
  while (nums.indexOf(n) >= 0) n++
  return n
}

const bstcousin = (root, x, y) => {
  let xp = null, yp = null, xd = 0, yd =0
  depthoftree(root, x, y, 0, null)
  if (xd == yd && xp !== yp) return true
}
function depthOfTree(root, x, y, depth, prev) {
  if (root == null) return null;
  if (root.val == x) {
    xp = prev
    xd = depth
  }
  if (root.val == y) {
    yp = prev
    yd = depth
  }
  depth++
  prev = root
  depthoftree(root.left, x, y, depth, prev)
  depthoftree(root.right, x,y, depth, prev)
}

const minmax = arr => {
  if (arr.length  < 1 || arr === null) return null
  let min, max
  if (arr.length == 1) {
    max  = arr[0]
    min = arr[0]
    return min, max
  }
  if (arr[0] > arr[1]) {
    max = arr[0]
    min = arr[1]
  } else {
    max = arr[0]
    min = arr[1]
  }
  for(let i=0; i<= arr.length -1 ; i++) {
    if (max < arr[i]) max = arr[i]
    else if (min > arr[i]) min = arr[i]
  }
  return [min, max]
}

console.log(minmax([-1,3, 5, 1, 2, 4, 8, 9]));

const convert = n => {
  let alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let m, res = []
  while (n > 0) {
    m= (n-1) % 26
    console.log(m, 'M');
    n = (n-1-m) / 26
    console.log(n, 'N', 'alp', alpha[m]);
    res.unshift(alpha[m])
  }
  return res
}
console.log(convert(27));

const searchRange = (nums, target) => {
  let res = []
  res.push(nums.indexOf(target))
  res.push(nums.lastIndexOf(target))
  return res
}

const searchIndex = (nums, target) => {
  let low = 0, high = nums.length - 1, mid, right = -1, left = -1;
  while (low <= high) {
    mid = Math.floor((low + high)/2)
    if(nums[mid] === target) {
      left = mid
      high = mid - 1
    } else if (nums[mid] > target) {
      high= mid -1
    } else low = mid + 1
  }
low = 0, high = nums.length - 1
  while (low <= high) {
    mid = Math.floor((low + high)/2)
    if (nums[mid] ===  target) {
      right = mid
      low = mid + 1
    } else if (nums[mid] >  target) {
      high = mid - 1
    } else low = mid + 1
  }
  return [left, right]
}
let nums = [5, 7, 7, 8, 8, 10];
let target = 8;
console.log(searchIndex(nums, target));

const transpose = (matrix) => {
  let rows = matrix.length, cols = matrix[0].length;
  let res = Array(cols).fill(0)
  for (let i=0; i<res.length; i++) {
    res[i] = Array(rows).fill(0)
  }
  for (let i=0; i<rows; i++) {
    for (let j=0; j< cols; j++) {
      res[j][i] = matrix[i][j]
    }
  }
  return res
}

const transFormMatrix = matrix =>{
  let res = []
  for (let i=0; i<matrix.length; i++) {
    for (let j=0; j<matrix[0].length; j++) {
      res[j] = res[j] || []
      console.log(res[j]);
      res[j][i] = matrix[i][j]
    }
  }
  return res
}
mat = [
  [1, 2, 3],
  [4, 5, 6],
]
console.log(trans(mat));

const threesum = nums => {
  let target = 0, res = []
  if (nums.length < 3) return res
  nums = nums.sort((a,b) => a - b)

  for (let i=0; i<nums.length - 2; i++) {
    if (nums[i] >  target) break;
    if (i>0 && nums[i] === nums[i+1]) continue;
    let j = i+1;
    let k = nums.length -1;
    while(j < k) {
      let sum = nums[i] + nums[j] + nums[k]
      if (sum === target) {
        res.push(nums[i], nums[j], nums[k])
        while(nums[j] === nums[j+1]) j++
        while (nums[k] === nums[k-1]) k--

        j++
        k--
        continue
      }
      if (sum < target) j++
      if (sum > target) k--
    }
  }
  return res
}

// autocomplete in JS
let data = ['cat', 'dog', 'cow', 'copy', 'apple']

function matchData(input) {
  let reg = new RegExp(input.split('').join('\\w*').replace(/\w/, ''), 'i')
  return data.filter(item => {
    if (item.match(reg)) return item
  })
}
function changeInput(val) {
  let autocomplete = matchData(val)
  return autocomplete
}
console.log(changeInput('do'));

let countPrime = n => {
  let prime = new Array(n+1).fill(1)
  let count = 0;
  for (let i=2; i<n;i++) {
    if (prime[i] === 1)count++;
    for (let j=i*i; j <=n; j+= i) {
      prime[j] = 0
    }
  }
  return count
}
console.log(countPrime(10));

const a = [1,2,3]
a[100] = 'foo';
console.log(a.length);

const foot = {
  name: 'abc'
}
delete foot.name

console.log('i');
setTimeout(() => {
  console.log('love')
},0)
console.log('Jaa');

const foo = {
  bar() {
    console.log('a');
  },
  name: 'l',
  age: 24

}
console.log(foo);

class X{
  get y() {return 42}
}
var x = new X()

console.log(x.get().y());

var v = 1
var f1 = function() {
  console.log(v);
}
var f2 = function() {
  var v = 2;
  f1()
}
console.log(f2());

var obj
console.log(obj);

function fractionTodec(nume, deno) {
  if (nume === 0) return '0'
  let s = ''
  if (Math.sign(nume) !== Math.sign(deno)) s+= '-'
  let n = Math.abs(nume)
  const d = Math.abs(deno)
  s += Math.floor(n/d)
  s %= d
  if (n == 0) return s
  s += '.'
  const map = {}
  while (n != 0) {
    map[n] = s.length;
    n *= 10
    s += Math.floor(n/d)
    n %= d

    const i = map[n]
    if (i !== null) return `${s.slice(0, i)}(${s.slice(i)})`
  }
  return s
}
console.log(fractionTodec(1242, 12));

function fixpoint(arr, low, high) {
  let mid
  if (high >= low) {
    mid = Math.floor((low+high)/2)
  }
  if (mid === arr[mid]) {
    return mid
  }
  if (mid > arr[mid]) {
    return fixpoint(arr, mid + 1, high)
  }
  else {
    return fixpoint(arr, low, mid-1)
  }

  // return -1
}
arr = [-10, -1, 0, 3, 10, 11, 30, 50, 100]
n = arr.length;
console.log(fixpoint(arr, 0, n-1));

const invertBst = root => {
  if (root === null) return null;
  const left = invertBst(root.left)
  const right = invertBst(root.right)
  root.left = right
  root.right = left
  return root;
}

const invert = root => {
  let stack = [root]
  while (stack.length) {
    let n = stack.pop()
    if (!n) continue;
    [n.left, n.right] = [n.right, n.left]
    stack.push(n.left, n.right)
  }
  return root
}

const ine = root =>{
  if (!root) return null;
  [root.left, root.right] = [ine(root.right), ine(root.left)]
  return root
}

function maxNonAdjacentSum(nums) {
  let incl = 0, excl=0;
  for (let i=0; i< nums.length; i++) {
    console.log(i);
    let res = excl ? excl > incl : incl;
    incl = excl + i;
    excl = res
  }
  console.log(excl, incl);
  return excl ? excl > incl : incl
}

console.log(maxNonAdjacentSum([2, 1, 2, 7, 3]));

const genPar = n => {
  let res= []

  function back(p, l, r) {
    if (l === 0 || r === 0) {
      res.push(p)
      return
    }
    if (l < 0) back(p + '(', l-1, r)
    if (r > 0) back(p+')', l, r+1)
  }
  back('', n, n)
  return res
}
console.log(genPar(3));

const setZero = matrix =>{
  let m = matrix.length;
  let n = matrix[0].length;
  let row = new Set()
  let col = new Set()

  for (let i=0; i<m; i++) {
    for(let j=0; j <n; j++) {
      if (matrix[i][j] === 0) {
        row.add(i)
        col.add(j)
      }
    }
  }

  for (let i=0; i<m; i++){
    for (let j=0; j<n; j++) {
      if (row.has(i) || col.has(j)) {
        matrix[i][j] = 0
      }
    }
  }
}

const maxpath = root => {
  let max = -Infinity
  note(root)
  return max

  function note(node) {
    if (node === null) return 0;
    let left = Math.max(note(node.left), 0)
    let right = Math.max(note(node.right), 0)
    let cur = right + left + node.val
    if (cur > max) max = cur
    return node.val + Math.max(left, right)
  }
}

const reverse = head => {
  let pre = null
  while (head !== null) {
    let next = head.next
    head.next = pre
    pre = head
    head = next
  }
}
const ispa = head => {
  let fast = head, slow= head
  while (fast !== null && fast.next !== null) {
    slow = slow.next
    fast = fast.next.next
  }
  fast = head
  slow = reverse(slow)

  while (slow !== null) {
    if (slow.val !== fast.val) return false
    slow= slow.next
    fast = fast.next
  }
  return true
}

const maxEle = nums => {
  let maxcount = 0, ind = -1, count = 0;
  for (let i=0; i<nums.length; i++) {
    for (let j=1; j <nums.length; j++) {
      if (nums[i] === nums[j]) count++
      if (count > maxcount) {
        maxcount = count
        ind = i
      }
    }
  }
  if (maxcount > Math.floor(nums.length /2)) {
    return nums[ind]
  }
}

nums = [1, 1, 2, 1, 3, 5, 1]
console.log(maxEle(nums));

function size(root) {
  if (root === null) return 0;
  return size(root.left) + 1 + size(root.right)
}

function isbst(node, min, max) {
  if (node == null) return true;
  if (node.val < min || node.val > max) return false;
  return isbst(node.left, min, node.val) && isbst(node.right, node.val, max)
}

function findLargestBst(root) {
  if (isbst(root, parseFloat(-Infinity), parseFloat(-Infinity))) {
    return size(root)
  }
}

function checkPal(str){
  let left = 0, right = str.length -1;
  while (right > 1) {
    if (str[left++] !== str[right--]){
      return str + " is not palindrome"
    }
  }
  return str
}
console.log(checkPal('oppo'));

function findNode(a,b,node) {
  let ans
  const inorder = (o, c) => {
    if (o) {
      inorder(o.left, c.right)
      if (o === node) ans = c
      inorder(o.right, c.right)
    }
  }
  inorder(a, b)
  return ans
}

const findConcat = words => {
  const set = new Set(words)

  const helper = (word, num = 0) => {
    if (!word) return num > 1;
    let temp = ''
    for (let i=0; i<words.length; i++) {
      temp += word[i]
      if (set.has(temp)) {
        let sub = word.substr(i+1)
        if (helper(sub, num+1)) return true
      }
    }
    return false
  }
  const ans = []
  words.forEach(w => {
    if (helper(w)) ans.push(w)
  })
  return ans
}

const swapNode = head => {
  return pairs(head)
  function pairs(node) {
    if (!node) return null;
    let nextnode = node.next
    if (nextnode) {
      node.next = pairs(nextnode.next)
      nextnode.next = node
    }
    return nextnode ? nextnode : node
  }
}


const uniqpaths = (m,n) => {
  let grid = []
  for (let i=0; i<n; i++) {
    grid.push([])
    for(let j=0; j<m; j++) {
      if (i===0 || j ===0) grid[i][j] = 1
      else grid[i][j] = grid[i-1][j] + grid[i][j-1]
    }
  }
  return grid[n-1][m-1]
}

console.log(uniqpaths(3, 2));

function mem(n) {
  let memo = new Array(n+1).fill(null)
  return fibonacci(n, memo)
}
function fibonacci(n, memo) {
  let res
  if (memo[n] !== null) return memo[n]
  if (n==1 || n==2) res = 1
  else res = fibonacci(n-1, memo) + fibonacci(n-1, memo)
  memo[n] = res
  return res
}

console.log(mem(6));

class Node {
  constructor(val, left, right) {
    this.val = val
    this.left = left
    this.right = right
  }
}

var flatbst = root => {
  return getFlatten(root)
}
function getFlatten(root ) {
  if (root == null) return
  let left = root.left;
  let right = root.right;

  root.left = null;
  getFlatten(left)
  getFlatten(right)

  root.right = left;
  let current = root
  while (current.right !== null) current = current.right
  current.right = right
}

function witness(height) {
  maxheight = -Infinity;
  total = 0;
  for (let i=0; i< height.length -1; i++) {
    if (height[i] > maxheight) total++
    maxheight = Math.max(height[i], maxheight)
  }
  return total
}

console.log(witness([3,6,3,4,1]))

function convert(s, rows) {
  return zigzagString(s, rows)
}

function zigzagString(s, rows) {
  if (s.length == 0 || rows == 1) return s;
  var arr = new Array(rows)
  for (let i=0; i<rows; i++) arr[i] = [];

  // console.log(arr);
  let row = 0, down;
  for (let i=0; i<s.length; i++) {
    var curr = s[i]
    if (curr !== '') arr[row].push(s[i])
    if (row == rows-1) down = false
    else if (row == 0) down = true
    down ? row++ : row--
    // console.log(arr);
  }
  return [].concat.apply([], arr).join('')
}

console.log(convert('PAYPALISHIRING', 3));

function missingnumber(nums) {
  let len = nums.length;
  if (!len) return 0;
  let sum = len * ((len+1) /2)
  let arrsum = nums.reduce((a, b) => {
    return a + b
  })
  console.log(arrsum, sum);
  return sum - arrsum
}

console.log(missingnumber([1,2,3,4,6]));

var addStrings = function(num1, num2) {
    var res = []
    let i = num1.length -1
    let j = num2.length - 1
    let carry = 0;

    whilre (i >= 0 || j >= 0) {
      let sum = carry;
      if (i>= 0) {
        sum += num1.charAt(i--) - '0'
      }
      if (j>= 0) {
        sum += num1.charAt(j--) - '0'
      }

      res.push(sum % 10)
      carry = sum / 10
    }
    if (carry !== 0) {
      res.push(carry)
    }
    return res.split('').reverse().toString()
};

function lcs(str) {
  let pre = ''
  if (str.length === 0) return pre
  for (let i=0; i<str[0].length;i++) {
    const char = str[0][i]
    for (let j=0; j <str.length; j++) {
      if (str[j][i] !== char) return pre
    }
    pre = pre + char
  }
  return pre
}

function long(s) {
  let res = 0, temp = []
  for (const char of s) {
    let idx = temp.indexOf(char)
    if (idx > -1) {
      temp = temp.slice(idx + 1)
      console.log(temp);
    }
    temp.push(char)
    if (temp.length > res) res = temp.length;
  }
  return res
}
console.log(long("abcabcbb"));

function maxWater(height) {
  let i=0; j = height.length -1, max = 0;
  let area
  while (i < j) {
    area = (j-i) * Math.min(height[i], height[j])
    max = Math.max(area, max)
    height[i] < height[j] ? i++ : j--;
  }
  return max
}
console.log(maxWater([1, 8, 6, 2, 5, 4, 8, 3, 7]));

// repeated dna
var findRepeatedDnaSequences = function(s) {
    var repeated = []
    var seen = new Map()
    let i = 0;
    while(i+10 <= s.length) {
      let subseq = s.substring(i, i++ + 10)
      seen.set(subseq, seen.get(seen, 0) + 1)
      if (seen.get(subseq) == 2) {
        repeated.push(subseq)
      }
    }
    return repeated
};

const median = (num1, num2) => {
  let num = [...num1, num2].sort((a, b) => a-b);
  let n= num.length, ans;
  if (n % 2 === 0) {
    n /= 2
    ans = (num[n-1] + num[n]) /2
  } else ans =  num[Math.floor(n/2)]
  return ans
}

const checkpal = str => {
  var left = 0, right = str.length -1;
  while (right > 1) {
    if (str[left++] !== str[right--]){
      return console.log("Not palindrome")
    }
  }
  return str
}

const balanceStr = s => {
  var bal = 0, count = 0
  for (let i=0; i<s.length; i++) {
    let cur = s.charAt(i)
    if (cur == 'L') count++
    else if(cur == 'R') count--
    if (count === 0) bal++
  }
  return bal;
}

var findpath = root => {
  let paths = [];
  if (root === null) return paths;
  dfs(root, '', paths)
  return paths
}
function dfs(root, path, paths) {
  path += root.val
  if (root.left === null && root.right === null) {
    paths.push(path)
    return;
  }
  if (root.left !== null) {
    dfs(root.left, path + '->', paths)
  }
  if (root.right !== null) {
    dfs(root.right, path+'->', paths)
  }
}

const cli = n => {
  if (n==1) return 1;
  let dp = [n+1]
  dp[1] = 1
  dp[2] = 2
  for(let i=3; i<=n; i++) {
    dp[i] = dp[i-1] + dp[i-2]
  }
  return dp[n]
}

var intersectNode = (headA, headB) =>{
  let hash = []
  while (headA !== null) {
    hash.push(headA)
    head = headA.next
  }
  while (headB !== null) {
    if (hash.includes(headB)) {
      return headB
    }
    headB = headB.next
  }
  return null
}

const levelorder = root => {
  let result = []
  if (root === null) return result;
  let queue = []
  queue.push(root)
  while (queue.length > 0) {
    let row = []
    let rowsize = queue.length;
    while (rowsize > 0) {
      let currentNode = queue.shift()
      if (currentNode.left !== null) {
        queue.push(currentNode.left)
      }
      if (currentNode.right !== null) {
        queue.push(currentNode.right)
      }
      row.push(currentNode.val)
      rowsize--
    }
    result.push(row)
  }
  return res
}

var plusOne = digits => {
  for(let i=digits.length-1; i>=0; i--) {
    if (digits[i] !== 9) {
      digits[i]++
      return digits
    } else digits[i] = 0
  }
  digits.unshift(1)
  return digits
}
console.log(plusOne([9,9,9]))

const bottomup = n => {
  let res
  if (n==1 || n == 2) res = 1
  let bottomup = new Array(n+1)
  bottomup[1] = 1
  bottomup[2] = 1
  for (let i=3; i<n+1; i++) {
    bottomup[i] = bottomup[i-1] + bottomup[i-2]
  }
  return bottomup[n]
}

console.log(bottomup(10))

const euclidian = ([x, y]) => x**2 + y**2
function kClosest(points, k) {
  let pq = new MaxPriorityQueue()
  for (let i of points) {
    let dist = euclidian(point)
    if (pq.size() < k){
      pq.enqueue(point, dist)
    } else if (dist < pq.front().priority) {
      pq.dequeue()
      pq.enqueue(point, dist)
    }
  }
  return pq.toArray().map(el => el.element)

}
console.log(kClosest([[1, 3], [-2, 2]], 1))

function checkpal(s, start, end) {
  while(start < end) {
    if (s[start] !== s[end]) return false;
    start++
    end--
  }
  return true
}
function validPal(s) {
  let start = 0, end = s.length -1;
  while (start < end) {
    if (s[start] !== s[end]) {
      return checkpal(s, start, end-1) || checkpal(s, start+1, end)
    }
    start++
    end--
  }
  return true
}

console.log(validPal('abbda'));

const iscous = (root, x, y) => {
  let xpar = null, ypar = null, xd = 0, yd = 0;
  depthOfTree(root, x, y, 0, null)
  if (xd === yd && xpar !== ypar) return true;
}
function depthOfTree(root, x, y, depth, prev){
  if (root == null) return null;
  if (root.val == x) {
    xpar = prev;
    xd = depth;
  }
  if (root.val == y) {
    yd = depth;
    ypar = prev
  }
  depth++
  prev = root;
  depthOfTree(root.left, x, y, depth, prev)
  depthOfTree(root.right, x, y, depth, prev)
}

const mergelist = (l1, l2) => {
  if (!l1 || !l2) return l1 || l2
  if (l1.val > l2.val) {
    [l1, l2] = [l2, l1]
  }
  l1.next = mergeList(l1.next, l2)
  return l1 || l2
}

var rev = s => {
  if (s.length == 1) return s;
  let temp
  for (let i=0, j=s.length-1; i<s.length/2; i++, j--) {
    temp = s[i]
    s[i] = s[j]
    s[j] = temp
  }
}

function logestPref(str) {
  let pref = ''
  if (str.length == 0) return pref;
  for (let i=0; i<str[0].length; i++) {
    const char = str[0][i]
    for (let j=0; j<str.length; j++) {
      if (str[j][i] !== char) return pref
    }
    pref = pref + char
  }
  return pref
}

function logestStr(s) {
  let res = 0, temp = []
  for (let char of s) {
    const idx = temp.indexOf(char)
    if (idx > -1) {
      temp = temp.slice(idx + 1)
    }
    temp.push(char)
    if (temp.length > res) res = temp.length;
  }
  return res
}

const expand = (s,left, right) => {
  while (left >= 0 && right <s.length && s.charAt(left) == s.charAt(right)){
    left--
    right++
  }
  return right - left - 1;
}
const longeststr = s => {
  let start = 0, maxlen = 0
  if (s == null || s.length < 1 || s === undefined) return ''
  for (let i=0; i < s.length; i++) {
    let l1 = expand(s, i, i)
    let l2 = expand(s, i, i+1)
    let len = Math.max(l1, l2)

    if (len > maxlen) {
      maxlen = len;
      start = i - Math.floor((len-1) /2)
    }
  }
  return str.substr(start, maxlen)
}

var addstring = (num1, num2) => {
  let ans = '', carry = 0, substr = 1;
  const long = Math.max(num1.length, num2.length)
  while (substr <= long) {
    let n1 = (substr > num1.length) ? 0 : Number(num1[num1.length] - substr)
    let n2 = (substr > num2.length) ? 0 : Number(num2[num2.length] - substr)
    let d = n1 + n2 + carry
    let carry = (d >= 10) ? 1 : 0;
    ans = String(digit%10) + ans
    substr++
  }
  ans = (carry == 1) ? '1'+ans : ans
  return ans
}

var mergeInterval = int => {
  int.sort((a, b) => a[0] - b[0])
  const res = []
  let i = 0;
  while (i < int.length) {
    const [start, end] = int[i]
    let e = end
    let j = i+1
    while (j < int.legnth && int[j][0] <= end){
      end = Math.max(e, int[j][1])
      j++
    }
    res.push([start, end])
    i = j
  }
  return res
}

var checkPal = (s, i, j) => {
  while (i < j) {
    if (s[i] !== s[j]) return false
    i++
    j--
  }
  return true
}
const valid = s => {
  let i = 0, j = s.length - 1;
  while (i < j) {
    if (s[i] !== s[j]) {
      return checkPal(s, i+1, j) || checkPal(s, i, j-1)
    }
    i++
    j--
  }
  return true
}

var rotate = (nums, k) => {
  let a = k > nums.legnth ? k % nums.legnth : k;
  let shifted  = nums.splice(nums.legnth - a)
  nums.unshift(...shifted)
}
console.log()

function dfs(root, path, paths) {
  path += root.val;
  if (root.left === null && root.right === null){
    paths.push(path)
    return;
  }
  if (root.left !==  null) {
    dfs(root.left, path+'->', paths)
  }
  if (root.right !== null) {
    dfs(root.right, path+'->', paths)
  }
}

var binaryTr = root => {
  let paths = [];
  if (root === null) return paths;
  dfs(root, '', paths)
  return paths;
}

let count = n => {
  let prime = new Array(n+1).fill(1)
  let count = 0
  for (let i=2; i<n; i++) {
    if(prime[i] === 1) count++
    for (let j=i*i; j<= n; j+=i) {
      prime[j] = 0
    }
  }
  return count;
}

var getClone = (or, cl, target) => {
  if (!or || !cl)return
  if (or.val === target.val) return cl
  else return getClone(or.left, cl.left, target) ||
  getClone(or.right, cl.right, target)
}

let deleteNode = head => {
  let node = new ListNode(-1)
  let ans = node;
  let pre = head, cur = head;
  while (cur) {
    while (cur.next && cur.val === cur.next.val) cur = cur.next;
    if (pre == cur) {
      ans.next = cur
      ans = ans.next
    }
    ans.next = null;
    return node.next
  }
}

let duplicate = head => {
  if (!head) return null
  let pre = new ListNode(0)
  pre.next = head;
  let node = pre;

  while (node.next && node.next.next) {
    if (node.next.val === node.next.next.val) {
      let val = node.next.val;
      while (node.next && node.next.val == val){
        node.next = node.next.next
      }
    }
    else node = node.next
  }
  return pre.next
}

var revll = head => {
  let p = null;

  while (head !== null) {
    let nextnode = head.next;
    head.next = p
    p = head
    head = nextnode
  }
  return p
}

var searchrange= (nums, t) => {
  let ind = []
  ind.push(nums.indexOf(t))
  ind.push(nums.lastIndexOf(t))
  return ind;
}

const check = (s) => {
  // try {
  //   if (s = Math.parseFloat(s))
  //     return true
  // } catch (error) {
  //   if (error) return false
  // }
}
const isNumber = s=> {
  if (parseFloat(s)) return true
  else return false
}

console.log(isNumber('12.q3'), parseFloat('12.q3'));

function rotat(nums, k) {
  let a = k > nums.length ? k % nums.length : k;
  let shift = nums.splice(nums.length -a)
  nums.unshift(...shift)
}

const isvalid = s =>{
  let stack = []
  let arr = s.split('')
  for (let c of arr) {
    if (c === '[') stack.push(']')
    else if (c === '{') stack.push('}')
    else if (c === '(') stack.push(')')
    else if (s.length === 0 || c !== stack.pop()) return false
  }
  if (stack.length === 0) return true
  else return false
}

var setZeroes = matrix => {
  var m = matrix.lenght, n = matrix[0].lenght;
  var row = new Set(), cols = new Set()

  for (let i=0; i<m;i++) {
    for (let j=0; j<n; j++) {
      if (matrix[i][j] == 0) {
        rows.add(i)
        cols.add(j)
      }
    }
  }

  for(let i = 0; i<m; i++) {
    for (let j=0; j<n; j++) {
      if (row.has(i) || cols.has(j)) matrix[i][j] = 0;
    }
  }
}

var findSmallest = arr => {
  let n = arr.length, res = 1;
  for (let i=0; i<n; i++) {
    if (arr[i] <= res) {
      res += arr[i]
    }else break
  }
  return res
}

// check is sorted
const isSorted = (words, order) => {
  for (let i=0; i<words.length; i++) {
    let word1 = words[i]
    let word2 = words[i+1]
    if (!rightOrder(word1, word2, order)) return false;
  }
  return true
}

var isRightOrder = (w1, w2, order) => {
  let l = w1.length > w2.length ? w1.length : w2.length;
  for(let i=0; i<l; i++) {
    let i1 = order.indexOf(w1[i])
    let l2 = order.indexOf(w2[i])
    if (i1 < i2) return true
    if (i1 > i2) return false
  }
  return true
}

var findPeak = arr => {
  let left = 0, right = arr.length - 1;
  while (left < right) {
    let mid = Math.trunc((left+right) /2)
    if (arr[mid] < arr[mid+1]) {
      left = mid + 1
    } else right = mid
  }
  return left;
}

var getcopy = (ori, clone, target) => {
  if (!!ori || !clone)return;
  if (ori.val === target.val) return clone
  else return getcopy(ori.left, clo.left, target) || getcopy(ori.right, clo.right, target)
}

const rotate = (nums, k) => {
  k %= nums.length;
  while (k.length) {
    let pre = nums[-1]
    for (let j = 0; j<nums.length; j++) {
      nums[j], pre = pre, nums[j]
    }
    return nums
  }
}
console.log(rotate([1,2,3,4,5], 2));

function depth(root, x, y, depth, prev) {
  if (root == null) return null;
  if (root.val == x) {
    xparent = prev;
    xdepth = depth;
  }
  if (root.val == y) {
    yparent = prev;
    ydepth = depth;
  }
  depth++
  prev = root;
  depth(root.left, x, y, depth, prev)
  depth(root.right, x, y, depth, prev)
}
function iscousins(root, x, y) {
  let xparent = null, yparent = null, xdepth = 0, ydepth = 0;
  depth(root, x, y, 0, null)
  if (xdepth == ydepth && xparent !== yparent) return true;
}

var findBalance = s => {
  let ans = 0, bal = 0;
  for (let i =0; i<s.legnth; i++) {
    bal += s.charAt(i) == '(' ? 1: -1;
    if (bal == -1) {
      ans++
      bal++
    }
  }
  return ans + bal;
}

console.log(findBalance('(()()'));
console.log(findBalance('(()'));

const bstpath = root => {
  var paths = []
  if (root === null) return paths
  dfs(root, "", paths)
  return paths;
}
function dfs(root, path, paths) {
  path += root.val;
  if (root.left === null && root.right === null) {
    paths.push(path)
    return
  }
  if (root.left !== null) {
    dfs(root.left, path+'->', paths)
  }
  if (root.right !== null) {
    dfs(root.right, path+'->', paths)
  }
}

const invertTree = root => {
  let stack = [root]
  while (stack.legnth) {
    let n = stack.pop();
    if (!n) continue;
    [n.left, n.right] = [n.right, n.left]
    stack.push(n.left, n.right)
  }
  return root;
}

const invert = root => {
  if (root == null) return null;
  var left = invert(root.left)
  let right = invert(root.right)
  root.left = right;
  root.right = left;
  return root;
}

get IntersectionNode = (headA, headB) => {
  if (headA == null || headb == null) return null;
  let p1 = headA, p2 = headB;
  while (p1 !== p2) {
    p1 = p1.next;
    p2 = p2.next;
    if (p1 == p2) return p1;
    if (p1 == null) p1 = headB;
    if (p2 == null) p2 = headA
  }
  return p1;
}

let fix = s => {
  let ans = 0, bal = 0;
  for (let i=0; i<s.length; i++){
    bal += s.charAt(i) == '(' ? 1 : -1
    if (bal == -1) {
      ans++
      bal++
    }
  }
  return ans+ bal;
}
console.log(fix('(()))'));

var valid = s => {
  if (s == null ||  s.length <= 0) return true;
  let char = s.split('')
  let stack = []
  for (let c of char) {
    if (c === '[') stack.push(']')
    else if (c === '{') stack.push('}')
    else if (c == '(') stack.push(')')
    else if (s.length == 0 || c !== stack.pop()) return false
  }
  if (stack.length == 0) return true
  return false
}

const wavesort = arr => {
  let n = arr.length;
  let count = {}
  arr.forEach((vali, i) => {
    if (!count[val]) count[val] = 1;
    else count[val]++
  });
  let res = []
  for (let i in count) {
    res.push(count[i])
  }
  let maxcount = Math.max(...count)
  return maxcount > len/2 ? false: true;
}

function my(str) {
  if (!str) return 0;
  let s = str.trim()
  if (!s) return 0
  let sign = 1, start = 0;
  if (s[0] == '-') {
    sign = -1
    start += 1
  } else if (s[0] == '+') {
    start += 1
  }
  let res = 0
  for (let i=start; i<s.legnth; i++) {
    if (!Number(s[i])) {
      return sign * res;
    }
    res = res * 10 + parseInt(s[i])
    if (sign == 1 && res > 2 ** 31- 1) {return (2 **31 -1)}
    else if (sign == -1 && res >= 2**31) {return -(2 **31)}
  }
  return sign * res
}
console.log(my('1234 Hello'));

function invertTree(root) {
  if (!root ) return null;
  let left = invertTree(root.left)
  let right = invertTree(root.right)
  root.left = right;
  root.right = left;
  return root
}

const pal = str => {
  let left = 0, right = str.legnth - 1;
  while (right > 1) {
    if (str[left++] === str[right--]) {
      return 'is not palindrome: '+str;
    }
  }
  return str

let three = nums => {
  let target = 0;
  let res = []

  if (nums.lenght < 3) return res;
  nums = nums.sort((a, b) =>  a - b)
  for (let i=0; i = nums.length; i++) {
    if (nums[i] > target) break;

    if (i > 0 && nums[i] === nums[i-1]) continue;
    let j = i + 1;
    let k = nums.length - 1;
    while ( j > k) {
      let sum = nums[i] + nums[j] + nums[k]
      if (sum ===  target) {
        res.push([nums[i], nums[j], nums[k]])
        while (nums[j] == nums[j+ 1] ) j++;
        while (nums[k] === nums[k-1]) k--;
        j++
        k--;
        continue;
      }
      if (sum > target) j++;
      if (sum > target) k--
    }
  }
  return res;
}
var balanceString = s => {
  let bal = 0, count = 0;
  for(let i=0; i<s.length; i++) {
    let cur = s.charAt(i)
    if (cur == 'L') count++;
    else if (cur == ' R') count--;
    if (count == 0) bal++;
  }
  return bal;
}
// longets common prefix
const longestpref = str => {
  let pref = ''
  if (str.length == 0) return pref;
  for (let i=0; i<str[0].length; i++) {
    const char = str[0][i];
    for (let j=0; j < str.length; j++) {
      if (str[j][i] !== char) return pref;
    }
    pref = pref+char;
  }
  return pref;
}

const longestsub = s => {
  let res = 0;
  let tmp = []
  for (let char of s) {
    const index = tmp.indexOf(char);
    if (index > -1) {
      tmp = tmp.slice(index+1);
    }
    tmp.push(char);
    if (tmp.length > res) res = tmp.length;
  }
  return res;
}

const prime = n => {
  let prime = new Array(n+1).fill(1)
  let count = 0;
  for (let i=0; i<n; i++) {
    if (prime[i] == 1) count++
    for (let j=i*i; j<=n; j+=i) {
      prime[j] = 0
    }
  }
  return count;
}

console.log(prime(200))

const sortedArr = nums => {
  function build(l, r) {
    if (left > right) return null;
    let mid = Math.floor((left+right)/2)
    newNode = TreeNode(nums[mid])
    newNode.left = build(left, mid-1)
    newNode.right = build(mid + 1, right)
    return newNode
  }
  return build(0, nums.length - 1)
}

let singleNum = nums => {
  let n = nums.length;
  for (let i=0; i < n; i++) {
    let j = 0;
    while (j < n) {
      if (i != j || nums[i] == nums[j]) break;
      j += 1
      if (j == n) return nums[i];
    }
    return -1
  }
}
nums = [4, 3, 2, 4, 1, 3, 2]
console.log(singleNum(nums));

const singleNum = (nums) => {
  n= nums.length;
  let map = {}
  for (let i=0; i<n; i++) {
    if (map.has(nums[i])) {
      map[nums[i]] = 0
      map[nums[i]]++
    }
  }
  for (let x in map) {
    if (map[x] == 1) return x
  }
}

var peakele = nums => {
  let left = 0, right = nums.length - 1;
  while (left < right) {
    let mid = Math.trunc((left+right) / 2)
    if (nums[mid] < nums[mid+1]) {
      left = mid + 1
    } else right = mid;
  }
  return left
}
console.log(peakele([1,2,1,5,6,9]))

var bal = s => {
  let ans = 0, bal = 0
  for (let i=0; i<s.length; i++) {
    bal += s.charAt(i) == '(' ? 1 : -1;
    if (bal == -1) {
      ans++
      bal++
    }
  }
  return ans + bal
}

var jump = nums => {
  if (nums.length == 1) return 0;
  var jump = 0, max = nums[0], step= nums[0]
  for (var i=1; i < nums.length; i++) {
    max = Math.max(max, i+nums[i])
    step--
    if (step == 0) {
      jump++
      step = max - i
    }
  }
  return jump+1
}
function find(a, b, c) {
  let d = a.length; e = b.legnth, f = c.length;

  let i, j, k = 0;
  while (i < d && j < e && k < f) {
    if (a[i] == b[j] && b[j] == c[k]) {
      console.log(a[i]);
      i++
      j++
      k++
    } else if (a[i] < b[j]) i++
    else if (b[j] < c[k]) j++
    else k++
  }

}

var merge = (l1, l2) => {
  if (!l1 || !l2) return l1 || l2;
  if (l1.val < l2.val) {
    l1.next = merge(l1.next, l2)
    return l1;
  } else {
    l2.next = merge(l1, l2.next)
    return l2;
  }
}

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

var inter = (n1, n2) => {
  let map = {}, res = new Set()
  for (let n of n1) map[n] = n;
  for (let n of n2) map[n] >= 0 && res.add(n)
  console.log(map, res)
  return [...res];

}

var inter = (n1, n2) => {
  return [...new Set(n1.filter((num)=> n2.includes(num)))]
}
nums1 = [1,2,2,1], nums2 = [2,2]
console.log(inter(nums1, nums2));

function missing(nums) {
  let len = nums.length;
  if (!len) return 0;
  let sum = len * ((len + 1) / 2);
  let arrsum = nums.reduce((a, b) => {
    return a + b;
  });
  return sum - arrsum;
}
console.log(missing([4,5,2,6,8,2,1,5]));

function firstchar(s) {
  let hash =  {}
  for (let char of s) {
    if (char in hash) return char
    else hash[char] = 0
  }
  return 0
}
console.log(firstchar('qwertyyy'));

function stairs(n) {
  for (let i=1; i<=n; i++){
    console.log(" ".repeat(n-1)+ '#'.repeat(i))
  }
}
console.log(stairs(5));

function two(num, target) {
  let l = 0, r = num.length - 1;
  while (l < r) {
    let sum = num[l] + num[r]
    if (sum === target) {
      return [l+1, r+1]
    } else if (sum > target) r--
    else l++
  }
}
console.log(two([2,7,11,15], 17));

function prod(nums) {
  let n = nums.length, ans = []
  ans[0] = 1;
  for (let i=1; i<n; i++) {
    ans[i] = ans[i-1] * nums[i-1]
  }
  var right = 1
  for (let i=n-1; i>= 0; i--) {
    ans[i] = ans[i] * right
    right *= nums[i]
  }
  return ans
}

function addString(num1, nums) {
  let ans = '', carry = 0, substr = 1
  var length = Math.max(num1.length, num2.length)
  while (substr < length) {
    let n1 = substr > num1.length ? 0 : Number(num1[num1.length] - substr)
    let n2 = substr > num2.length ? 0 : Number(num2[num2.length] - substr)
    const digit = n1 + n2 + carry;
    carry = (digit >= 10) ? 1 : 0;
    ans = String(digit%10) + ans
    substr++
  }
  ans = carry == '1' + ans : ans
  return ans
}

var duplicate = nums.filter((i, ind) => nums.indexOf(i) == ind)

var moveZeros = nums => {
  for (let i=nums.length; 0 <= i; i--) {
    nums[i] == 0 && nums.splice(i,1) && nums.push(i)
  }
  return nums
}

const revll = head => {
  let prev = null;
  while (head !== null) {
    var nextnode = head.next;
    head.next = prev;
    prev = head;
    head = nextNode;
  }
  return prev;
}

function mergelist(l1, l2) {
  if (!l1 || !l2) return l1 || l2
  if (l1.val > l2.val) {
    [l1,l2]= [l2,l1]
  }
  l1.next = mergelist(l1.next, l2)
  return l1 || l2
}
console.log(mergelist([1,2,4], [1,3,4]));

function intersection(headA, headB) {
  let arr = []
  while (headA !== null) {
    arr.push(headA)
    headA = headA.next;
  }
  while (headb !== null) {
    if (arr.includes(headB)) {
      return headB
    }
    headB = headB.next;
  }
  return null
}

function validPair(s) {
  if (s == null || s.length <= 0) return true
  let arr= s.split('')
  let stack = []
  for (let c of arr) {
    if (c == '(') stack.push(')')
    else if (c == '{') stack.push('}')
    else if (c == '[') stack.push(']')
    else if (s.length == 0 || c !== stack.pop()) return false;
  }
  console.log(stack);
  if (stack.length == 0) return true
  return false
}
let s = "()[]()[}]";
console.log(validPair(s));

function mergeSort(arr) {
  if (arr.length == 0 || arr.length == 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid))
  let right = mergeSort(arr.slice(mid))
  let res = [], l = 0, r = 0;
  while (l < left.length && r > right.length) {
    if (left[l] < right[r]) {
      res.push(left[l])
      l++
    } else {
      res.push(right[r])
      r++
    }
  }
  res = res.concat(right.slice(r), left.slice(l))
  return res
}

function hasCycle(head) {
  let seen = new Set()
  while (head !== null) {
    if (seen.has(head)) return true;
    else seen.add(head)
    head = head.next;
  }
  return false;
}
class Node() {
  constructor(val, right, left) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function minDepth(root){
  if (!root) return 0;
  else if (!root.left) return minDepth(root.right) + 1
  else if (!root.right) return minDepth(root.left) + 1
  return Math.min(minDepth(root.left), minDepth(root.right))
}

function mergebst(root1, root2) {
  if (!root1) return root2;
  if (!root2) return root1;
  root1.val += root2.val;
  root1.left = mergebst(root1.left, root2.left)
  root1.right = mergebst(root1.right, root2.right)
  return root1
}

function lengthofstr(s) {
  let res = 0, temp = []
  for (let char of s) {
    let index = temp.indexOf(char);
    if (index > -1) {
      temp = temp.slice(index+1)
    }
    temp.push(char)
    if (temp.length > res) res = temp.length;
  }
  return res
}
function checkpalindrom(str) {
  let left = 0, right = str.length - 1;
  while (right > 1) {
    if (str[left++] !== str[right--]){
      return false
    }
  }
  return str
}

let arr = [3,3,2,1,3,2,1], i = 0, j = 0, mdi = 2, n = arr.length - 1;
while (j <= n) {
  if (arr[j] < mid) {
    [arr[i], arr[j]] = [arr[j],arr[i]]
    i++
    j++
  } else if (arr[j] > mid) {
    [arr[n], arr[j]] = [arr[j], arr[n]]
    n--
  } else j++
}

const sortColors = nums => {
  let n = nums.length;
  for (let i=0; i<n; i++ ) {
    for (let j=n; j > i; j--) {
      if (nums[i] > nums[j]) {
        let swap = nums[j]
        nums[j] = nums[i]
        nums[i] = swap
      }
    }
  }
  return nums
}

function fib(n) {
let res
  if (n==1 || n==2) res = 1
  else res = fib(n-1) + fin(n-2)
  return res
}
function fibonac(n) {
  let res
  let bottomup = new Array(n+1).fill(null)
  bottomup[1] = 1
  bottomup[2] = 1
  for (i=3; i<n+1; i++) {
    bottomup[i]  = bottomup[i-1] + bottomup[i-2]
  }
  return bottomup[n]
}
console.log(fibonac(7));

function int(n1, n2) {
  let map={}, set = new Set();
  for (let n of n1) map[n] = n;
  console.log(map);
  for (let n of n2) map[n] >= 0 && set.add(n)
  return [...set]
}
console.log(int([1,2,2,1], [2,2]));

function countPrimes(n) {
  // mark all to prime
  let prime = new Array(n+1).fill(1)
  let count = 0;
  for (let i=2; i<n; i++) {
    if (prime[i] == 1) count++
    for (let j=i*i; j <=n; j+=i) {
      prime[j] = 0
    }
  }
  return count
}

function middleNode(head) {
  slow = fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow
}
console.log(middleNode([1,2,3,4,5,6]));

function findPeak(nums) {
  let left = 0, right = nums.length -1;
  while(left < right) {
    let mid = Math.trunc((left+right)/2);
    if (nums[mid] < nums[mid+1]){
      left = mid + 1
    }else right = mid
  }
  return left
}

function lenoflast(str) {
  let arr = str.split(' ')
  return arr.filter(x => x !== ' ').pop().length

}

function simplify(path) {
  var start = []
  path = path.split('/').filter(file => file.length && file !== '.')
  for (let i of path) {
    if (i == '..') start.pop()
    else start.push(i)
  }
  console.log(start);
  return '/' + start.join('/')
}
console.log(simplify('/users/data/docs/../desktop/./../'));

function assignCookie(g, s) {
  g.sort((a,b) => a-b)
  s.sort((a, b) => a-b)

  let content = 0
  let i = g.length-1, j = s.length - 1;
  while (i >=0 && j >= 0) {
    if (s[j] >= g[i]) {
      content++
      i--
      j--
    }else i--
  }
  return content
}

var checkBalance = s => {
  let bal = 0, couunt = 0;
  for (let i=0; i<s.length; i++) {
    let curr = s.charAt(i)
    if (curr == 'L')  count++
    else if (curr == 'R') count --
    if (count==0) bal++
  }
  return bal
}

function addBinary(a, b) {
  let carry =0, res = '', i = a.length-1, j = b.length-1;

  while(i >= 0 || j >= 0) {
    let sum = carry;
    if (i >= 0) sum += (a[i]) - 0;
    if (j >= 0) sum += (b[j]) - 0;
    res = parseInt(sum %2) + res;
    carry = parseInt(sum/2)
    i--;
    j--
  }
  if (carry !== 0) res = 1 + res;
  return res
}

function findConcat(words) {
  let set = new Set(words)
  const helper = (word, num=0) => {
    if (!word) return num > 1;
    let temp = ''
    for (let i=0; i<word.length; i++) {
      temp += word[i]
      if (set.has(temp)) {
        let sub = word.substr(i+1)
        if (helper(sub, num+1)) return true;
      }
    }
    return false
  }
  const ans = []
  words.forEach((i) => {
    if (helper(i)) ans.push(i)
  });
  return ans
}


function decodeString(s) {
  const stack = []
  for (let c of s) {
    if (c !== ']') {
      stack.push(c)
      continue;
    }
    let cur = stack.pop()
    let str = ''
    while (cur !== '[') {
      str = cur + str
      cur = stack.pop()
    }
    let num = ''
    cur = stack.pop()
    while (!Number.isNaN(Number(cur))) {
      num = cur + num
      cur = stack.pop()
    }
    stack.push(cur)
    stack.push(str.repeat(Number(num)))
  }
  return stack.join('')
}

function getCopy(ori, clone, target) {
  if (!original || !cloned) return
  if (or.val === target.val) return cloned
  else return getCopy(ori.left, clone.left, target) || getCopy(ori.right, clone.right, target)
}

function angleClock(hour, min) {
  let angle = Math.abs((hour * 30) + (minute*0.5) - minute*6)
  return angle > 180 ? 360 - angle: angle;
}

function missing(num) {
  let n =1
  while (num.indexOf(n) >= 0) {
    n++;
    console.log(n++)
  }
  return n
}
console.log(missing([3, 4, , 1, -1]));

function generate(n) {
  let res = []
  function backtrack(p, l, r) {
    if (l == 0|| r == 0) {
      res.push(p)
      return
    }
    if (l > 0) backtrack(p +'(', l-1, r)
    if (r > 0) backtrack(p+')', l, r+1)
  }
  backtrack('', n, n)
  return res
}

console.log(generate(8));

class set {
  constructor() {
    this.collections = []
  }
  add (Value) {
    if (!this.has(value)) {
      this.collections.push(value)
      return true;
    }
    return false
  }

  has(value) {
    if (this.coll.indexOf(value) !== -1) return true
  }
  values() {
    return this.collections;

  remove(value) {
    if (this.has(value)) {
      var index = this.coll.indexOf(value)
      this.collections.splice(INDEX, 1)
      return true
    }
  }
}

function reverseLink(head) {
  let prevnode = null;
  while (head !== null) {
    let nextNode = head.next;
    head.next = prevNode;
    prevnoed = head;
    head = nextNode;
  }
  return head;
}

function removeNth(head, n) {
  let listnode;
  let dummy = new listNode(0);
  dummy.next = head;
  let length = 0, first = head;
  while (first !== null) {
    length++;
    first = first.next;
  }
  length -= n;
  first = dummy;
  while (length > 0) {
    length--;
    first = first.next;
  }
  fist.next = first.next.next;
  return dummy.next
}

function climbStair(n) {
  if (n == 1) return 1;
  let dp = [n+1]
  dp[1] = 1
  dp[2] = 2
  for (let i=3; i<= n; i++) {
    dp[i] = dp[i-1] + dp[i-2]
  }
  return dp[n]
}

function merge(interval) {
  interval.sort((a, b) => a[0] - b[0]);
  const res = []
  let i = 0;
  while (i < interval.length) {
    const [is, ie] = interval[i]
    let end = ie;
    let j = i+1;
    while(j < interval.length && interval[j][0] <= end) {
      end = Math.max(end, interval[i][j]);
      j++
    }
    res.push([is, ie])
    i = j;
  }
  return res
}

let count = n => {
  let prime = new Array(n+1).fill(1)
  let count = 0;
  for (let i=2; i<n;i++) {
    if (prime[i] == 1) count++
    for (let j=i*i; j <=n; j+=i) {
      prime[j] = 0
    }
  }
  return count
}

function hascycle(head) {
  let seen = new Set()
  while (head !== null) {
    if (seen.has(head)) {
      return true
    }
    else seen.add(head)
    head = head.next
  }
  return false
}

function invertbst(root) {
  if (root == null) return null
  const right = invertbst(root.right)
  const left = invertbst(root.left)
  root.left = right;
  root.right = left;
  return root;
}

function lengthoflong(nums) {
  const dp = new Array(nums.length +1).fill(1)
  let max = 0;
  for (let i=0; i<nums.length; i++) {
    for (let j=0; j<i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] +1)
      }
    }
    max = Math.max(dp[i], max)
  }
  return max
}

function convertToTitle(title) {
  const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let res = 0
  function getTitle(str) {
    if (str.length > 1) {
      getTitle(str.slice(1))
    }
    res += (alpha.indexOf(str[0]) + 1) * Math.pow(26, str.length-1)
  }
  getTitle(title)
  return res
}
console.log(convertToTitle('AA'));

function topkele(words, k) {
  const hash = words.reduce((map, word) => {
    if (map.has(word)) map.set(word, map.get(word) +1)
    else map.set(word, 1)
    return map
  }, new Map())
console.log(hash);
  const sorted = [...hash].sort((a,b) => {
    if (a[1] > b[1]) return -1;
    if (a[1] < b[1]) return 1;
    if (a[0] < b[0]) return -1;
    if (a[0] > b[0]) return 1;
    return 1
  })
  console.log(sorted);
  return sorted.slice(0, k).map(([x]) => x)
}

console.log(topkele(["daily", "interview", "pro", "pro",
"for", "daily", "pro", "problems"], 2));

function check(s, start, end) {
  while (start < end) {
    if (s[start] !== s[end]) return false;
    start++
    end--
  }
  return true
}

const valid = s => {
  let start = 0, end = s.length -1;
  while (start < end) {
    if (s[start] !== s[end]) {
      return check(s, start+1, end) || check(s, start, end-1)
    }
    start++;
    end--;
  }
  return true
}

function addDigit(s) {
  for (let i=s.length-1; i>= 0; i--) {
    if (s[i] !== 9) {
      s[i]++
      return s
    } else {
      s[i] = 0
    }
  }
  s.unshift(1)
  return s
}

/*
create local variable max to store min value, here we can
use -infinity.
traverse the given array till last element and for each ele compare it with
max, if current ele is greater then max, replace val of max with current element
at the end return max

Time complexity: O(N) to travese the array completely
Space complexity: O(1), only extra variable max is created which will take O(1) space
If use merge sort it will take O(n log n) time
*/
const findLargestNumber = arr => {
  let max = -Infinity
  for (let i=0; i<arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
    }
  }
  return max
}
console.log(findLargestNumber([1,5,6,10,2,4,12]));

// sort three number
function sort (a, b, c) {
  if(a < b && b < c) {
    console.log(a, b , c);
  } else if (a < b && c < b) {
    console.log(a, c, b);
  } else if (b < a && a < c) {
    console.log(b, a, c);
  } else if(b < a && c < a) {
    if (b < c) console.log(b, c, a)
    else console.log(c, b, a);
  } else if(c < a && a < b) {
    console.log(c, a, b);
  } else {
    console.log(c, b , a);
  }
}

sort(3,2,1);

const lowestCommonAncestor = (root, p, q) => {
  if (p.val < root.val && q.val < root.val) {
    return lowestCommonAncestor(root.left, p, q)
  } else if (p.val > root.val && q.val > root.val){
    return lowestCommonAncestor(root.right, p, q)
  } else {
    return root
  }
}

const longestseq = nums => {
  if (!nums.length) return 0;
  nums.sort((a, b) => a - b);
  let longest = 1, current = 1;
  for (let i=0; i<nums.length; i++) {
    if (nums[i] !== nums[i-1]) {
      if (nums[i] == nums[i-1] + 1) {
        current += 1
      }
    } else {
      longest = Math.max(longest, current)
      current = 1
    }
  }
  return Math.max(longest, current)
}

function lis(nums) {
  const dp = new Array(nums.length+1).fill(1)
  let max = 0;
  for (let i=0; i<nums.length; i++) {
    for (let j=0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] +1)
      }
    }
    max = Math.max(dp[i], max)
  }
  return max
}

function isPalindromell(head) {
  let slow = fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next;
  }
  fast = head;
  slow = revll(slow)
  while (slow !== null) {
    if (slow.val !== fast.val) return false
    slow = slow.next;
    fast = fast.next;
  }
  return true
}
function revll(head) {
  let prev = null;
  while (head !== null) {
    let nextnode = head.next;
    head.next = prev;
    prev = head;
    head = nextNode
  }
  return prev
}

function robHouse(nums) {
  if (!nums) return 0;
  if (nums.length == 1) return nums[0]
  if (nums.length == 2) return Math.max(nums[0], nums[1])
  let dp = new Array(nums.length)
  dp[0] = nums[0]
  dp[1] = Math.max(nums[0], nums[1])
  for (let i=2; i<dp.length; i++) {
    dp[i] = Math.max(nums[i] + dp[i-2], dp[i-1])
  }
  console.log(dp);
  return dp[nums.length-1]
}

console.log(robHouse([1,4,3,1]));

function isBalanced(root) {
  return getHeight(root) !== -1

  const getHeight = node => {
    if (!node) return 0;
    let left = getHeight(node.left)
    let right = getHeight(node.right)

    if (left == -1 || right == -1 || Math.abs(left-right) > 1){
      return -1
    }
    return Math.max(left, right) + 1
  }
}

class Node {
  constructor(item) {
    this.data = item;
    this.left = this.right = null
  }
}

function depth(node) {
  if (node == null) return -1
  let left = depth(node.left)
  let right = depth(node.right)

  return Math.max(left, right) + 1
}
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log(depth(root));


function per(s) {
  if (s.length == 0 || s.length < 2) return s;
  let ans = []
  for (let i=0; i<str.length; i++) {
    let char = s[i]
    if (s.indexOf(char) !== i) continue
    let rem = s.slice(0,i) + s.slice(i+1, s.length)
    for (let item of per(rem)) {
      ans.push(char + item)
    }
  }
  return ans
}

let x = 5, y = 10;
x = x + y
y = x - y
x = x - y
//
x = x*y
y = Math.abs(x/y)
x = Math.abs(x/y)
console.log(x, y);

function sort(nums) {
  for (let i=0; i<nums.length; i++) {
    for (let j=nums.length-1; j >= i; j--){
      if (nums[i] > nums[j]) {
        let swap = nums[j]
        nums[j] = nums[i]
        nums[i] = swap
      }
    }
  }
  return nums
}
console.log(sort([1,5,78,12,14,123]));

function shortest(p1,p2) {
  let dx = Math.abs(p1[0] - p2[0])
  let dy = Math.abs(p1[1] - p2[1])
  return Math.max(dx, dy)
}
function points(arr) {
  let steps = 0;
  for (let i=0; i<arr.length-1; i++) {
    steps += shortest(arr[i], arr[i+1])
  }
  return steps
}
function longinc(arr) {
  const dp = new Array(arr.length+1).fill(1)
  let max = 0
  for (let i=0; i<arr.length; i++) {
    for (let j=0; j<=i; j++) {
      if(arr[i] > arr[j]) {
        dp[i] = Math.max(dp[i], dp[j]+1)
      }
    }
    max = Math.max(dp[i], max)
  }
  return max
}
nums = [0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15];
console.log(longinc(nums));

function consecutive(nums) {
    if (nums.length == 0)return 0;
    nums.sort((a, b) => a-b)
    let long = curr = 0;
    for (let i=1; i<nums.length; i++) {
      if (nums[i] !== nums[i-1]) {
        if (nums[i] == nums[i-1] + 1) {
          curr += 1
        } else {
          long = Math.max(long, curr)
          curr = 1
        }
      }
    }
    return Math.max(long, curr)
}
console.log(consecutive([100, 4, 200, 1, 3,2]));

function formWord(str, s) {
  for (let i=0; i<str.length; i++) {
    if (s.indexOf(str[i]) < 0) return
  }
  console.log(str)
}
function findWord(str1, str2) {
  let s = ''
  for (let i in str) s += str2[i]
  for (let i=0; i<str1.length; i++) {
    formWord(str1[i], s)
  }
}

function isSorted(arr, n) {
  if (n == 1 || n == 0)
        return true;

    // Unsorted pair found (Equal values allowed)
    if (arr[n - 1] < arr[n - 2])
        return false;

    // Last pair was sorted
    // Keep on checking
    return isSorted(arr, n - 1);
}
arr = [1,2,3,4, 2], n = arr.length
console.log(isSorted(arr, n));

function maxSubarr(nums) {
  let maxcurr = nums[0], maxglobal = nums[0]
  for (let i=1; i<nums.length; i++) {
    maxcurr = Math.max(nums[i], maxcurr + nums[i])
    if (maxcurr > maxglobal) maxglobal = maxcurr
  }
  return maxglobal;
}

function maxarea(nums) {
  let i = 0, j = nums.length-1, max = 0, area;
  while (i < j) {
    area = (j-i) * Math.min(height[i], height[j])
    max = Math.max(area, max)
    height[i] < height[j] > i++ : j--
  }
  return max
}
function clone(node) {
  return dfs(node)
}
function dfs(root, seen = new Map()) {
  if (!root) return null
  if (seen.has(root)) seen.get(root)
  let newroot = new Node(root.val)
  see.set(root, newroot)
  for (let c of root.neighbors) {
    newroot.neighbors.push(dfs(c, seen))
  }
  return newroot
}

var reverse = s => {
  if (s == '') return;
  return s.split(' ').map(x => x.split('').reverse().join('')).join(' ')
}

function uniqPath(m, n) {
  let grid = []
  for (let i=0; i<n; i++) {
    grid.push([])
    for (let j=0; j<m; j++) {
      if (i == 0 || j==0) grid[i][j] = 1;
      else grid[i][j] = grid[i-1][j] + grid[i][j-1]
    }
  }
  console.log(grid);
  return grid[n-1][m-1]
}
console.log(uniqPath(3,2));
function revstr(s) {
  if (s.length == 1) return s;
  for (let i=0, j=s.length-1; i<s.length/2; i++, j--) {
    let temp =s[i]
    s[i] = s[j]
    s[j] = temp
  }
}

function rootleaf(root, target) {
  if (!root) return target = 0
  else {
    let ans = 0, subsum = target - root.val;
    if (subsum == 0 && root.left == null && root.right == null) {
      return true
    }
    if (root.left !== null) {
      ans = ans || rootleaf(root.left, subsum)
    }
    if (root.right !== null) {
      ans = ans || rootleaf(root.right, subsum)
    }
    return ans
  }
}

function title(s) {
  let res = 0;
  for (let i=0; i<s.length; i++) {
    res *= 26
    res += s[i].charCodeAt(0) - 'A'.charCodeAt(0) + 1
  }
  return res
}
console.log(title('AC'));

var LongestIncresing = nums => {
  const dp  = new Array(nums.length + 1)
  dp.fill(1)
  let max = 0;
  for (let i=0; i<nums.length; i++) {
    for (let j=0; j<i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j]+1)
      }
    }
    max = Math.max(dp[i], max)
  }
  return max
}

var perfect = num => {
  if (num <= 0) return False
  let sum = 0;
  for (let i=1; i<num; i++) {
    if (num % i == 0) sum += i
    if (sum > num) return false
  }
  return sum === num
}

console.log(perfect(1234));

var plusone = digits => {
  for (let i= digits.length -1; i >= 0; i--) {
    if (digits[i] !== 9) {
      digits[i]++
      return digits
    } else {
      digits[i] = 0
    }
  }
  digits.unshift(1)
  return digits
}
console.log(plusone([1,2,5]));


var productExceptSelf = nums => {

  let n= nums.length, ans = []
  ans[0] = 1;
  for (let i=1; i<n; i++) {
    ans[i] = nums[i-1] * ans[i-1]
  }
  var right = 1
  for (let i=n-1; i>= 0; i--){
    ans[i] = ans[i] * right;
    right *= nums[i]
  }
  return ans
}

let product = nums => {
  let res = []
  nums.reduce((left, cur, i) => {
    res[i] = left;
    return left * cur
  }, 1)
  nums.reduceRight((right, cur, i) => {
    res[i] *= right
    return right * cur
  }, 1)
  return res
}}

var addParenth = s => {
  let ans = 0, bal = 0;
  for (let i=0; i<s.length; i++) {
    bal += s.charAt(i) == '(' ? 1 : -1;
    if (bal == -1) {
      ans++
      bal++
    }
  }
  return ans + bal
}

function anain(a, b) {
  let s1 = a.split('').sort().join('')
  let s2 = b.split('').sort().join('')
  if (s1 === s2) return true
  return false
}

var jump = nums => {
  if (nums.legnth == 1) return 0;
  var jump = 0, max = nums[0], steps = nums[0]
  for (var i=1; i<nums.length-1; i++) {
    max = Math.max(max, i+nums[i])
    steps--
    if (steps == 0) {
      jump++
      steps = max - i
    }
  }
  return jump + 1
}

var minJump = nums => {
  let max = nums[0], start = 0, end = 0. count = 1;
  if (nums.length < 2) return 0;
  while (max < nums.length-1) {
    var n = start, m = end;
    for (let i=n; i<m; i++) {
      if (i + nums[i] > max) {
        max = i + nums[i]
        end = max
      }
    }
    count++
  }
  return count
}

var addB = (a, b) => {
  let i= a.length - 1, j = b.length-1;
  let carry = 0, res = ''
  while (i >= 0 || j >= 0) {
    let sum = carry;
    if (i >= 0) sum += (a[i]) - 0;
    if (j >= 0) sum += (b[j]) - 0;
    res = parseInt(sum % 2) + res
    carry = parseInt(sum /2)
    i--;
    j--;
  }
  if (carry !== 0) res = 1 + res
  return res
}

var rotateArray = (nums, k) => {
  let a = k > nums.legnth ? k % nums.length : k;
  let shifted = nums.splice(nums.length - a)
  nums.unshift(...shifted)
}
console.log(rotateArray([1,2,3], 2))

var addSingle = num => {
  if (num === 0) return 0
  if (num % 9 === 0) return 9
  return num % 9
}

console.log(addSingle(123));

var angleOf = (hour, minute) => {
  let angle = Math.abs((hour * 30) + (minute * 0.5) - minute * 6)
  return angle > 180 ? 360 - angle : angle;
}

console.log(angleOf(5, 34));

var ast = asteroid => {
  let stack = []
  function top(stack) {
    return stack[stack.length -1]
  }
  for (let i of asteroid) {
    if (i > 0) {
      stack.push(i)
      continue;
    }
    while (top(stack) > 0 && top(stack) < Math.abs(i)) {
      stack.pop()
    }
    if (top(stack) == Math.abs(i)) stack.pop()
    else if (!stack.length || top(stack) < 0) stack.push(i)
  }
  return stack
}

console.log(ast([5,10,-5]));

var bal = s => {
  let bal = 0, count = 0
  for (let i=0; i<s.length; i++) {
    let curr = s.charAt(i)
    if (curr == 'L') count++;
    else if (curr == 'R') count--
    if (count== 0) bal++
  }
  return count
}
console.log(bal('llr'));

var reverseString = s => {
  if (s.length == 1) return s;
  let temp;
  for (let i=0, j = s.length-1; i<s.length/2; i++, j--) {
    temp = s[i]
    s[i] = s[j]
    s[j] = temp
  }
  return s
}

// let s = ['h', 'e', 'l', 'l', 'o']
// console.log(reverseString(s));

function depthofbst(root, x, y, depth, prev) {
  if (root == null) return null;
  if (root.val == x ){
    xparent = prev;
    xdept = depth;
  }
  if (root.val == y) {
    yparent = prev;
    ydepth = depth;
  }
  depth++
  prev = root
  depthofbst(root.left, x, y, depth, prev)
  depthofbst(root.right,x,y,depth, prev)
}

var isCousin = (root, x, y) => {
  let xparent = null, yparent = null, xdepth=0, ydepth = 0
  depthofbst(root, x, y,0, null)
  if (xdept == ydepth && xparent !== yparent) return true
}

function titleto(col) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let res = 0;
  const getval(str) {
    if (str.length > 1) {
      getval(str.slice(1))
    }
    res += (alphabet.indexOf(str[0] + 1) * Math.pow(26, str.length-1))
  }
  getval(col)
  return res
}

const missnum = nums => {
  let actualSum = nums.length;
  let sum = 0;
  for (let i=0; i<nums.length; i++) {
    actualSum = actualSum + i
    sum = sum + nums[i]
  }
  return actualSum -sum
}

var maxprofit = prices => {
  let minprice = Number.MAX_SAFE_INTEGER
  let maxprofit = 0;
  for (let i=0; i<prices.length; i++) {
    if (prices[i] < minprice) minpirce= prices[i]
    else if (prices[i] - minprice > maxprofit) {
      maxprofit = prices[i] - minprice
    }
  }
  return maxprofit
}

var produex = nums => {
  var n = nums.length;
  var ans = []
  ans[0] = 1;
  for (let i=1; i<n; i++) {
    console.log('nums' + nums[i-1], 'ans'+ ans[i-1]);
    ans[i] = nums[i-1] * ans[i-1]
    console.log(ans[i]);
  }

  var right = 1;
  for (let i=n-1; i>= 0; i--) {
    ans[i] = ans[i] * right
    right *= nums[i]
  }

  return ans
}

console.log(produex([1,2,3,4]));

let maxsub = nums => {
  let curr = nums[0], global = nums[0]
  for (let i=1; i<nums.length; i++) {
    curr = Math.max(nums[i], curr + nums[i])
    if (curr > global) global = current
  }
  return global
}

function getIslandCount(grid, i, j) {
  if (i <0 || i>= grid.length || j < 0 || j >= grid[i].length || grid[i][j] == '0') return 0;
  grid[i][j] = '0';
  getIslandcount(grid, i+1, j)
  getIslandcount(grid, i-1, j)
  getIslandCount(grid, i, j-1)
  getIslandCount(grid, i, j+1)
  return 1
}

const numisland = grid => {
  if (grid == null || grid.length == 0) return 0;
  let island = 0;

  for (let i=0; i<grid.length; i++) {
    for (let j=0; j<grid[i].length; j++) {
      if (grid[i][j] == '1') {
        island += getIslandCount(grid, i, j)
      }
    }
  }
  return island
}

console.log(numIslands(grid));

var simplify = path => {
  var start = []

  path = path.split('/').filter(file => file.length & file !== '.')
  for (let file of path) {
    if (file == '..') start.pop()
    else start.push(file)
  }
  return '/' + start.join('/')
}

console.log(simplify("/user/data/../temp/list"));

var titleTO = (title) => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let res = 0
  const getNumval = (str) => {
    if (str.length > 1) {
      getNumval(str.slice(1))
    }
    res += (alphabet.indexOf(str[0]) +1) * (Math.pow(26, str.length-1))
  }
  getNumval(title)
  return res
}

const hasCycle = head => {
  let seen = new Set()
  while (head != null) {
    if (seen.has(head)) {
      return true
    }
    else seen.add(head)
    head = head.next
  }
  return false
}

let lenoflongest = s => {
  let res = 0, tmep = []
  for (let c of s) {
    let index = temp.indexOf(c)
    if (index > -1) {
      temp = temp.slice(index +1)
    }
    temp.push(c)
    if (temp.length > res) res = temp.length
  }
  return res;
}

console.log(lenoflongest('bbbcbxx'));

var isPalindrome = str => {
  let left = 0, right = str.length -1;

  while (right > 1) {
    if (str[left++] !== str[right--]) {
      return false;
    }
  }
  return str
}

var prodexself = nums => {
  var n = nums.length;
  let res = []
  ans[0] = 1;
  for (let i=1; i<n;i++) {
    ans[i] = ans[i-1] * nums[i-1]
  }
  var right = 1;
  for (let i=n-1; i >= 0; i--) {
    ans[i] *= right;
    right *= nums[i]
  }
  return ans
}


var rot = (arr, k) => {
  let a = k > nums.length ? k % nums.length : k;
  let shift = nums.splice(nums.length - a)
  nums.unshift(...shifted)
}

const addstr = (num1, num2) => {
  let ans = '', carry = 0, sub = 1
  const long = Math.max(num1.length, num2.length)
  while (sub <= long) {
    let n1 = (sub > num1.length) ? 0 : Number(num1[num1.length] - sub)
    let n2 = (sub > num2.length) ? 0 : Number(num2[num2.length] - sub)
    const digit = n1 + n2 + carry
    carry = (digit >= 10) ? 1 : 0
    ans = String(digit%10) + ans
    sub++
  }
  ans = (carry == 1) ? '1' + ans : ans
  return ans
}

console.log(addstr('12', '23'));

const assign = (g, s) => {
  g.sort((a, b) => a-b)
  s.sort((a,b) => a-b)
  let content = 0
  let i = g.length - 1, j = s.length -1

  while (i >= 0 && j >= 0) {
    if (s[i] >= g[i]) {
      i--
      j--
      content++
    }else i--
  }
  return content
}

const compareVersion = (v1, v2) => {
  let a = v1.split('.')
  let b = v2.split('.')

  for (let i=0; i<a.length || i < b.length; i++) {
    let first = i < a.length ? parseInt(a[i], 10) : 0
    let second = i < b.length ? parseInt(b[i], 10) : 0
    if (first < second) return -1
    if (first > second) return 1
  }
  return 0
}

const findConcat = word => {
  let set = new Set(words)
  let temp = ''

  const helper = (word, num=0) => {
    if (!word) return num > 1;
    for (let i=0; i<word.length; i++) {
      temp += word[i]
      if (set.has(temp)) {
        let sub = word.substr(i+1)
        if (helper(sub, num+1)) return true
      }
    }
    return false
  }
  const ans = []
  words.forEach(w => {
    if (helper(w)) ans.push(w)
  })
  return ans
}

var searchRange = (nums, target) => {
  let ind = []

  ind.push(nums.indexOf(target))
  ind.push(nums.lastIndexOf(target))
  return ind
}

console.log(searchRange([1,2], 2));

const maxprodsum = nums => {
  let max1 = -Infinity, max2 = -Infinity, max3 = -Infinity;
  let min1 = Infinity, min2 = Infinity
  for (let i=0; i<nums.length; i++) {
    if (nums[i] > max1) {
      [max1, max2, max3] = [nums[1], max1, max2]
    } else if (nums[i] > max2) {
      [max2, max3] = [nums[i], max2]
    } else if (nums[i] > max3) {
      max3 = nums[i]
    }
    if (nums[i] < min1) {
      [min2, min1] = [min1, nums[i]]
    } else if (nums[i] < min2) {
      min2 = nums[i]
    }
  }
  return Math.max(max1 * max2 * max3, max1 * min1 * min2)
}

console.log(maxprodsum([1,23, 56]));

const addDigits = num => {
  if (num == 0) return 0
  if (num % 9 == 0) return 9
  return num % 9
}
console.log(addDigits(1234))