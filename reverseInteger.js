var reverseInteger = x => {
    let nagative = x < 0;
    let reverse = 0;

    if (nagative) x *= -1
    while (x > 0) {
        reverse = (reverse*10) + (x % 10)
        x = Math.floor(x/10)
    }

    if (reverse > (2 ** 31 - 1)) return 0

    return nagative ? (reverse * -1) : reverse
    
}

console.log(reverseInteger(-123))