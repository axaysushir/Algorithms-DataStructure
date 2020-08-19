/* Asked by Amazon
You are given an array of integers. Return the length of the longest consecutive elements sequence in the array.

For example, the input array [100, 4, 200, 1, 3, 2] has the longest consecutive sequence 1, 2, 3, 4, and thus, you should return its length, 4.
def longest_consecutive(nums):
  # Fill this in.

print longest_consecutive([100, 4, 200, 1, 3, 2])
# 4
*/

// Solution 1: using sorting

var lonesrConsecutive = nums => {
    if (nums.length == 0 ) return 0
    
    nums.sort((a, b) => a - b)
    let longestStreak = 1
    let currentStreak = 1

    for (let i= 1; i < nums.length; i++){
        if (nums[i] != nums[i-1]) {
            if (nums[i] == nums[i-1] + 1){
                currentStreak += 1
            } else {
                longestStreak = Math.max(longestStreak, currentStreak)
                currentStreak = 1
            }
        }
    }
    return Math.max(longestStreak, currentStreak)
}

nums = [100, 4, 200, 1, 3, 2]
console.log(lonesrConsecutive(nums));
/*
ime complexity : O(nlgn)O(nlgn)O(nlgn).

The main for loop does constant work nnn times, so the algorithm's time complexity is dominated by the invocation of sort, which will run in O(nlgn)O(nlgn)O(nlgn) time for any sensible implementation.

Space complexity : O(1)O(1)O(1) (or O(n)O(n)O(n)).

For the implementations provided here, the space complexity is constant because we sort the input array in place. If we are not allowed to modify the input array, we must spend linear space to store a sorted copy.
*/

// Solution 2: Using Hashset

let lonesrConsecutiveSequence = nums => {
    let set = new Set()
    for (let num of nums) {
        set.add(num)
    }

    let longestStreak = 0

    for (let num of set){
        if (!set.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1

            while (set.has(currentNum + 1)){
                currentNum += 1
                currentStreak += 1
            }
            longestStreak = Math.max(longestStreak, currentStreak)
        }
    }
    return longestStreak
}
console.log(lonesrConsecutiveSequence([100, 4, 200, 1, 3, 2]))
/*
    Time complexity : O(n).

    Although the time complexity appears to be quadratic due to the while loop nested within 
    the for loop, closer inspection reveals it to be linear. Because the while loop is reached 
    only when currentNum marks the beginning of a sequence (i.e. currentNum-1 is not present in nums), 
    the while loop can only run for nnn iterations throughout the entire runtime of the algorithm. 
    This means that despite looking like O(n⋅n) complexity, the nested loops actually 
    run in O(n+n)=O(n) time. All other computations occur in constant time, so the overall runtime is linear.

    Space complexity : O(n).

    In order to set up O(1) containment lookups, we allocate linear space for a hash table to 
    store the O(n) numbers in nums. Other than that, the space complexity is identical to that of the brute force solution.
*/