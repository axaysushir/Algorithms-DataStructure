// for given unsorted array find the target number index where 
// it can be place 
// nums = 1,2,3,4,5 target = 6 result index = 5
let nums = [1,2,3,4,5]
let target = 9

let searchInsert = function(nums, target) {
    let index = 0
    for (let i =0; i < nums.length; i++) {
        if (nums[i] == target) return i;
        else if (target > nums[i]) {
            index = i + 1;
            if (target < nums[i+1]) return index;
        }
    }
    return index;
}

let search = (nums, target) => {
    return (
        nums.indexOf(target) &&
        nums
        .concat(target)
        .sort((a, b) => a - b)
        .indexOf(target)
    );
}

x= searchInsert(nums, target)
console.log(x)