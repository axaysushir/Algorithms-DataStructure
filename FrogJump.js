// Leetcode: 403 - Frog Jump

var canCross = function(stones) {
    for (let i=3; i< stones.length; i++) {
        if (stones[i] > stones[i-1] * 2) return false
    }
    let stonePositions = new Set()
    for (stone in stones) {
        stonePositions.add(stone)
    }
    let lastStone = stones[stones.length - 1]
    let jump = new Set()
    let positions = new Set()
    positions.add(0)
    jump.add(0)
    
    while (!positions === null) {
        let position = positions.pop()
        let jumpDistance = jump.pop()
        
        for (let i=jumpDistance -1; i<= jumpDistance +1; i++) {
            if (i<= 0) continue;
            let nextPosition = position + i
            if (nextPosition === lastStone) return true
            else if (stonePositions.has(nextPosition)) {
                positions.add(nextPosition)
                jump.add(i)
            }
        }
    }
    return false
};