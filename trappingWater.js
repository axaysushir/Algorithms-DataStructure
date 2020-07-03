// You have a landscape, in which puddles can form. You are given an array of non-negative integers representing the elevation at each location. Return the amount of water that would accumulate if it rains.
// Aksed by UBER
// For example: [0,1,0,2,1,0,1,3,2,1,2,1] should return 6 because 6 units of water can get 
// Solution using Dynamic Programming O(N)
// 96ms
let trap = function(height) {
    if (height === null) return 0
    let totalWater = 0;
    let length = height.length;
    let leftMax = []
    let rightMax = []
    leftMax[0] = height[0]

    for  (let i=1; i< length; i++) {
        leftMax[i] = Math.max(height[i], leftMax[i - 1])
    }
    rightMax[length - 1] = height[length - 1]
    for (let i= length - 2; i >= 0; i--) {
        rightMax[i] = Math.max(height[i], rightMax[i+1])
    }
    for (let i=1; i< length -1; i++) {
        totalWater += Math.min(leftMax[i], rightMax[i]) - height[i]
    }
    return totalWater
}
// 76 ms
var trap = function(height) {
    let res= 0
    let max = 0
    let maxIndex= 0
    // get max index
    for (let i= height.length - 1; i >= 0; i--) {
        if (height[i] > max) {
            max = height[i]
            maxIndex = i
        }
    }
    // left loop
    let leftMax = 0
    for (let i=0; i < maxIndex; i++) {
        if (height[i] > leftMax) {
            leftMax = height[i]
        } else if (height[i] < leftMax) {
            res += leftMax - height[i]
        }
    }

    // right loop
    let rightMax = 0
    for (let i= height.length - 1; i > maxIndex; i--) {
        if (height[i] > rightMax) rightMax = height[i]
        else if (rightMax > height[i]) res += rightMax - height[i]
    }
    return res
}

let height = [0,1,0,2,1,0,1,3,2,1,2,1]
console.log(trap(height));
