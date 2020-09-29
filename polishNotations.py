'''
Given an expression (as a list) in reverse polish notation, evaluate the expression. Reverse polish notation is where the numbers come before the operand. Note that there can be the 4 operands '+', '-', '*', '/'. You can also assume the expression will be well formed.

Example
Input: [1, 2, 3, '+', 2, '*', '-']
Output: -9
The equivalent expression of the above reverse polish notation would be (1 - ((2 + 3) * 2)).

'''
def evalRPN(tokens):
    stack = []
    for i in tokens:
        if i.lstrip('-').isnumeric():
            stack.append(int(i))

        else:
            a = stack.pop()
            # print(i)
            b = stack.pop()

            if i == '*':
                ans = a * b
            elif i == '+':
                ans = a + b
            elif i == '/':
                ans = a / b
            elif i == '-':
                ans = b - a
            
            stack.append(ans)
    
    return stack[len(stack) - 1]

print(evalRPN(['1', '2', '3', '+', '2', '*', '-']))