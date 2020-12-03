// Given a list of numbers and a target number, find all possible unique subsets of 
// the list of numbers that sum up to the target number. The numbers will all be positive numbers.

var combinationSum = function(candidates, target) {
    const ans = []

    function add(list, current, sum) {
        if (sum === target) return ans.push(list)
        if (sum > target) return;

        for (let i=current; i < candidates.length; i++) {
            add([...list, candidates[i]], i, sum + candidates[i]);
        }
    }
    add([], 0, 0)
    return ans
}

console.log(combinationSum([10, 1, 2, 7, 6, 1, 5], 8));