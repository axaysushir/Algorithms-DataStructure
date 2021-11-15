/* LeetCode: 733 Flood Fill
An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.

You are also given three integers sr, sc, and newColor. You should perform a flood fill on the image starting from the pixel image[sr][sc].

To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with newColor.

Return the modified image after performing the flood fill.
*/
// Solution 1:
var floodFill = function(image, sr, sc, newColor) {  
    const fill = (i, j, color) => {
        if (i < 0 || i >= image.length || j < 0 || j >= image[i].length || image[i][j] !== color || image[i][j] === newColor) return 
        image[i][j] = newColor;
        fill(i+1, j, color)
        fill(i-1, j, color)
        fill(i, j-1, color)
        fill(i, j+1, color)
    }
    fill(sr, sc, image[sr][sc])
    return image  
}

// Solution 2:
function flatBSt(root) {
    while (root !== null) {
        if (root.right !== null) {
            if (root.left !== null) {
                let next = root.left
                while (next.right !== null) next = next.right
                next.right = root.right
            }
            root.right = root.left
            root.left = null
        }
        root = root.right;
    }
}

const flatbst = root => {
    return recur(root)
}
function recur(root) {
    if (root === null) return;
    let left = root.left, right = root.right;
    root.left = null;
    recur(left)
    recur(right)

    root.right = left
    while (root.right !== null) root = root.right
    root.right = right
}

function freqSum(root) {
    if (!root) return []
    let obj = {}
    let recur = root => {
        if (root) {
            let left = recur(root.left)
            let right = recur(root.right)
            let sum = root.val + left + right
            obj[sum] = (obj[sum] || 0) + 1
            return sum
        }
        return 0
    }
    let min = -Infinity
    let res = []
    for (let i in obj) {
        if (obj[i] > min) {
            min = obj[i]
            res = [i]
        } else if (obj[i] === min) {
            res.push(i)
        }
    }
    return res
}