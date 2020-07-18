// You are given a string of parenthesis. Return the minimum number of parenthesis that would need to be removed in order to make the string valid. "Valid" means that each open parenthesis has a matching closed parenthesis.
// asked by Uber
// Example:

// "()())()"

// The following input should return 1.
// ")("

// imperative solution O(n) O(1)

function balanced(str) {
    var open = 0, closed = 0;
    for (const char of str) {
        char === '(' ? open++ : (open ? open-- : closed++)
    }
    return open + closed;
}
str= "()())()"
console.log(balanced(str));

// declarative
function balanced(str) {
    const open = counts => (counts[0]++, counts)
    const close = counts => (counts[0] ? count[0]-- : counts[1]++)
    const counter = (counts, char) => char === '(' ? open(counts) : close(counts)
    const sum = arr => arr[0] + arr[1]
    const char = str => [...str]
    return sum(chars(str)).reduce(counter, [0,0])
}

// functional
function balanced(str) {
    const counter = ([open, closed], char) => {
        (char === '(' ? open++ : (open ? open-- : closed++), [open, closed])
    }
    const res = [...str].reduce(counter, [0,0])
    return res[0] + res[1]
}

const numberOfUnbalanced = brackets => brackets
    .split('')
    .reduce(([open, closed], b) => {
        return b === '('
        ? [open + 1, closed]
        : open
        ? [open -1, closed]
        : [open, closed +1]
    }, [0, 0])
    .reduce((sum, b) => sum + b)
brackets = "()())()"
console.log(numberOfUnbalanced(brackets));