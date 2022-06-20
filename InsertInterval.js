/* Insert Interval:
You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

Return intervals after the insertion.

 

Example 1:

Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]

Example 2:

Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]
Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
*/
var insert = function(intervals, newInterval) {
    let i=0, start = newIntervals[0], end = newIntervals[1], res=[]
// check every intervals end value if less then the start value of newInterval so just add into list 
    while (i < intervals.length && intervals[i][1] < start) {
        res.push(intervals[i++])
    }
     // when we reach the point then check for over lapping and create new end by comparing every intervals 
     // end value and start by comparing every intervals start value 
    while (i < intervals.length && intervals[i][0] <= end) {
        start = Math.min(intervals[i][0], start)
        end = Math.max(end, intervals[i][1])
        i++
    }
    // once u find new interval after removing overlapping of intervals just add into list
    res.push([start, end])
    while (i < intervals.length) {
        res.push(intervals[i++])
    }
    return res
}

intervals = [[1,3],[6,9]], newInterval = [2,5]
console.log(insert(intervals, newInterval));

const mergeklist = list => {
    const merge = (l1, l2) => {
        if (!l1 || !l2) return l1 || l2;
        let node = {}
        const root = node;
        while (l1 && l2) {
            if (l1.val <= l2.val) {
                node.next = l1;
                l1 = l1.next;
            } else {
                node.next = l2;
                l2 = l2.next;
            }
            node = node.next
        }
        if (l1) node.next = l1;
        if (l2) node.next = l2;
        return root.next
    }
    let root = lists[0]
    for (let i=1; i<lists.length; i++) {
        root = merge(root, lists[i])
    }
    return root || null;
}