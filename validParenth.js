// split the string, now it become array.
// create stack and loop thorugh the array.
// at every opening bracket push closing bracket to stack
// if s.length is 0 or current char not equal to stack.pop()
// return false means we find non matching bracket
// if stack length is 0 then return true it is valid string

let isValid = function (s) {
  if (s === null || s.length <= 0) return true;
  let currentArr = s.split("");
  let stack = [];
  for (let c of currentArr) {
    if (c === "[") stack.push("]");
    else if (c === "{") stack.push("}");
    else if (c === "(") stack.push(")");
    else if (s.length === 0 || c !== stack.pop())
      return false;
  }
  if (stack.length === 0) return true;
  return false;
};

let s = "()[{]}";
console.log(isValid(s));
