// Find target number in Clone trees

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var getTargetCopy = (original, cloned, target) => {
    if (!original || !cloned) return 
    if (original.val === target.val) return cloned
    else return getTargetCopy(orignal.left, cloned.left, target) || getTargetCopy(original.right, cloned.right,target)
}