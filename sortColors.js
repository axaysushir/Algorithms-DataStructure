// Given an array with n objects colored red, white or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white and blue.

// Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

// Note: You are not suppose to use the library’s sort function for this problem.

// Can you do this in a single pass?

// Example:
// Input: [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]

// use counting sort for two pass solution
let sortColors = (A, m = new Map(), i = 0) => {
    A.forEach(x => m.set(x, 1 + (m.get(x) || 0)));
    [0, 1, 2].forEach(x => {
        let cnt = m.get(x);
        while (cnt--)
            A[i++] = x;
    });
};


// 1 pass
let sort_colors = function(nums) {
    let red = 0, white = 0, blue = nums.length - 1

    while (white <= blue) {
        if (nums[white] == 0) {
            swap(red++, white--)
        } else if (nums[white] == 1){
            white++
        } else if (nums[white] == 2) {
            swap(blue--, white)
        }
    }

    function swap(a,b) {
        let temp = nums[a]
        nums[a] = nums[b]
        nums[b] = temp
    }
}
nums = [2,0,2,1,1,0]
console.log(sort_colors(nums));


