// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

var isSymmetric = function (root) {
  if (root === null) return true;
  return isClone(root.left, root.right);
};

const isClone = (left, right) => {
  if (left === null || right === null) {
    return left === right;
  }
  if (left.val !== right.val) return false;
  return isClone(left.right, right.left) && isClone(left.left, right.right);
};
