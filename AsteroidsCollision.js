/* Leetcode: 735 - Asteroid collision
We are given an array asteroids of integers representing asteroids in a row.

For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.

Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.

Example 1:

Input: asteroids = [5,10,-5]
Output: [5,10]
Explanation: The 10 and -5 collide resulting in 10. The 5 and 10 never collide.

Example 2:

Input: asteroids = [8,-8]
Output: []
Explanation: The 8 and -8 collide exploding each other.

Example 4:

Input: asteroids = [-2,-1,1,2]
Output: [-2,-1,1,2]
Explanation: The -2 and -1 are moving left, while the 1 and 2 are moving right. Asteroids moving the same direction never meet, so no asteroids will meet each other.
*/

//solution using stack:
var asteroidCollision = function(asteroids) {
    let stack = []
    function top(stack) {
        return stack[stack.length-1]
    }
    for (let i of asteroids) {
        if (i > 0) {
            stack.push(i)
            continue
        }
        while (top(stack) > 0 && top(stack) < Math.abs(i)) {
            stack.pop()
        }
        if (top(stack) === Math.abs(i)) stack.pop()
        else if (!stack.length || top(stack) < 0) {
            stack.push(i)
        }
    }
    return stack;
}
asteroids = [5,10,-5]
console.log(asteroidCollision(asteroids));

// not work
// var asteroidCollision = function(asteroids) {
//     let stack = []
//     let i =0
//     while (i < asteroids.length) {
//         if (asteroids[i] > 0) stack.push(asteroids[i])
//         else {
//             while (!stack.length && stack.unshift() > 0 && stack.unshift() < Math.abs(asteroids[i])) {
//                 stack.pop()
//             }
//             if (stack.length === 0 || stack.unshift() < 0) {
//                 stack.push(asteroids[i])
//             } else if(stack.unshift() === Math.abs(asteroids[i])) {
//                 stack.pop()
//             }
//         }
//         i++
//     }
//     let remaining = [stack.length]
//     for (let i = stack.length - 1; i >= 0; i--) {
//         remaining[i] = stack.pop()
//     }
//     return remaining;
// };