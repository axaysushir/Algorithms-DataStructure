// Given a string with a certain rule: k[string] should be expanded to string k times. So for example, 3[abc] should be expanded to abcabcabc. Nested expansions can happen, so 2[a2[b]c] should be expanded to abbcabbc.
// BY GOOGLE
// Your starting point:
// def decodeString(s):
//   # Fill this in.

// print decodeString('2[a2[b]c]')
// # abbcabbc

/**
Traversal the string s and push into a stack for non-] character
When we meets the ] character, we should do these steps:
    pop all characters until meets [
    pop all numbers to get the repeat count
    repeat the substring and push it back to stack
Finally, we join all the pieces in the stack
**/

const decodeString = s => {
    const stack = []
    for (var char of s) {
        if (char !== ']') {
            stack.push(char);
            continue;
        }
        let cur = stack.pop()
        let str = ''
        while (cur !== '[') {
            str = cur + str
            cur = stack.pop()
        }
        let num = ''
        cur = stack.pop()
        while (!Number.isNaN(Number(cur))) {
            num = cur + num
            cur = stack.pop()
        }
        stack.push(cur)
        stack.push(str.repeat(Number(num)))
    }
    return stack.join('')
}

s = "3[a]2[bc]"
console.log(decodeString(s));