// Leetcode - 215 - Kth Largest Element in an Array
// Given an integer array nums and an integer k, return the kth largest element in the array.
// Note that it is the kth largest element in the sorted order, not the kth distinct element.

var findKthLargest = (nums, k) => {
    if (!nums.length) return;
    return quickSelect(nums, 0, nums.length-1, k)
}

function quickSelect(nums, start, end, k) {
    if (start === end) return nums[start]
    let left = start, right = end, pivot = nums[Math.floor((start+end)/2)]

    while (left <= right) {
        while(left <= right && nums[left] > pivot) left++
        while (left <= right && nums[right] < pivot) right-- 
        if (left <= right) {
            let temp = nums[left]
            nums[left] = nums[right]
            nums[right] = temp
            left++
            right--
        }
    }
    if (start +k-1 <= right) return quickSelect(nums, start, right, k)
    if (start + k-1 >= left) return quickSelect(nums, left, end, k-(left-start))
    return nums[right+1]
}

let kthLargest = (nums, k) => {
    function mergeSort(arr) {
        if(arr.length === 0 || arr.length === 1) return arr;
        
        const mid = Math.floor(arr.length/2);
        const left = mergeSort(arr.slice(0, mid));
        const right = mergeSort(arr.slice(mid));
        
        let result = [];
        let l = 0;
        let r = 0;
        
        while(l < left.length && r < right.length) {
            
            if(left[l] < right[r]) {
                result.push(left[l]);
                l++;
            } else {
                result.push(right[r]);
                r++;
            }
        }
        
        result = result.concat(left.slice(l));
        result = result.concat(right.slice(r));
        return result;
    }
    return mergeSort(nums)[k-1];

}

nums = [3,2,1,5,6,4], k = 2
console.log(kthLargest(nums, k));


// Merge sort in Javascript:
function mergeSort(arr) {
    if (arr.legnth === 0 || arr.length === 1) return arr;
    let mid = Math.floor(arr.length /2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))

    let res = [], l = 0, r = 0;
    while (l < left.length && r < right.length) {
        if (left[l] < right[r]){
            res.push(left[l])
            l++
        } else {
            res.push(right[r])
            r++
        }
    }
    res = res.concat(right.slice(r))
    res = res.concat(left.slice(l))
    return res
}

console.log(mergeSort([3,2,1,5,6,4]))

