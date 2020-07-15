// Given a list of words, and an arbitrary alphabetical order, verify that the words are in order of the alphabetical order.

// Example:
// Input:
// words = ["abcd", "efgh"], order="zyxwvutsrqponmlkjihgfedcba"

// Output: False
// Explanation: 'e' comes before 'a' so 'efgh' should come before 'abcd'

// Example 2:
// Input:
// words = ["zyx", "zyxw", "zyxwy"],
// order="zyxwvutsrqponmlkjihgfedcba"

// Output: True
// Explanation: The words are in increasing alphabetical order

// solution O(n*m*p)  space: O(P)
// n = words.length, m = average word length, p = order 

const isAlienSorted = (words, order) => {
    const alphabet = {}
    for (let i = 0; i< order.length; i++) {
        alphabet[order[i]] = i
    }

    for (let i=0; i< words.length - 1; i++) {
        let first = words[i]
        let second = words[i+1]
        let minLength = Math.min(first.length, second.length)
        let comparison = false
        for (let j=0; j < minLength; j++) {
            if (first[j] === second[j]) continue
            comparison = true
            if (alphabet[first[j]] > alphabet[second[j]]) return false
            break
        }
        if (!comparison && first.length > second.length) return false
    }
    return true
}

// solution 2:
const isSorted = (words, order) => {
    for (let i=0; i< words.length - 1; i++) {
        // check adjacent words
        let word1 = words[i]
        let word2 = words[i+1]
        // if adj word are not in the right order return false
        if (!isRightOrder(word1, word2, order)) return false
    }
    // after checking every adj pair return true
    return true;
}

const isRightOrder = (word1, word2, order) => {
    // get the longer words length
    let length = word1.length > word2.length ? word1.length : word2.length

    for (let i=0; i < length; i++) {
        // get the index of the letter from each word
        let index1 = order.indexOf(word1[i])
        let index2 = order.indexOf(word2[i])

        // if index of word1 letter is already smaller than index of word2, return true
        // no need to check further
        if (index1 < index2) return true
        // if index of word1 letter is already bigger than index of word2, return false
        // no need to check further
        if (index1 > index2) return false
    }
    // after checking all the letters of both words, return true
    return true
}

console.log(isSorted(["zyx", "zyxw", "zyxwy"], "zyxwvutsrqponmlkjihgfedcba"));