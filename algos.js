var long = function(s) {
    let res = 0
    let tmp = []
    for (const char of s) {
        const index = tmp.indexOf(char)
        if (index > -1) {
            tmp = tmp.slice(index + 1)
        }
        tmp.push(char)
        if (tmp.length > res) res = tmp.length
    }
}
