/*
Minimum Window Substring

Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

The testcases will be generated such that the answer is unique.

A substring is a contiguous sequence of characters within the string.

Example 1:

Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.

Example 2:

Input: s = "a", t = "a"
Output: "a"
Explanation: The entire string s is the minimum window.

Example 3:

Input: s = "a", t = "aa"
Output: ""
Explanation: Both 'a's from t must be included in the window.
Since the largest window of s only has one 'a', return empty string.
*/

var minWindow = function(s, t) {
    let map = {}
    t.split('').forEach(c => map[c] = (map[c] || 0)+1)
    
    let count = t.length;
    let l = 0, r = 0, start = 0, minLen = Infinity;

    while (r < s.legnth) {
        if (map[s[r++]]-- > 0) count--

        while (count === 0) {
            if (r-l < minLen) {
                minLen = r - l;
                start = l
            }
            if (map[s[l++]]++ === 0) count++
        }
    }

    return minLen === Infinity ? '' : s.substr(start, minLen)
};

unction minWindow(s, t) {
    var ans = '';
    
    // 1. process hashmap
    var map = {};
    t.split('').forEach(ch => map[ch] = (map[ch] || 0) + 1);
    var count = Object.keys(map).length;
    
    // 2. traverse s to find boundaries
    // both l & r are inclusive
    var l = 0;
    var r = -1;
    
    while (r < s.length) {
        if (count === 0) {
            // good condition
            // l~r contains t
            
            // update ans
            if (!ans || r - l + 1 < ans.length) {
                ans = s.slice(l, r + 1);
            }
            
            // get rid of curr ch and then move l
            if (map[s[l]] !== undefined) {
                map[s[l]]++;
            }
            if (map[s[l]] > 0) {
                count++;
            }
            l++;
            
        } else {
            // bad condition
            // l~r doesn't contain t
            
            // move r and add new ch
            r++;
            if (map[s[r]] !== undefined) {
                map[s[r]]--;
            }
            if (map[s[r]] === 0) {
                count--;
            }
        }
    }
    return ans;
}