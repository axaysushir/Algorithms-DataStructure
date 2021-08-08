// leetcode: 1007 - Minimum Domino Rotations For Equal Row
// In a row of dominoes, tops[i] and bottoms[i] represent the top and bottom halves of the ith domino. 
// (A domino is a tile with two numbers from 1 to 6 - one on each half of the tile.)

// We may rotate the ith domino, so that tops[i] and bottoms[i] swap values.

// Return the minimum number of rotations so that all the values in tops are the same, or all the values 
// in bottoms are the same.

// If it cannot be done, return -1.

var minDominoRotations = function(tops, bottoms) {
    
    const numSwaps = (target, a, b) => {
        let count = 0;
        for (let i=0; i<a.length; i++) {
            if (target !== a[i] && target !== b[i]) return Infinity;
            if (target !== a[i]) count++
        }
        return count
    }
    
    let minSwap = Math.min(numSwaps(tops[0], tops, bottoms), numSwaps(tops[0], bottoms, tops), numSwaps(bottoms[0], tops, bottoms), numSwaps(bottoms[0], bottoms, tops));
    return minSwap === Infinity ? -1 : minSwap;
    
    
};

// tops = [3,5,1,2,3], bottoms = [3,6,3,3,4]
tops = [2,1,2,4,2,2], bottoms = [5,2,6,2,3,2]
console.log(minDominoRotations(tops, bottoms));