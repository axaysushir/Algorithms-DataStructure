// Asked by apple
// Given a string, we want to remove 2 adjacent characters that are the same, 
// and repeat the process with the new string until we can no longer perform the 
// operation.


var s = 'cabba'

var removeAdjDuplicate = (s) => {
    const result = []    // Initialize stack
    for (const char of s) {
        if (result[result.length - 1] === char) {
            result.pop()
            continue
        }
        result.push(char)
    }
    return result.join('')
}

console.log(removeAdjDuplicate(s));
// Time complexity O(n)