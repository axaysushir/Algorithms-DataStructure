/*  convert roma nums to integer
Given a Roman numeral, find the corresponding decimal value. Inputs will be between 1 and 3999. 
Example: 
Input: IX
Output: 9

Input: VII
Output: 7

Input: MCMIV
Output: 1904
Roman numerals are based on the following symbols: 
I     1
IV    4
V     5
IX    9 
X     10
XL    40
L     50
XC    90
C     100
CD    400
D     500
CM    900
M     1000
*/

const conversion = {"M": 1000, "D": 500, "C": 100, "L": 50, "X": 10, "V": 5, "I": 1}

var romanToInt = function(s) {
    const array = s.split('');
    let total = 0
    let current, currentValue, next, nextValue;

    for (let i=0; i < array.length; i++) {
        current = array[i]
        currentValue = conversion[current]
        next = array[i+1]
        nextValue = conversion[next]

        if (currentValue < nextValue) total -= currentValue
        else total += currentValue
    }
    return total
};

let s = 'IV'
console.log(romanToInt(s));


// Integer to Roman

const romanMap = new Map([
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
]);

var integerToRoman = num => {
    let romanBuild = []
    romanMap.forEach((val, key) => {
        var roman = Math.floor(num/key)
        if (roman >= 1){
            romanBuild.push(val.repeat(roman))
            num -= roman * key
        }
    })
    return romanBuild.join('')
}

console.log(integerToRoman(1000));