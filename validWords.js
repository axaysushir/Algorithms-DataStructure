// Given a dictionary of strings dict[] and a character array arr[]. Print all valid words of the dictionary that are possible using characters from the given character array.
// Examples:
//     Input: dict – [“go”, “bat”, “me”, “eat”, “goal”, boy”, “run”]
//     arr[] = [‘e’, ‘o’, ‘b’, ‘a’, ‘m’, ‘g’, ‘l’]
//     Output: “go”, “me”, “goal”.
//     Explanation: Only all the characters of these three strings are present in the dictionary.
//
//     Input: Dict=  [“goa”, “bait”, “mess”, “ate”, “goal”, “girl”, “rain”]
//     arr[]= [‘s’, ‘o’, ‘t’, ‘a’, ‘e’, ‘g’, ‘l’, ‘i’, ‘r’]
//     Output: “goa”, “ate”, “goal”, “girl”

// Concatenate all the characters and make a string.
// Traverse each word in a string and find whether all the characters of each word are present in concatenated string or not.
//
// Follow the illustration shown below for better understanding.
//
// Illustration: Consider the example below.
//
// dict[] = [“go”, “bat”, “eat”, “meat”, “goal”, “boy”, “run”],
// arr[] = [‘e’, ‘o’, ‘b’, ‘a’, ‘m’, ‘g’, ‘l’]
//
//     concatenated string= e o b a m g l
//     now if we traverse “go”
//     indexOf(“g”) in “eobamgl” is 5
//     indexOf(“o”) in “eobamgl” is 1
//     This means all the indexes are present. Hence we will print “go”
//     If any of the indexes are not present, that will not be included.
//     Similarly “me” and “goal” also satisfies the condition.
//
// So the output is “go”, “goal” and “me”.

function formWord(str, s) {
  for (let i=0; i<str.length; i++) {
    if (s.indexOf(str[i]) < 0) return
  }
  console.log(str);
  return str
}

function findWord(str1, str2) {
  let s = ''
  for (let i in str2) {
    s += str2[i]
  }
  for (let i=0; i<str1.length; i++) {
    formWord(str1[i], s)
  }
}
var str1 = ["go", "bat", "me", "eat",
                "goal", "boy", "run"];
var str2 = ["e", "o", "b", "a", "m", "g", "l"];
console.log(findWord(str1, str2))
