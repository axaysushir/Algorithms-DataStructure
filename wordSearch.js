//You are given a 2D array of characters, and a target string. by AMAZON
//Return whether or not the word target word exists in the matrix.
//Unlike a standard word search, the word must be either going left-to-right, or top-to-bottom in the matrix.

var exists = function (board, word) {
  var m = board.length;
  var n = board[0].length;
  if (!m || !n) return false;

  var dfs = function (i, j, wordIndex) {
    if (i < 0 || i >= m || j < 0 || j >= n || board[i][j] !== word[wordIndex])
      return false;
    if (wordIndex === word.length - 1) return true;
    var tmp = board[i][j];
    board[i][j] = "#"; // mark visited

    if (
      dfs(i, j + 1, wordIndex + 1) ||
      dfs(i, j - 1, wordIndex + 1) ||
      dfs(i + 1, j, wordIndex + 1) ||
      dfs(i - 1, j, wordIndex + 1)
    )
      return true;

    board[i][j] = tmp;
    return false;
  };

  for (var i = 0; i < m; i++) {
    for (var j = 0; j < n; j++) {
      if (dfs(i, j, 0)) return true;
    }
  }
  return false;
};

let board = [
  ["F", "A", "C", "I"],
  ["O", "B", "Q", "P"],
  ["A", "N", "O", "B"],
  ["M", "A", "S", "S"],
];

board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]
console.log(exists(board, "SEED"));
