// Given a collection of intervals, merge all overlapping intervals.
// Input: [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
//  leetcode 56

var merge = function(intervals) {
    intervals.sort((a,b) => a[0] - b[0])
    const res = []
    let i = 0
    while (i < intervals.length) {
        const [iStart, iEnd] = intervals[i];
        let end = iEnd;
        let j = i + 1
        while (j < intervals.length && intervals[j][0] <= end) {
            end = Math.max(end, intervals[j][1])
            j++
        }
        res.push([iStart, end])
        i = j
    }
    return res
}

var intervals = [[1,3],[2,6],[8,10],[15,18]]
var intervals = [[1,4], [4,5]]
console.log(merge(intervals));
