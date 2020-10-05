// Asked by microsoft
// Given a string, determine if there is a way to arrange the string such that the string is a palindrome. 
// If such arrangement exists, return a palindrome (There could be many arrangements). Otherwise return None.


var isPlaindrome = (str) => { 
    // Start form leftmost and rightmost corner of str
    let left = 0
    let right = str.length - 1
    // keep comparign charcter while they are same
    while (right > 1) {
        if (str[left++] !== str[right--]) {
            return console.log('is not palindrome', str)
        }
    }
    return str
}

console.log(isPlaindrome('abbccbba'))