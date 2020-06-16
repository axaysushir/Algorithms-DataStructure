//  Numeber of way to traverse grid
// go only down or right

var uniquePaths = function (m, n) {
  let grid = [];
  for (let i = 0; i < n; i++) {
    grid.push([]);
    for (let j = 0; j < m; j++) {
      if (i === 0 || j === 0) grid[i][j] = 1;
      else grid[i][j] = grid[i - 1][j] + grid[i][j - 1];
    }
  }
  return grid[n - 1][m - 1];
};

var uniquePaths = function (m, n) {
  const mapper = Array.from({ length: n }, () => 1);
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      mapper[j] = mapper[j - 1] + mapper[j];
    }
  }
  return mapper[n - 1];
};

console.log(uniquePaths(3, 2));
