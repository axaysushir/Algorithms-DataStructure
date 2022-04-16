
// How do you find the duplicate numbers in an integer array?

// Solution 1:
function findDuplicateNum(nums) {
  let sortedNums = nums.sort() // sort the numbers arr
  let res = [] // store result in array

  for (let i=0; i<sortedNums.length; i++) {
    // compare each element with next element start from index 0 in sorted array
    // if two elements are same then add it in result
    if (sortedNums[i] == sortedNums[i+1]) {
      res.push(sortedNums[i])
    }
  }
  return res
}
console.log(findDuplicateNum([1,2,2,3,4,1,5,3]));
// [1, 2, 3]


// Solution 2: Using Set

const findDuplicate = nums => {
  // create set seen
  let seen = new Set()
  let res = []
  // iterate nums array
  for (let num of nums) {
    // check if seen has element in it, if yes then add that num to res
    if (seen.has(num)) {
      res.push(num)
    }
    seen.add(num) // else add num to seen
  }
  // return result as a new set so that it does not contain duplicates
  // items multiple times like in this case res = [1,1,2,2]
  return [...new Set(res)]
}

console.log(findDuplicate([1,2,1,4,3,2]));
// [1,2]
