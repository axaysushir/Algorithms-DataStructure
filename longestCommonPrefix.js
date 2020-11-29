// Given a list of strings, find the longest common prefix between all strings.

var longestCommonPrefix = str => {
    let prefix = ''
    if (str.length === 0) return prefix

    for (let i=0; i<str[0].length; i++) {
        const character = str[0][i]
        for (let j=0; j< str.length; j++){
            if (str[j][i] !== character) return prefix
        }
        prefix = prefix + character
    }
    return prefix
}

console.log(longestCommonPrefix(['helloworld', 'hellokitty', 'hell']))
// hell
console.log(longestCommonPrefix((['daily', 'interview', 'pro'333])))
// ''