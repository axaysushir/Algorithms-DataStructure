// Given a numerator and a denominator, find what the equivalent decimal representation is as a string. 
// If the decimal representation has recurring digits, then put those digits in brackets (ie 4/3 should 
// be represented by 1.(3) to represent 1.333...). Do not use any built in evaluator functions like python's eval. 
// You can also assume that the denominator will be nonzero.

function fractToDecimal(numerator, denominator) {
    if (numerator === 0) return '0'

    let s = ''
    if (Math.sign(numerator) !== Math.sign(denominator)) s+= '-'

    let n = Math.abs(numerator)
    const d = Math.abs(denominator)
    s += Math.floor(n/d)
    s %= d

    if (n === 0) return s
    s += '.'

    const map = {}
    while (n !== 0){
        map[n] = s.length

        n *= 10
        s += Math.floor(n/d)
        n %= d

        const i = map[n] // repeat starting index
        if (i != null) return `${s.slice(0, i)}(${s.slice(i)})`
    }
    return s
}

console.log(fractToDecimal(2, 1));