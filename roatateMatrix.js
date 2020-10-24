// Given a square 2D matrix (n x n), rotate the matrix by 90 degrees clockwise.

var rotate = function(matrix) {
    for (let i=0; i< matrix.length; i++){
        for (let j= i; j < matrix[0].length; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
        }
    }
    matrix.forEach(row => {
        row.reverse()
    })
    return matrix
}

a = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
console.log(rotate(a));


// time limit exceed for below function
var rotate = a =>{
    let rx, cx, ry, cy = 0

    while (rx !== a.length && cx !== a.length) {
        for (let i=rx, j = cx, k=ry, l=cy; i <k && i >j; i--, j++, k++, l--) {
            let tmp = a[i][j]
            a[i][j] = a[k][l]
            a[k][l] = tmp
        }
        rx++
        cy--
        if (rx== a.length) {
            rx--
            cx++
        } 
        if (cy== a.length) {
            cy --
            ry++
        }
    }
    reverseColumns(a)
}

function reverseColumns(a) {
    let start = 0
    let end = a.length - 1
    while (end > start){
        for (let i=0; i< a.length; i++){
            let temp = a[i][start]
            a[i][start] = a[i][end]
            a[i][end] = temp
        }
        start++
        end--
    }
}

