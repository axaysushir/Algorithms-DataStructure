/* Asked by Facebook
You are given list of numbers find permutations from given array

example : Input = [1,2,3]
output = [[ 1, 2, 3 ], [ 1, 3, 2 ], [ 2, 1, 3 ], [ 2, 3, 1 ], [ 3, 1, 2 ], [ 3, 2, 1 ]]
*/
// Solution 1: Recursive function
var permute = function(nums,set = [], answer = []) { 
    if (!nums.length) answer.push([...set])

    // iterate through array
    for (let i=0; i < nums.length; i++) {
        const newNums = nums.filter((n, index) => index !== i) // removing the index
        set.push(nums[i])                                      // pushing element other then index
        permute(newNums, set, answer)                          // recurse function
        set.pop()                                              // removing the last element
    }
    return answer                                              // return answer array
}
nums = [1,2,3]
console.log(permute(nums));

// solution 2: Using generator function
var permute = function(nums) {
    
    function* recurse(arr, options) {
        if(arr.length === nums.length) yield arr;
        
        for(let i = 0; i < options.length; i++) {
            yield* recurse([...arr, options[i]], [...options.slice(0, i), ...options.slice(i+1)])            
        }
    }
    return [...recurse([], nums)];    
  };
  
  