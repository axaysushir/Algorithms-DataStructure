let search = function(nums, target) {
  let index = 0;
  for (let i=0; i< nums.length; i++) {
    if (nums[i] == target) return i
    else if (target > nums[i]) {
      index = i+1
      if (target < nums[i+1]) return index
    }
  }
  return index;
}