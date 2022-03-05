var addstring = (num1, num2) => {
    let ans = '', carry  =0, substr = 1
    const long = Math.max(num1.length, num2.length)

    while (substr <= long) {
      let n1 = (substr > num1.length) ? 0 : Number(num1[num1.length] - substr)
      let n2 = (substr > num2.length) ? 0 : Number(num2[num2.length] - substr)
      const digit = n1 + n2 + carry;
      carry = (digit >= 10) ? 1 : 0;
      ans = String(digit%10) + ans;
      substr++

    }
    ans= (carry === 1) ? '1' + ans : ans
    return ans
  }

console.log(addstring('123', '123'));


// Solution 2:
function addStr(num1, num2) {
  let i = num1.length - 1;
  let j = num2.length - 1;
  let carry = 0, res = ''

  while (i >= 0 || j >= 0) {
    let sum = carry;
    // convert to ascii
    if (i >= 0) sum += num1.charAt(i--) - '0'
    if (j >= 0) sum += num2.charAt(j--) - '0';
    console.log('sum', sum);
    res += sum % 10;
    carry = Math.floor(sum /10)
  }
  if (carry !== 0) res += carry;
  console.log('r', res.toString());
  return res.split('').reverse().join('')
}
console.log(addStr('110', '129'));
