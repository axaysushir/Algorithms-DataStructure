// Given a string containing only digits, restore it by returning all possible valid IP address combinations.
// A valid IP address consists of exactly four integers (each integer is between 0 and 255) separated by single points.
// Input: "25525511135"
// Output: ["255.255.11.135", "255.255.111.35"]
// This solution uses backtracking and a stack to manage visited IPs.
// A valid ip is generated and pushed to result array only when stack has 4 elements(a valid IP must have 4 fragments) and all the numbers are visited in the given string(we should use all of them to make an IP).

var restoreIpAddress = function (s) {
  if (s.length < 4 || s.length > 12) return [];
  const result = [];
  const stack = [];

  function generateIp(str, startIndex) {
    //   End when stack has 4 element
    if (stack.length == 4) {
      // push what is in the stack when we have visited the whole string
      if (startIndex == str.length) {
        result.push(stack.join("."));
      }
      return;
    }
    // A fragment can be made up of a 1-3 numbers
    for (let i = 1; i <= 3; i++) {
      if (startIndex + i > str.length) return;

      // Take i numbers from startindex to make fragment
      let fragment = Number(str.substr(startIndex, i));
      if (fragment < 256) {
        stack.push(fragment);
        generateIp(str, startIndex + i);
        stack.pop();
      }
      // End the loop in case of 0 because a fragment can be 0 but not any number following 0, like 012
      if (fragment == 0) return;
    }
  }
  generateIp(s, 0);
  return result;
};

let s = "12212211135";
console.log(restoreIpAddress(s));
