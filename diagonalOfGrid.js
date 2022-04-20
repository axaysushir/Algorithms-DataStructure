// given a X,Y coordinates, write algorithm to calculate all its diagonal positions.
// O(n)
// Movement can be done in any of the eight possible directions from a given cell i.e
// from cell (x, y) you can move to any of the following eight positions:(x-1, y+1), (x-1, y), (x-1, y-1), (x, y-1), (x+1, y-1), (x+1, y), (x+1, y+1), (x, y+1) is possible.
// One way to reach from a point (x1, y1) to (x2, y2) is to move abs(x2-x1) steps in the horizontal direction and abs(y2-y1) steps in the vertical direction, but this is not the shortest path to reach (x2, y2). The best way would be to cover the maximum possible distance in a diagonal direction and remaining in horizontal or vertical direction.
// If we look closely this just reduces to the maximum of abs(x2-x1) and abs(y2-y1). Traverse for all points and summation of all diagonal distance will be the answer

function shortestPaths(p1, p2) {
  // horizontal distance covered
  let dx = Math.abs(p1[0] - p2[0])
  // verticle distance
  let dy = Math.abs(p1[1] - p2[1])
  return Math.max(dx, dy)
}

function coverPoints(arr) {
  let n = arr.length;
  let steps = 0

  for (let i=0; i<n-1; i++) {
    steps += shortestPaths(arr[i], arr[i+1])
  }
  return steps
}
let arr = [[4, 6] ,[ 1, 2 ], [ 4, 5] , [ 10, 12]]
console.log(coverPoints(arr));
