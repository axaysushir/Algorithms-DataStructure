// Sorting a list with 3 unique numbers
// Given a list of numbers with only 3 unique numbers (1, 2, 3), sort the list in O(n) time.
// Input: [3, 3, 2, 1, 3, 2, 1]
// Output: [1, 1, 2, 2, 3, 3, 3]
// Dutch national flag problem DIJKSTRA ALOG

let array = [3,3,2,1,3,2,1], mid = 2, i=0, j=0, n= array.length - 1

while (j <= n) {
    if (array[j] < mid) {
        [array[i], array[j]] = [array[j], array[i]]
        i++
        j++
    } else if (array[j] > mid) {
        [array[n], array[j]] = [array[j], array[n]]
        n--
    } else j++
}
console.log(array)

const arr = [3,3,2,1,3,2,1]
// arr.sort()
// console.log(arr);

const count = arr.reduce((acc, curr) => {
    acc[curr]++
    return acc
}, {1: 0, 2:0, 3:0})
arr.forEach((_,j) => {
    if (j < count[1])
    arr[j] = 1
    else if (j < count[1] + count[2])
    arr[j] = 2
    else arr[j] = 3
})
console.log(arr);
