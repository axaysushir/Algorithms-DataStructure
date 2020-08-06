/**
 * BY Facebook / leetoce- 45
 * Starting at index 0, for an element n at index i, you are allowed to jump at most n indexes ahead. Given a list of numbers, find the minimum number of jumps to reach the end of the list.

Example:
Input: [3, 2, 5, 1, 1, 9, 3, 4]
Output: 2
Explanation:

The minimum number of jumps to get to the end of the list is 2: 
3 -> 5 -> 4

*/
// Solution1 : O(n)

var jump = nums => {
    if (nums.length == 1) return 0;
  
    var jumps = 0
    var maxReach = nums[0]
    var steps = nums[0]
  
    for (var i=1; i < nums.length - 1; i++) {
      maxReach = Math.max(maxReach, i + nums[i])
      steps--
      if (steps == 0){
        jumps++
        steps = maxReach - i
      }
    }
    return jumps + 1
  }
  
// Solution 2:
var minJump = nums => {
     //Note, you can assume that you can always reach the last index. count is the total steps.
     var max = nums[0], len = nums.length, startIndex = 0, endIndex = nums[0], count = 1
     if (len < 2) return 0

     //Every time we calculate the range that next jump will result in;
    //max stores the maximum index that next jump can reach, which is the next range's right boundary;
    //Next range's left boundary will be current range's right boundary plus 1; then add 1 step to count;
    //Thus we get the next range. Before loop next range we check if its right boundary is bigger or equal to the largest index in nums (len - 1);
    //If true exit loop and return count (steps);

    while (max < len - 1){
        var n = startIndex, m= endIndex;
        startIndex = endIndex + 1
        for (var i= n; i <= m; i++){
            if(i + nums[i] > max) {
                max = i + nums[i]
                endIndex = max
            }
        }
        count++
    }
     return count
}
  
  nums = [3, 2, 5, 1, 1, 9, 3, 4]
  console.log(minJump(nums));