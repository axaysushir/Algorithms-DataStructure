// A criminal is constructing a ransom note. In order to disguise his handwriting, he is cutting out letters from a magazine.

// Given a magazine of letters and the note he wants to write, determine whether he can construct the word.

var canConstruct = (magazine, note) => {
    for (let i=0; i< note.length; i++) {
        if (magazine.indexOf(note[i]) === -1) {
            return false
        } else magazine.splice(magazine.indexOf(note[i]), 1)
    }
    return true
}

console.log(canConstruct(['a', 'b', 'c', 'd', 'e', 'f'], 'bed'))
// true
console.log(canConstruct(['a', 'b', 'c', 'd', 'e', 'f'], 'cat'))
// false