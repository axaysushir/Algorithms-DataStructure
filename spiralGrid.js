// You are given a 2D array of integers. Print out the clockwise spiral traversal of the matrix.
// by Amazon
let matrix = [[1,  2,  3,  4,  5],
             [6,  7,  8,  9,  10],
             [11, 12, 13, 14, 15],
             [16, 17, 18, 19, 20]]
// The clockwise spiral traversal of this array is:
// 1, 2, 3, 4, 5, 10, 15, 20, 19, 18, 17, 16, 11, 6, 7, 8, 9, 14, 13, 12
// simulation: Draw the path that the spiral makes. We know that the path should turn clockwise whenever it would go out of bounds or into a cell that was previously visited. 
//Time Complexity: O(N)O(N)O(N), where NNN is the total number of elements in the input matrix. We add every element in the matrix to our final answer.
// Space Complexity: O(N)O(N)O(N), the information stored in seen and in ans.
// layer by layer: 
//Time Complexity: O(N)O(N)O(N), where NNN is the total number of elements in the input matrix. We add every element in the matrix to our final answer.
// space complex: O(1) if out put array is taken account

var spiralOrder = function(matrix) {
    if (matrix.length === 0) return []
    if (matrix.length[0] === 0) return []

    let result = []
    //add first row
    result = result.concat(matrix.shift());

    // add last col
    for (let i=0; i<matrix.length - 1; i++ ){
        result.push(matrix[i].pop())
    }
    // add last row
    const lastRow = matrix.pop()
    if (lastRow) reult = result.concat(lastRow.reverse())
     // add first col
    for (let i=matrix.length - 1; i >= 0; i--) {
        if (matrix[i].length) result.push(matrix[i].shift())
    }
    return result.concat(spiralOrder(matrix))
}


var spiralOrder = function(matrix) {
    const res = []
    while(matrix.length) {
        const first = matrix.shift()
        res.push(...first)
        for (const m of matrix) {
            let val = m.pop()
            if (val) 
                res.push(val)
                m.reverse()
            
        }
        matrix.reverse()
    }
    return res
}

// using shift and pop()
var spiralGrid =  function(matrix) {
    let res = []
     // cut the top->right->bottom->left sides until matrix is empty
    while(matrix.length > 0) {
        let top = matrix.shift()
        let bottom = (matrix.pop() || []).reverse()
        let left = [], right = []
        for (let i=0; i < matrix.length; i++) {
            if (matrix[i].length > 0) right.push(matrix[i].pop())
            if (matrix[i].length > 0) left.unshift(matrix[i].shift())
        }
        res.push(...top, ...right, ...bottom,...left)
    }
    return res
}
let matrix = [[1,  2,  3,  4,  5],
             [6,  7,  8,  9,  10],
             [11, 12, 13, 14, 15],
             [16, 17, 18, 19, 20]]
console.log(spiralGrid(matrix));
