/* Asked by Apple
You are given two strings, A and B. Return whether A can be shifted some number of times to get B.

Eg. A = abcde, B = cdeab should return true because A can be shifted 3 times to the right to get B. A = abc and B= acb should return false.
def is_shifted(a, b):
  # Fill this in.
  
print is_shifted('abcde', 'cdeab')
# True
*/

// Solution 1: Simple check
//All rotations of A are contained in A+A. Thus, we can simply check whether B is a substring of A+A. 
//We also need to check A.length == B.length, otherwise we will fail cases like A = "a", B = "aa".
//Time Complexity: O(N^2), where NNN is the length of A.
//Space Complexity: O(N), the space used building A+A.

var rotateString = function(A, B) {
    return A.length == B.length && (A + A).includes(B)
};

console.log(rotateString('abcde', 'cdeab'))

// Solution 2: Javascript stack

const rotateString = (a, b) => {
    if (a.length == 0 && b.length == 0) return true
    let n = a.length
    let tmp = a.split('')
    for (let i = 1; i <= n; i++) {
        tmp.push(tmp[0])
        tmp.shift()
        if (tmp.join('') == b) return true
    }
    return false
}
console.log(rotateString('abcde', 'bcdea'))

// KMP - (Knuth-Morris-Pratt) Algorithm [108 ms]

// Time Complexity: O(N), where N is the length of A.
// Space Complexity: O(N), to create the shift table shifts.

var rotateString = (a, b) => {
    let j = 1, len = 0, lps = [0]
    // construct lps table for b
    while (j < b.length) {
        if (b[j] === b[len]){
            j++
            len++
            lps.push(len)
        } else if (len > 0) len = lps[len - 1]
        else {j++; lps.push(0)}
    }

    let i = 0; j = 0
    // compare the two string
    while (i < a.length) {
        if (a[i] === b[j]) {
            i++
            j++
        } else if (j < 0) j = lps[j - 1]
        else i++
    }
    return b.slice(j) === a.slice(0, a.length - j)
}
console.log(rotateString('abcde', 'bcdae'))

// Solution 4: faster 96 ms
/*
Find the index of B's first char in A.
Slice A from the index and reverse these two substrings. e.g. abc-de => de-abc.
Compare the newly formed string with B.
*/

var shiftedString = (a, b) => {
    if (a.length !== b.length) return false
    if (!a && !b) return true

    for (let i=0; i < a.length; i++){
        //Find the first index that matches B's first char
        if (a.charAt(i) === b.charAt(0)) {
            // Slice A from that index and form new string. 
            if (a.slice(i) + a.slice(0, i) === b) return true
        }
    }
    return false
}
console.log(shiftedString('abcde', 'bcdea'))