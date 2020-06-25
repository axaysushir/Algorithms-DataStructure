// move zero element at last of the array
var moveZeros = function(nums) {
    let n = nums.length;
    for (let i=0; i<n-1; i++) {
        if (nums[i] === 0) {
            let j = i+1
            while (nums[j] == 0 && n-1 > j){
                j++
            }
            nums[i] = nums[j]
            nums[j] = 0
        }
    }
    return nums
}



// 2nd
const moveZeros = nums => {
    for (let i = nums.length; 0 <= i; i--){
        nums[i] == 0 && nums.splice(i, 1) && nums.push(0) // add to end of the array
    }
    return nums
}
nums = [0,1,0,3,0,12]
console.log(moveZeros(nums));

// swaping

const moveZeroes = nums => {
    const swap = (arr, i, j) => {
        [arr[i], arr[j]] = [arr[j], arr[i]];
    };

    let nonZeroes = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            swap(nums, i, nonZeroes);
            nonZeroes++;
        }
    }
    return nums
};

nums = [0,1,0,3,0,12]
console.log(moveZeroes(nums));


var moveZeros = function(nums) {
    for (let i=0; i < nums.length -1; i++) {
        if (nums[i] === 0){
            for (j=i+1; j < nums.length; j++) {
                if (nums[j] !== 0) {
                    let tmp = nums[i]
                    nums[i] = nums[j]
                    nums[j] = tmp
                    break
                }
            }
        }
    }
    return nums
}
nums = [0,1,0,3,12]
console.log(rem(nums));

