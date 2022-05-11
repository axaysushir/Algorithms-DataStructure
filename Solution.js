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
  console.log(findLargestNumber([1,5,6,10,2,4,12]));
  // 12



// Using inbuilt Sorting method

// To find the largest element from the array, a simple way is to arrange the elements in ascending order. 
// After sorting, the first element will represent the smallest element, the next element will be the second smallest, 
// and going on, the last element will be the largest element of the array.

function findLargestElement(arr) {
    arr.sort((a, b) => a-b)
}