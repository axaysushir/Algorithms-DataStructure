/*3. Longest Substring Without Repeating Characters - Medium

Given a string s, find the length of the longest substring without repeating characters.
Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
*/

var lengthOfLongestSubstring = function(s) {
    let res = 0, temp = [];
    for (let c of s) {
        let index = temp.indexOf(c)
        if (index > -1) {
            temp = temp.slice(index + 1)
        }
        temp.push(c)
        if (temp.length > res) res = temp.length
    }
    return res
}