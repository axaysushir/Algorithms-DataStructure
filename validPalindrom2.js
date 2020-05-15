// Facebook interview
// Valid Palindrome II
// Fraction to recurring decimal
const checkPalindorme = function(s, start, end) {
    while ( start < end) {
      if (s[start] != s[end]) return false
      start++;
    end--;
    }
    return true
  }
  
  const validPalindrome = function(s) {
    let start = 0;
    let end = s.length -1;
  
    while (start < end) {
      if (s[start] != s[end]) {
        // CHECK IF START, END -1 || START +1, END IS PALINDORME
        return checkPalindorme(s, start, end - 1) || checkPalindorme(s, start + 1, end)
      }
      start++
      end--
    }
    return true
  }
  
  let s= 'eddfeg'
  console.log(validPalindrome(s));
  
  
  
  
  
  
  
  
  
  
  
  
  // not work for all input
//   var validPalindrome = function(s) {
//     for (let i=0; i< s.length/2; i++) {
//          let j = s.length - 1 -i
//         if (s.charAt(i) != s.charAt(j - 1- i)) {
//            return (isPalindrome(s, i+1, j)) || isPalindrome(s, i, j-1)
//         }
//     }
//     return true
//   };
  
//   var isPalindrome = function(s, i, j) {
//     for(let k=i; k <= i + (j-1)/2; k++) {
//         if (s.charAt(k) != s.charAt(j - k + 1)) return false
//     }
//     return true
//   }