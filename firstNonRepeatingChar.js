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
