/*
1221. Split a String in Balanced Strings
Easy

Balanced strings are those that have an equal quantity of 'L' and 'R' characters.

Given a balanced string s, split it in the maximum amount of balanced strings.

Return the maximum amount of split balanced strings.

 

Example 1:

Input: s = "RLRRLLRLRL"
Output: 4
Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.

Example 2:

Input: s = "RLLLLRRRLR"
Output: 3
Explanation: s can be split into "RL", "LLLRRR", "LR", each substring contains same number of 'L' and 'R'.
*/

var balancedStringSplit = function(s) {
    let bal = 0, count = 0
    for (let i=0; i<s.length; i++) {
        let curr = s.charAt(i)
        if (curr == 'L') count++
        else if (curr == 'R') count--
        if (count == 0) bal++
    }
    return bal
};