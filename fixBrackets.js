/*
Given a string with only ( and ), find the minimum number of characters to add or subtract to fix the string such that the brackets are balanced.

Example:
Input: '(()()'
Output: 1
Explanation:

The fixed string could either be ()() by deleting the first bracket, or (()()) by adding a bracket. These are not the only ways of fixing the string, there are many other ways by adding it in different positions!

// Solution:
Keep track of the balance of the string: the number of '(''s minus the number of ')''s. 
A string is valid if its balance is 0, plus every prefix has non-negative balance.

The above idea is common with matching brackets problems, but could be difficult to find if you haven't seen it before.

Now, consider the balance of every prefix of S. If it is ever negative (say, -1), we must add a '(' bracket. 
Also, if the balance of S is positive (say, +B), we must add B ')' brackets at the end.
*/


var minAddToMakeValid = function(S) {
    let ans = 0, bal = 0
    for (let i=0; i < S.length; i++){
        bal += S.chartAt(i) == '(' ? 1: -1;
        // if it is guaranteed bal >= -1
        if (bal == -1){
            ans++
            bal++
        }
    }
    return ans + bal
};
console.log(minAddToMakeValid('(()()'));

// Python solution
// class Solution(object):
//     def minAddToMakeValid(self, s):
//         ans = bal = 0
//         for symbol in s:
//             bal += 1 if symbol == '(' else -1
//             if bal == -1:
//                 ans += 1
//                 bal += 1
//         return ans + bal




// Time Complexity: O(N), where N is the length of S.

// Space Complexity: O(1). 
