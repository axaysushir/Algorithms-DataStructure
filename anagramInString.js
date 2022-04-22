// given two string find if it's anagram of each other.
function checkAnagram(a, b) {
  if (a.length !== b.length) return null;
  let str1 = a.split('').sort().join('')
  let str2 = b.split('').sort().join('')
  if (str1 == str2) return true
  return false
}

console.log(checkAnagram('india', 'ndiai'));
