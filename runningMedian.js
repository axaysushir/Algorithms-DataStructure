// Hi, here's your problem today. This problem was recently asked by Google:
// By Google
// You are given a stream of numbers. Compute the median for each new element .

// Eg. Given [2, 1, 4, 7, 2, 0, 5], the algorithm should output [2, 1.5, 2, 3.0, 2, 2, 2]

var num = [2, 1, 4, 7, 2, 0, 5]
class MedianFinder {
    constructor() {
        // set up array
        this.arr = []
    }

    addNum(num) {
        // check if arr is size 0, just push
        if (this.arr.length === 0){
            return this.arr.push(num)
        }

        // left and right pointer for binary search
        let l = 0;
        let r = this.arr.length;
        
        //keep going until pointer meet
        while (l < r) {
            // get mid point
            const mid = Math.floor((l + r) / 2)
            // check if we can insert at mid
            if (num > this.arr[mid]) {
                // search  right half of array
                l = mid + 1
            } else {
                r = mid // search left half of mid
            }
        }
        // we can insert at left pointer
        this.arr.splice(l, 0, num)
    }

    findMedian() {
        // if odd return middle, if even return average of two middle
        const mid = Math.floor(this.arr.legnth / 2)
        return (this.arr.length & 1) === 1 ? this.arr[mid] : (this.arr[mid] + this.arr[mid - 1] / 2)
    }
}
// 
var obj = new MedianFinder()
obj.addNum(num)
var param_2 = obj.findMedian()
