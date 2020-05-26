// Evaluate the value of an arithmetic expression in Reverse Polish Notation.
// Valid operators are +, -, *, /. Each operand may be an integer or another expression.
// Input: ["2", "1", "+", "3", "*"]     Input: ["4", "13", "5", "/", "+"]
// Output: 9                            Output: 6
// Explanation: ((2 + 1) * 3) = 9       Explanation: (4 + (13 / 5)) = 6

var evalRPN = function(tokens) {
    var n = tokens.length;
    if (!n) return 0;
    var stack = []
    for (var i=0; i < n; i++) {
        var item = tokens[i]
        if ('+-*/'.indexOf(item) === -1) stack.push(item * 1);
        else {
            var right = stack.pop()
            var left = stack.pop()
            if (item === '+') stack.push(left + right)
            else if (item === '-') stack.push(left - right)
            else if (item === '/') stack.push(~~(left / right)) // ~12 bitwise not operator  	Inverts the bits of its operand
            else if (item === '*') stack.push(left * right)
        }
    }
    return stack[0]
}

let tokens = ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]
console.log(evalRPN(tokens))