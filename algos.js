var roman = function(s) {
    const array = s.split('')
    let total = 0;
    let current, currentV, nxt, nxtV;

    for (let i=0; i < array.length; i++) {
        current = array[i]
        currentV = conversion[current]
        nxt = array[i+1]
        nxtV = conversion[nxt]

        if (currentV < nxtV) total -= currentV
        else total += currentV
    }
    return total
}