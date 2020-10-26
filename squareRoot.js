// Given a positive integer, find the square root of the integer without using any built in square root or power functions (math.sqrt or the ** operator). Give accuracy up to 3 decimal points.
// Here we start from 1 and increase it until we will encounter a point where target*target > x. Then, because we overshot our target by 1, we return result - 1.
// Time complexity is O(sqrt(n)).

let squareRoot = x => {
    let res = 1
    while (res * res <= x) res++
    return res - 1
}

// using binary serach  -*/++
/*
It starts search in [0, x], then takes following steps:

It takes number in the middle: res = Math.ceil((start + end)/2).
Checks if res is the number we need - it will happen only if res^2 <= x AND (res + 1)^2 > x. Return if correct.
Otherwise check if it overshot target or not. If not, reduce search segment to [res, end] (i.e. it now knows that every number before res will be less than number we search, so it now searches only for numbers of res or higher).
Else if it overshot, search in segment [start, res].
Repeat until required number found.
Time complexity is O(log2(n)).
*/

const sqroot = x => {
    let start = 0
    let end = x
    let res = 0
    while (start < end) {
        res = Math.ceil((start + end) /2)
        if (res * res <= x && (res + 1)*(res + 1) > x) return res
        if (res * res < x) start = res
        else end = res
    }
    return res.toFixed(4)
}

console.log(sqroot(5));