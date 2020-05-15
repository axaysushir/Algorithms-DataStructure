function longest(str) {
    let prefix = ''
    if (str.length === 0) return prefix;
    for (let i=0; i < str[0].length; i++) {
        const char = str[0][i];
        for (j=0; j < str.length; j++) {
            if (str[j][i] !== char) return prefix;
        }
        prefix = prefix + char;
    }
    return prefix
}