// Given a sorted list of size n, with m unique elements (thus m < n), modify the list such that 
// the first m unique elements in the list will be sorted, ignoring the rest of the list. Your solution 
// should have a space complexity of O(1). Instead of returning the list (since you are just modifying 
// the original list), you should return what m is.

let nums = [1,1,1,1,1,1,1,1,1]//[1, 1, 2, 3, 4, 4, 4, 4, 4, 5, 5, 6, 7, 9]

let duplicates = nums.filter((item, index) => nums.indexOf(item) === index)

console.log(duplicates);

var rem = nums => {
    if (nums.length === 0) return false
    let i = 0
    for (let j=1; j <nums.length; j++) {
        if (nums[i] !== nums[j]){
            i++
            nums[i] = nums[j]
        }
    }
    return i+1
}

console.log(rem(nums));