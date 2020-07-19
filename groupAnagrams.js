// Given a list of words, group the words that are anagrams of each other. (An anagram are words made up of the same letters).

// Example:

strs = ['abc', 'bcd', 'cba', 'cbd', 'efg']
// Output: [['abc', 'cba'], ['bcd', 'cbd'], ['efg']]

// Time complexity: O(NK log K)
// Space complexity: O(NK)

var groupAnagrams = function(strs) {
    let obj = {}
    for (let str of strs){
        // this will convert 'eat' into 'e','a','t' and then sort it to 'a','e','t' and then join to 'ate'
        // we do this so the sorted anagram key will always be the same. Other related anagrams will have the same key
        let letters = str.split('').sort().join('');
         // if we have a mapping that exists for the anagram group, push the item to that group, 
        // else create a new array and append the word
        obj[letters] ? obj[letters].push(str) : obj[letters] = [str]
    }
    // returns all the mappings as a unified array.
    return Object.values(obj);
}

var groupAnagrams = (strs) => { 
    const map = new Map()
    for (const str of strs) {
        const sorted = [...str].sort().join('')
        map.has(sorted) ? map.get(sorted).push(str) : map.set(sorted, [str])
    }
    return [...map.values()]
}

console.log(groupAnagrams(strs));

// by using counting of str

// Time complexity: O(NK)
// Space complexity: O(NK)

const GropupAnagrams = strs => {
    const map = {}
    strs.forEach(s => {
        const key = new Array(26).fill(0)
        for (char of s) key[char.charCodeAt(0) - 97]++
        map[key] ? map[key].push(s) : map[key] = [s]
    })
    return Object.values(map)
}

// Python
// import collections
// class Solution(object):
//     def groupAnagrams(self, strs):
//         ans = collections.defaultdict(list)
//         for s in strs:
//             ans[tuple(sorted(s))].append(s)
//         return ans.values()