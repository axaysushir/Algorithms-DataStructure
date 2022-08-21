var rob = function(nums) {
    if (nums.length == 0) return nums[0]
    const dp = (arr, start, end) => {
        let max = 0, max2 = 0, temp
        for (let i=start; i<arr.length - end; i++) {
            temp = Math.max(arr[i]+ max, max2)
            max = max2
            max2 = temp
        }
        return max2
    }
    return Math.max(dp(nums, 0, 1), dp(nums, 1, 0))
}

if(nums.length === 1) return nums[0]
    const helper = (houses , start , end) => {
      let max1 = 0, max2 = 0 , temp;
     for(let i = start; i < houses.length - end ; i++){
      temp = Math.max(houses[i] + max1 , max2)
      max1 = max2
      max2 = temp
     }
     return max2
    }
    return Math.max(helper(nums , 0 , 1) , helper(nums , 1 , 0))