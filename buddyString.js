// Given two strings A and B of lowercase letters, return true if and only if we can swap two letters in A so that the result equals B.
// Input: A = "ab", B = "ba"
// Output: true
// Input: A = "", B = "aa"
// Output: false

var buddyString = function(A, B) {
    if (A === '') return false;
    if (A.length !== B.length) return false;
    if (A === B) return A.length !== new Set(A).size;

    let charA
    let charB
    let count = 0
    for (let i=0; i < A.length; i++) {
        if (A[i] !== B[i]) {
            count += 1
            if (!charA) {
                charA = A[i]
                charB = B[i]
            } else {
                if (charA !== B[i] || charB !== A[i]) return false
            }
        }
    }
    return count === 2 ? true : false
}


