var rotate = (nums, k) => {
    let a = k > nums.length ? k % nums.length : k;
    let shifted = nums.splice(nums.length - a)
    console.log(shifted);
    nums.unshift(...shifted) 
}

console.log(rotate([1,2,3,4], 2));