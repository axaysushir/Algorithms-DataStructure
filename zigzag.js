// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)
// P   A   H   N
// A P L S I I G
// Y   I   R
// steps
// 1) Create an array of n strings, arr[n]
// 2) Initialize direction as "down" and row as 0. The 
//    direction indicates whether we need to move up or 
//    down in rows. 
// 3) Traverse the input string, do following for every
//    character.
//    a) Append current character to string of current row.
//    b) If row number is n-1, then change direction to 'up'
//    c) If row number is 0, then change direction to 'down'
//    d) If direction is 'down', do row++.  Else do row--.
// 4) One by one print all strings of arr[].



var convert = function(s, numRows) {
    if (numRows <= 1) return s;

    var currentRowIndex = 0;
    var headingDown = true;
    var firstRowIndex = 0;
    var lastRowIndex = numRows -1;
    // create 2d arr to hold zigzag value
    var rows = [];
    for (var i=0; i < numRows; i++) rows.push([]) // push to array

    for(var j=0; j < s.length; j++) {
        var char = s[j]
        rows[currentRowIndex].push(char)

        if (headingDown) {
            if ((currentRowIndex + 1) > lastRowIndex) {
                headingDown = false;
                currentRowIndex--;
            } else currentRowIndex++;
        } else if (!headingDown) {
            if ((currentRowIndex -1) < firstRowIndex) {
                headingDown = true;
                currentRowIndex++;
            } else currentRowIndex--
        }
    }
    // concatanate rows sequencially and return converted string
    return rows.reduce((result, row) => result + row.join(''), '')
};

console.log(convert('PAYPALISHIRING', 3));

var convert = function(s, numRows) {
    return zigzagString(s, numRows)
}

function zigzagString(s, numRows) {
    if (s.length==0 || numRows == 1) return s;

    // initalize array
    var rowArray = new Array(numRows);
    for (var i=0; i < numRows; i++) rowArray[i] = [];

    // initialize variable
    var row = 0
    var itemToskip = row;
    var down;

    // read the string left to right
    for (var i =0; i <s.length; i++) {
        var currentChar = s[i]

        // add char at this index, ignore blank spots
        if (currentChar !== '') rowArray[row].push(s[i])
        if (row == numRows-1) down = false;
        else if (row == 0) down = true
        down ? row++ : row--
    }
    return [].concat.apply([], rowArray).join('')
}

