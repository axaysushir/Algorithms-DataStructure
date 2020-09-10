/*
Given a binary tree, find the most frequent subtree sum. 

Example:
   3
  / \
 1   -3

The above tree has 3 subtrees. The root node with 3, and the 2 leaf nodes, which gives us a total of 3 subtree sums. The root node has a sum of 1 (3 + 1 + -3), the left leaf node has a sum of 1, and the right leaf node has a sum of -3. Therefore the most frequent subtree sum is 1.

If there is a tie between the most frequent sum, you can return any one of them.
*/

var findFrequentTreeSum = root => {
   if (!root) return []
   let obj = {}
   let recur = root => {
      if (root) {
         let left = rec(root.left)
         let right = rec(root.right)
         let sum = root.val + left + right;
         obj[sum] = (obj[sum] || 0) + 1
         return sum
      }
      return 0
   }
   recur(root)

   let min = -Infinity
   let output = []
   for (let i in obj) {
      if (obj[i] > min){
         min = obj[i]
         output = [i]
      } else if (obj[i] === min){
         output.push(i)
      }
   }
   return output
}