// A look-and-say sequence is defined as the integer sequence beginning with a single digit in which the next term is obtained by describing the previous term. An example is easier to understand:
// Asked By GOOGLE
// Each consecutive value describes the prior value.
// 1      #
// 11     # one 1's
// 21     # two 1's
// 1211   # one 2, and one 1.
// 111221 # #one 1, one 2, and two 1's.

// Your task is, return the nth term of this sequence.


let countAndSay = function(n) {
    let finalString = '1'
    if (n == 1) return finalString

    let characterPointer = 0
    let countPointer = 0
    let stringInProgress = ''

    while (n > 1) {
        while (countPointer < finalString.length) {
            while (finalString.charAt(characterPointer) == finalString.charAt(countPointer)) {
                countPointer++
            }
            stringInProgress += (countPointer - characterPointer).toString()
            stringInProgress += finalString.charAt(characterPointer)
            characterPointer = countPointer
        }

        finalString = stringInProgress
        // reset all val
        stringInProgress = ''
        n--
        characterPointer = 0
        countPointer = 0
    }
    return finalString
}
console.log(countAndSay(4));

// recursive with regex
var LookAndSay = function(n) {
    if (n === 1) return '1'
    return LookAndSay(n-1).match(/1+|2+|3+/g).reduce((acc, nums) => acc += `${nums.length}${nums[0]}`, '')
}


var LookSay = function(n) {
    var parse = '1'
    for ( var i = 1; i < n; i++ ) {
        parse = parse
            .match(/(.)\1+|./g)
            .map( x => x.length + x[0] )
            .join('')
    }  
    return parse
}
console.log(LookSay(4));
// recursive
const countAndSay = (n) => {
    let str = '1'
    if (n == 1) return str;
    let newStr = ''
    let count = 0
    let say = str[0]

    for (let i=0; i < str.length; i++) {
        if (str[i] === say) count += 1
        else {
            newStr += count + say
            count = 1
            say = str[i]
        }
    }
    return countAndSay(n - 1, newStr + count + say)
}

console.log(countAndSay(4));
