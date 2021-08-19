/* Leetcode -  91: Decpde Ways
A message containing letters from A-Z can be encoded into numbers using the following mapping:

'A' -> "1"
'B' -> "2"
...
'Z' -> "26"

To decode an encoded message, all the digits must be grouped then mapped back into letters using the reverse of the mapping above (there may be multiple ways). For example, "11106" can be mapped into:

    "AAJF" with the grouping (1 1 10 6)
    "KJF" with the grouping (11 10 6)

Note that the grouping (1 11 06) is invalid because "06" cannot be mapped into 'F' since "6" is different from "06".

Given a string s containing only digits, return the number of ways to decode it.

Example 2:

Input: s = "226"
Output: 3
Explanation: "226" could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).

*/

var numDecodings = function(s, i = 0, memo = []) {
    if (i in memo) return memo[i]
    if (s[i] === '0') return 0;
    if (i >= s.length -1) return 1;
    memo[i] = numDecodings(s, i+1, memo) + (s[i] + s[i+1] <= 26 ? numDecodings(s, i+2, memo) : 0);
    return memo[i]
};

console.log(numDecodings('12'));

let decode = s =>{ 
    let array = [];
  if (s.charAt(0) === '0') {
    return 0;
  }
  array[0] = 1;

  for (let i = 1; i < s.length; i++) {
      let twoDigitNum = Number(s.substring(i - 1, i + 1));

      if (s.charAt(i) === '0') {
        return 0
      } else if (twoDigitNum > 9 && twoDigitNum < 27) {
        array[i] = array[i - 1] + (array[i - 2] || 1);
      } else {
        array[i] = array[i - 1];
      }
  }
  return array[s.length - 1];
}

console.log(decode('12'));