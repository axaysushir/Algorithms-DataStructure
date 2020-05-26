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



