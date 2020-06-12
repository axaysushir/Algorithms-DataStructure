var calculator = function(s) {
    let res = 0, sign = 1, stack = [], signStack = []
    // s= s.replace(/\s/gim, '') regex to remove empty spaces
    for (let i = 0; i< s.length; i++) {
        if (s[i] === '-') sign = -1
        else if (s[i] === '+') sign = 1
        else if (s[i] >= '0' && s[i] <= '9') {
            let num = s[i]
            while (i+1 < s.length && s[i+1] >= '0' && s[i+1] <= '9'){
                num += s[i+1]
                i++
            }
            res += sign * parseInt(num)
        } else if (s[i] == '(') {
            stack.push(res)
            signStack.push(sign)
            res = 0
            sign = 1
        } else if (s[i] == ')') {
            res = stack.pop() + signStack.pop() * res;
        }
    }
    return res
}

let s = '- (3 + ( 2 - 1 ) )'
console.log(calculator(s));
