// You are given an array of integers. Return an array of the same size where the element at each index is the product of all the elements in the original array except for the element at that index.

// For example, an input of [1, 2, 3, 4, 5] should return [120, 60, 40, 30, 24].

// You cannot use division in this problem.


// 1: Initialize the empty answer array where for a given index i, answer[i] would contain the product of all the numbers to the left of i.
// 2: We construct the answer array the same way we constructed the L array in the previous approach. These two algorithms are exactly the same 
// except that we are trying to save up on space.
// 3: The only change in this approach is that we don't explicitly build the R array from before. Instead, we simply use
//  a variable to keep track of the running product of elements to the
//  right and we keep updating the answer array by doing answer[i]=answer[i]∗Ranswer[i] = answer[i] * Ranswer[i]=answer[i]∗R. For a given index i, 
// answer[i] contains the product of all the elements to the left and R would contain product of all the elements to the right. We then update R as R=R∗nums[i]

// Time complexity : O(N) where N represents the number of elements in the 
// input array. We use one iteration to construct the array L, one to update the array answeransweranswer.
// Space complexity : O(1) since don't use any additional array for our computations. The problem 
// statement mentions that using the answer array doesn't add to the space complexity. 

// space apprroach o(1)
var productExceptSelf = function(nums) {
    var n = nums.length;
    var ans = []
    
    ans[0] = 1;
    for (let i=1; i< n; i++) {
        ans[i] = nums[i-1] * ans[i-1]
    }
    
    var right = 1;
    for (let i = n -1; i >=0; i--) {
        ans[i] = ans[i] * right
        right *= nums[i]
    }
    return ans
};

let a = productExceptSelf([1, 2, 3, 4, 5])
console.log(a);

// solution 2
var product = function(nums) {
    let res = []
    nums.reduce((leftP, curr, i) => {
        res[i] = leftP;
        return leftP * curr;
    }, 1)

    nums.reduceRight((rightP, curr, i) => {
        res[i] *= rightP;
        return rightP * curr
    }, 1)
    return res
}