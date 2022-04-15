/*
Question: Find largets number in array
create local variable max to store min value, here we can
use infinity as minimum value of max.
traverse the given array till last element and for each ele compare it with
max, if current ele is greater then max, replace value of max with current element
at the end return max

Time complexity: O(N) to travese the array completely
Space complexity: O(1), only extra variable max is created which will take O(1) space
If use merge sort it will take O(n log n) time
*/
const findLargestNumber = arr => {
    let max = -Infinity
    for (let i=0; i<arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i]
      }
    }
    return max
  }
  console.log(findLargestNumber([1,5,6,12,2]));
  // 12


// Find larget using Merge sort O(n log n) time complexity
/*
1. Merge sort divides the array in to two sub arrays and later divides each array in to another two arrays
   until a bunch of single element arrays are left like [3], [2], [1], [5], [6], [4]
2. It start comparing two element at a time and concat into single array. [3] & [2] are compared and concat into [2,3]
   [1] & [5] compared and merge into [1,5] and so on
3. Again it compare and concat two-two arrays & concat into single array like [2,3] & [1,5] compared and merged into [1,2,3,5]
  it compare all subarray to get final array like [1,2,3,4,5,6]
4. Now array is sorted and last element is larget element to be returned
*/
let LargestElement = (nums) => {
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
    return mergeSort(nums)[nums.length-1];

}

console.log(LargestElement([3,2,1,5,6,4]))
// 6
