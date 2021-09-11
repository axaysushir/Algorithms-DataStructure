// Find concatenated words in dictionary
// use set for lookup
// if isConcat on each word. if word's prefix in dict adn see if suffix can also be conact
// use dict as memo when find word made vai concat store it in dict
// and last when loop through the words, rememeber to delet and add word form set brfore and after isCocat called.

const findConcatenatedWordsInDict = words => {
    const dict = new Set(words)
    const isConcat = word => {
        if (dict.has(word)) return true
        for (let i=0; i<word.length; i++) {
            let prefix = word.slice(0, i+1)
            if (dict.has(prefix)) {
                let suffix = word.slice(i+1)
                let res = isConcat(suffix)
                if (res) {
                    dict.add(word)
                    return true
                }
            }
        }
        return false;
    }

    const results = []
    for (const word of words) {
        dict.delete(word)
        if (isConcat(word)) results.push(word)
        dict.add(word)
    }
    return results;
}

input = ['rat', 'cat', 'cats', 'dog', 'catsdog', 'dogcat', 'dogcatrat']
console.log(findConcatenatedWordsInDict(input));
// [ 'catsdog', 'dogcat', 'dogcatrat' ]

// solution 2:
const findConcat = words => {
    const set = new Set(words)

    const helper = (word, num=0) => {
        if (!word) return num > 1;
        let temp = ''
        // build temp word by appending char
        for (let i=0; i<word.length; i++) {
            temp += word[i]
            if (set.has(temp)) {
                let sub = word.substr(i+1)
                if (helper(sub, num+1)) return true
            }
        }
        return false
    }
    const ans = []
    words.forEach(w => {
        if (helper(w)) ans.push(w)
    })
    return ans
}

words = ['rat', 'cat', 'cats', 'dog', 'catsdog', 'dogcat', 'dogcatrat']
console.log(findConcat(words));