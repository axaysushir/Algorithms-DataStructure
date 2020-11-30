var generateParenthesis = function(n) {
    let res = []
    backtrack('', n, n)
    return res
    function backtrack(parens, left, right) {
        if (left === 0 || right === 0) {
            res.push(parens)
            return
        }
        if (left > 0) backtrack(parens + '(', left -1, right)
        if (right > 0) backtrack(parens + ')', left, right + 1)
    }
}


console.log(generateParenthesis(8));


// var gen = n => {
//     let ans = []
//     let s = '', left = 0, right = 0
//     back()
    
//     return ans
//     function back(s='', left, right){
//         if (s.length = 2 * n) {
//             ans.push(s)
//             return 
//         }
//         if (left < n){
//             back(s + 'c', left + 1, right)
//         }
//         if (right < n){
//             back(s + ')', left, right + 1)
//         }
//     }
// }


// console.log(gen(3));