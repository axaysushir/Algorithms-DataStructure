// Reshaping a matrix means to take the same elements in a matrix but change the row and column length. 
// This means that the new matrix needs to have the same elements filled in the same row order as the old matrix. 
// Given a matrix, a new row size x and a new column size y, reshape the matrix. If it is not possible to reshape, return None.

var matrix = (nums, r, c) => {
    const total = nums.length * nums[0].length;
    if (r*c > total) return nums

    const flaten = nums.flat()
    const res = []
    for (let i=0; i<r; i++) {
        const newArr = flaten.splice(0, c)
        res.push(newArr)
    }
    return res
}

console.log(matrix([[1, 2], [3, 4]],1,4));