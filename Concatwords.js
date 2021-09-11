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