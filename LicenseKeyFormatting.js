// 482: leetcode - License key formatting: asked by google
// You are given a license key represented as a string s that consists of only alphanumeric characters and dashes. The string is separated into n + 1 groups by n dashes. You are also given an integer k.
// We want to reformat the string s such that each group contains exactly k characters, except for the first group, which could be shorter than k but still must contain at least one character. Furthermore, there must be a dash inserted between two groups, and you should convert all lowercase letters to uppercase.
// Return the reformatted license key.

var licenseKeyFormatting = function(s, k) {
    let string = s.replace(/-/g, '').toUpperCase()
    let res = string.split('') // convert to arr
        
    for (let i = res.length-1 - k; i>=0; i-=k) {
        res[i] = res[i] + '-'
    }
    return res.join('')
};

console.log(licenseKeyFormatting("5f3x-2r-9-e"))