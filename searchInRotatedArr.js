var search = function(nums, target) {
    let left = 0, right = nums.length-1;
    while (left <= right) {
        let mid = Math.floor((left+right)/2);
        if (nums[mid] == target) return mid;
        if (nums[mid] < nums[right]) {
            if (target <= nums[right] && target > nums[mid]) left = mid + 1
            else right = mid-1
        } else {
            if (target >= nums[left] && target > nums[mid]) right = mid-1
            else left = mid+1
        }
    }
    return -1
}

console.log(search([4,5,6,7,0,1,2], 0));