// You are given a string s, and an integer k. Return the length of the longest substring in s that contains at most k distinct characters.
// By Amazon
// For instance, given the string:
// aabcdefff and k = 3, then the longest substring with 3 distinct characters would be defff. The answer should be 5.

var legnthOfLongestSubstringKDistinct = function(s, k) {
    // use slideing window approachto solve pointer i, j
    // j go to right when sum of char <= k
    // update max length
    // i go to right when num of char > k
    let n = s.length;
    let res = 0;
    let numOfChars = 0;
    let counts = {}
    let i = 0
    for (let j = 0; j < n ; j++) {
        let c = s.charAt(j)
        if (!counts[c]) {
            counts[c] = 1;
            numOfChars++
        } else counts[c]++

        while (numOfChars > k) {
                var cI = s.charAt(i) // ci = charat string i
                counts[cI] --
                if (counts[cI] == 0) {
                    numOfChars--
                }
            i++
        }
        res = Math.max(res, j-i +1)
    }
    return res
}

let s = 'aabcdefff', k = 3
console.log(legnthOfLongestSubstringKDistinct(s, k));
// # 5 (because 'defff' has length 5 with 3 characters)