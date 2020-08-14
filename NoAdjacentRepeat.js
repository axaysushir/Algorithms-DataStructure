/*
Given a string, rearrange the string so that no character next to each other are the same. If no such arrangement is possible, then return None.

Example:
Input: abbccc
Output: cbcbca
def rearrangeString(s):
  # Fill this in.

print rearrangeString('abbccc')
# cbcabc

*/

var recognizeString = function (s) {
    let map = generateFrequencymap(s)
    let charByFrequency = Object.keys(map).sort((a, b) => map[b] - map[a])
    let res = new Array(s.length) // initialize as empty array
    let characterIndex = 0

    // go thriugh each charcter in s.length
    for (let i =0; i<s.length; i++) {
        // select a character, starting with the most frequently occuring one
        const totalOccurance = map[charByFrequency[i]]

         // place all occurrences of the total character in an either even or odd position.
        // we fill all the even spaces up in the array first, then all the odd
        for (let j=0; j < totalOccurance; j++) {
            // if fill all the evens, and are about to exceed the length of our array, we need to start filling the odds
            // the odds start at 1, so we set our character index there.
            // We will never exceed S.length when we are filling the odd indexes up, because there are not enough characters to do that
            if (characterIndex >= s.length) characterIndex = 1

            // set the result at characterIndex to the current character
            res[characterIndex] = charByFrequency[i]
            // whether we are currently filling odds or evens, we need to iterate by 2.
            characterIndex += 2
        }
    }
    // check if the same character appears twice in a row
    for (let i=1; i< res.length; i++){
        if (res[i] === res[i-1]) return "";
    }
    // return res in string form 
    return res.join('')
}

function generateFrequencymap(str) {
    let map = {}
    for (let i=0; i< str.length; i++){
        if (map[str[i]] !== undefined) {
            map[str[i]]++
        } else {
            map[str[i]] = 1
        }
    }
    return map
}

s = 'abbccc'
console.log(recognizeString(s));

var noAdjRepeatChar = function(S) {
    let map = {}
    for(let s of S){
        map[s] = map[s] ? [s, map[s][1] + 1] : [s, 1]
    }
    let array = Object.values(map)
    array.sort((a,b) => (b[1] - a[1]))
    
    let result = "", previous = ""
    for(let i = 0; i < S.length; i++){
        let j = 0, find = false
        while(j < array.length){
            if(array[j][0] !== previous && array[j][1] > 0){
                find = true
                break
            }
            j += 1
        }
        if(!find) {
            return ""
        }
        result += array[j][0]
        array[j][1] -= 1
        previous = array[j][0]
        if(j < array.length - 1 && array[j][1] < array[j+1][1]){
            [array[j], array[j+1]] = [array[j+1], array[j]]
        }
    }
    return result
};

S = 'aabbcc'
console.log(noAdjRepeatChar(S));