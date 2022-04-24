function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var invertTree = function (root) {
  if (root === null) return null;
  const left = invertTree(root.left);
  const right = invertTree(root.right);
  root.left = right;
  root.right = left;
  return root;
};

//   DFS O(n)
var invertTree = function (root) {
  let stack = [root];
  while (stack.length) {
    let n = stack.pop();
    if (!n) continue;

    [n.left, n.right] = [n.right, n.left];
    stack.push(n.left, n.right);
  }
  return root;
};

// BFS
function invertTree(root) {
  const queue = [root];
  while (queue.length) {
    let n = queue.shift();
    if (n != null) {
      [n.left, n.right] = [n.right, n.left];
      queue.push(n.left, n.right);
    }
  }
  return root;
}

// recursion
var invertTree = function (root) {
  if (root === null) return root;
  [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
  return root;
};

var i = 3
function c(j) {
  j = 4
}
c(i)
console.log(i);

var MyClass = function (n) {
  this.n = n;
}
MyClass.square = function () {
  return this.n * this.n
}
var object = new MyClass(4)
alert(object.square)

if (!!1234)
