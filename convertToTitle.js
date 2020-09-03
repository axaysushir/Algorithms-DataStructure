/* Asked by Amazon:
MS Excel column titles have the following pattern: A, B, C, ..., Z, AA, AB, ..., AZ, BA, BB, ..., ZZ, AAA, AAB, ... etc. 
In other words, column 1 is named "A", column 2 is "B", column 26 is "Z", column 27 is "AA" and so forth. Given a positive 
integer, find its corresponding column name. 
Examples: 
Input: 26
Output: Z

Input: 51
Output: AY

Input: 52
Output: AZ

Input: 676
Output: YZ

Input: 702
Output: ZZ

Input: 704
Output: AAB

*/

var convertToTitle = n => {
    var alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var m , result = []
    while (n > 0){
        m = (n - 1) % 26
        n = (n - 1 - m) /26
        result.unshift(alphabets[m])
    }
    return result.join("")
}

console.log(convertToTitle(704))