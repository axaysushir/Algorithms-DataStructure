// Given an integer, check if that integer is a palindrome. 
//For this problem do not convert the integer to a string to check if it is a palindrome.

let isPalindrome = x => {
    if (x< 0) return false
    return x === reverseInteger(x)
}

let reverseInteger = x => {
    let reverse = 0
    while (x > 0){
        reverse = (reverse * 10) + (x % 10)
        x = Math.floor(x / 10)
    }
    return reverse
}

console.log(isPalindrome(1232));