let subarray = (nums, k) => {
    let count = 0
    let sum = 0
    let map = new Map();
    map.set(0, 1)
    for (let i=0; i<nums.length; i++) {
        sum += nums[i]
        let target = sum - k
        if (map.has(target)) count += map.get(target)
        if (!map.has(target)) map.set(sum, 0)
        map.set(sum, map.get(sum) + 1)
    }
    return count;
}