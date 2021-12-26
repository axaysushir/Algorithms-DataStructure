// 58. Length of Last Word

// Given a string s consisting of some words separated by some number of spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.

// Example 1:

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.

// Example 2:

// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4

var lengthOfLastWord = function(s) {
    arr = s.split(' ')
    return arr.filter(x => x !== '').pop().length
    
};

console.log(lengthOfLastWord("   fly me   to   the moon  "))