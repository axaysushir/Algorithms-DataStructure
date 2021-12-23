// Have the function WaveSorting(arr) take the array of positive integers stored in arr and return the string true if the numbers can be arranged in a wave pattern: a1 > a2 < a3 > a4 < a5 > ..., 
// otherwise return the string false.

function WaveSorting(arr) {
    let len = arr.length;

    let countObj = {}
    arr.forEach(val => {
        if (!countObj[val]){
            countObj[val] = 1
        } else countObj[val]++
    })
    let count = []
    for (let key in countObj) {
        count.push(countObj[key])
    }
    let maxCount = Math.max(...count)
    return maxCount > len / 2 ? false : true;
}