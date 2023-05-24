// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.

function expandAroundCenter(s, left, right) {
    while (left >= 0 && right < s.length && s.charAt(left) === s.charAt(right)) {
        left--
        right++
    }
    return right -left - 1
}

function longestPalindrome(s) {
    let start = 0, maxlen = 0
    if (s.length < 1 || s == null || s == undefined) return ""
    for (let i=0; i< s.length; i++) {
        let len1 = expandAroundCenter(s, i, i)
        let len2 = expandAroundCenter(s, i, i+1)
        let len = Math.max(len1, len2)

        if (len > maxlen) {
            maxlen = len
            start = i - Math.floor((len-1)/2)
        }
    }
    return s.substr(start, maxlen)
}
