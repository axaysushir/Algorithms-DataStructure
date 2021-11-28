// You are climbing a stair case. It takes n steps to reach to the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
// Approach 1: Brute Force
// In this brute force approach we take all possible step combinations i.e. 1 and 2, at every step. At every step we are calling the function climbStairs for step 111 and 222, and return the sum of returned values of both functions.
// climbStairs(i,n)=(i+1,n)+climbStairs(i+2,n) where i defines the current step and n defines the destination step.

// brute force Time complexity : O(2n). Size of recursion tree will be 2^n
var climbStairs = function (n) {
  return climb(0, n);
};
let climb = function (i, n) {
  if (i > n) return 0;
  if (i == n) return 1;
  return climb(i + 1, n) + climb(i + 2, n);
};

// Recursion with memoization O(n)  Size of recursion tree can go upto n.
// Space complexity : O(n) the depth of recursion tree go upto n
var climbStairs = function (n) {
  let memo = [];
  return climb(0, n, memo);
};

var climb = function (i, n, memo) {
  if (i > n) return 0;
  if (i == n) return 1;
  if (memo[i] > 0) return memo[i];
  memo[i] = climb(i + 1, n, memo) + climb(i + 2, n, memo);
  return memo[i];
};

console.log(climbStairs(5));

// Dynamic programming
// one can reach ith step in one of the two ways
// Tking a single step from (i-1)th step
// Tking a 2 step from (i-2)th step
//  SO total number of ways to reach ith is equal to sum of ways of reaching
// (i-1) th + (i-2)th step
// let dp[i] denotes number of ways to reach ith step
// dp[i] = dp[i-1] + dp[i-2]

var climbStairs = function (n){
    if (n == 1) return 1
    let dp = [n+1] // initalize arr with n+1 because it's zero based index
    dp[1] = 1
    dp[2] = 2
    for (let i=3; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2]
    }
    return dp[n]
}
console.log(climbStairs(25));


