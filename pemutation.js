function permutation(s, ans) {
  if (s.length == 0) return s
  var rest;
  for (let i=0; i<s.length; i++) {
    let char = s[i]
    let leftSubstr = s.slice(0, i)
    let rightSubstr = s.slice(i+1)
    // console.log(leftSubstr, rightSubstr);
    rest = leftSubstr + rightSubstr
    permutation(rest, ans+ char)
  }
}

console.log(permutation('abc', ''));
