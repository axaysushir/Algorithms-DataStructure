var generateParenthesis = function(n) {
  const res = []
  backtrack('', n, n)
  return res;

  function backtrack(parens, left, right){
    if (left === 0 && right === 0) {
      res.push(parens)
      return 
    }
    if (left > 0) backtrack(parens + '(', left - 1, right)
    if (right > left) backtrack(parens + ')', left, right- 1)
  }
}

x = generateParenthesis(3)
console.log(x)