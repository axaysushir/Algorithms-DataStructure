function countFrequency(str, ch) {
    let count = 0;
    for (let i=0; i<str.length; i++) {
        if (str[i] == ch) count++
    }
    return count
  }
  var frequencySort = function(s) {
    let n = s.length
    let arr = new Array(n)
    let res = []
    for (let i=0; i < n; i++) {
        arr[i] = [countFrequency(s, s[i]), s[i]]
    }
    arr.sort()
  
    arr.forEach((item) => {
        res.push(item.pop())
        console.log(res.toString().split('').reverse().join(''))
        
    })
    return res.reverse()
  }
  
  
//   var frequencySort = function(s) {
//       let map = {}
//       for (let char of s) {
//           if (!map[char]) {
//               map[char] = 1
//             } else map[char]++
//         }
        
//         let sorted = Object.entries(map).sort((a,b) => {
//             return b[1] - a[1]
//         })
//         console.log(map, sorted)
//         let res =''
//         for (let arr of sorted) {
//             while (arr[1] > 0) {
//                 res += arr[0]
//                 arr[1]--
//             }
//         }
//         return res
//     }
    console.log(frequencySort('tree'))