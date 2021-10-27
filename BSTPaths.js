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
