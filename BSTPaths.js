/*
Given the root of a binary tree, return all root-to-leaf paths in any order.
A leaf is a node with no children.

Example 1:

Input: root = [1,2,3,null,5]
Output: ["1->2->5","1->3"]

Example 2:

Input: root = [1]
Output: ["1"]

*/

var binaryTreePaths = function (root) {
  let paths = [];
  if (root === null) return paths;
  dfs(root, "", paths);
  return paths;
};

function dfs(root, path, paths) {
  path += root.val;
  if (root.left === null && root.right === null) {
    paths.push(path);
    return;
  }
  if (root.left !== null) {
    dfs(root.left, path + "->", paths);
  }
  if (root.right !== null) {
    dfs(root.right, path + "->", paths);
  }
}

const del = head => {
  var node = new ListNode(-1)
  var ans = node, pre = head, cur = head;
  while (cur) {
    while (cur.next && cur.next.val === cur.next.val) cur = cur.next;
    if (pre == cur) {
      ans.next = cur
      ans = ans.next;
    }
  }
  ans.next = null;
  return node.next;
}

const fizz = n => {
  let ans = []
  for (let i=1; i<=n; i++) {
    let div3 = (i%3==0)
    let div5 = (i%5 == 0)
    if (div3 && div5) {
      ans.push('fizzBuzz')
    } else if (div3) ans.push('fizz')
    else if (div5) ans.push('Buzz')
    else ans.push(i.toString())
  }
  return ans
}
