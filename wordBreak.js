/*
139. Word Break - Medium

Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

Note that the same word in the dictionary may be reused multiple times in the segmentation.

Example 1:

Input: s = "leetcode", wordDict = ["leet","code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".

Example 2:

Input: s = "applepenapple", wordDict = ["apple","pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
Note that you are allowed to reuse a dictionary word.
*/

var wordBreak = function(s, wordDict) {
    let table = new Array(s.length + 1).fill(false)
    table[0] = true;

    for (let i=0; i<s.length; i++) {
        if (table[i] === true) {
            for (let word of wordDict) {
                if (s.slice(i, i+word.length) === word) {
                    table[i+word.length] = true
                }
            }
        }
    }
    return table[s.length]
}

console.log(worBreak('leetcode', 'leet-code'));

// memoization:
const wordBreak = function(s, wordDict, index = 0, memo= new Set()) {
    if (memo.has(index)) return false;
    if (index == s.length) return true;

    for (let i= wordDict.length-1; i>= 0; i--) {
        const word = wordDict[i]
        if (s.substr(index, word.length) !== word) continue;
        if (wordBreak(s, wordDict, index+word.length, memo)) return true
    }
    memo.add(index)
    return false
}