// Given a string, you need to reverse the order of characters in each 
// word within a sentence while still preserving whitespace and initial word order.
// by facebook
// Example 1: 
// Input: "The cat in the hat"
// Output: "ehT tac ni eht tah"
// Note: In the string, each word is separated by single space and there will not be any extra space in the string.
// LEETCODE 557:

var reverseWords = function(s) {
    if (s === '') return '';
    return s.split(' ').map(x => x.split('').reverse().join('')).join(' ')
}
s = "Let's take LeetCode contest"
console.log(reverseWords(s));

var ReverseWords = s =>
    !s.length
        ? s
        : s.split(' ')
            .reduce((res, word) => [...res, [...word].reduce((acc, ch) => ch + acc)], '')
            .join(' ')

s = "Let's take LeetCode contest"
console.log(ReverseWords(s));





// another problems
str = "The cat in the hat"
// reverse whole string
function reverse(str) {
  return str.split('').reverse().join('')
}
console.log(reverse(str)); //tah eht ni tac ehT

// [LEETCODE: 151] Given an input string, reverse the string word by word.
// input :  "the sky is blue"
// output : "blue is sky the"


var reverseWords = function(s) {
  return s.trim().split(' ').reverse().join(' ').replace(/ +/g, ' ')
}

var reverseWords = (s) => s.split(/\s+/g).filter(c => c !== "").reverse().join(" ");
console.log(reverseWords(str)); //hat the in cat The

const rWordsOfStr = s => {
    s = s.trim()
    let arr = []
    for (const i of s.split(' ')) {
        if (i != '') arr.push(i)
    }
    return arr.reverse().join(' ')
}



//python code
// class Solution:
//     def reverseWords(self, s: str) -> str:
//         return ' '.join([i[::-1] for i in s.split()])
// input: "Let's take LeetCode contest"
// Output : "s'teL ekat edoCteeL tsetnoc"

// solution 2
// class Solution():
//     def revWords(self, s):
//         result = ''
//         for word in s.split(' '):
//             result += word[::-1] + ' '
//         return result[:-1]

