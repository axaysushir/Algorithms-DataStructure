// find first non repeating characters

const No_of_chars = 256;

function firstNonRepeating(str) {
  let arr = new Array(No_of_chars)
  for (let i=0; i<No_of_chars; i++) {
    arr[i] = [0, 0]
  }
  for (let i=0; i<str.length; i++) {
    arr[str.charCodeAt(i)][0]++;
    arr[str.charCodeAt(i)][1] = i;
  }

  let res = Number.MAX_VALUE;
  for (let i=0; i<No_of_chars; i++) {
    if (arr[i][0] == 1) {
      res = Math.min(res, arr[i][1])
    }
  }
}

var firstUniqChar = s => {
  let map = new Map()

  for (let char of s) {
    if (map.has(char)) {
      map.set(char, map.get(char) + 1)
    } else {
      map.set(char, 1)
    }
  }

  for (let char of s) {
    if (map.get(char) === 1) return s.indexOf(char)
  }
  return -1
}
console.log(firstUniqChar('loveleetcode'));
