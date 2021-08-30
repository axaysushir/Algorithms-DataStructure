/*
Given a non-empty list of words, return the k most frequent words. The output should be sorted from highest to lowest frequency, and if two words have the same frequency, the word with lower alphabetical order comes first. Input will contain only lower-case letters.

Example: 
Input: ["daily", "interview", "pro", "pro", 
"for", "daily", "pro", "problems"], k = 2
Output: ["pro", "daily"]
*/

// Solution 1: Map with reduce

var topKFrequent = function(words, k){
    const hash = words.reduce((map, word) => {
        if (map.has(word)) map.set(word, map.get(word) + 1)
        else map.set(word, 1)
        return map
    }, new Map())

    const sorted = [...hash].sort((a, b) => {
        if (a[1] > b[1]) return -1
        if (a[1] < b[1]) return 1
        if (a[0] > b[0]) return 1
        if (a[0] < b[0]) return -1
        return 1
    })
    return sorted.slice(0, k).map(([x]) => x)
}

// Solution 2: Hash & Sorting

var topKFrequent = (words, k) => {
    let hash = {}
    
    // insert uniq data inhashmap
    for (let i=0; i< words.length; i++){
        let temp = (hash[words[i]] ? hash[words[i]] : 0) + 1
        hash[words[i]] = temp
    }

    // loop through all the key of hashmap
    let result = Object.keys(hash).sort((next, previous) => {
        // First check for value count, if it is same check for key comparison
        if (hash[previous] - hash[next] == 0) {
            return next.localeCompare(previous)
        } else {
            return hash[previous] - hash[next]
        }
    })
    // Slice the index from 0 to Kth index which is length
    return result.slice(0, k)
}
