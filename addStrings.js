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