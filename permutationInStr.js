// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

// In other words, return true if one of s1's permutations is the substring of s2.

 

// Example 1:

// Input: s1 = "ab", s2 = "eidbaooo"
// Output: true
// Explanation: s2 contains one permutation of s1 ("ba").

// Example 2:

// Input: s1 = "ab", s2 = "eidboaoo"
// Output: false

var checkInclusion = (s1, s2) => {
    let l = 0, r = 0, flag;
    const count = new Map()
    for (let c of s1) {
        count.set(c, count.get(c)+1 || 1)
    }

    while (r < s2.length) {
        if (!count.has(s2[l]) && !flag) {
            r = l++
            continue
        }
        flag = true

        while (count.has(s2[r])){
            count.set(s2[r], count.get(s2[r])-1)
            if (count.size == 0) return true;
            r++
        }
        count.set(s2[l], count.get(s2[l])+1 || 1)
        l++
    }
    return false
}