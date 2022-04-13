function permutation(s, ans) {
  if (s.length == 0) return s
  var rest, char;
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

const permute = (s) => {
  if (s.length == 0 || s.length < 2) return s
  let ans = []
  for (let i=0; i<s.length; i++) {
    let char = s[i]

    // remove duplicates
    if (s.indexOf(char) !== i) continue
    let remChar = s.slice(0, i) + s.substr(i+1, s.length)
    console.log('rem', remChar);
    for (let item of permute(remChar)) {
      ans.push(char + item)
    }
  }
  return ans
}
console.log(permute('abc', ''));
