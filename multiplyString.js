/*
# Given two strings which represent non-negative integers, multiply the two numbers and return 
# the product as a string as well. You should assume that the numbers may be sufficiently large 
# such that the built-in integer type will not be able to store the input (Python does have BigNum, 
# but assume it does not exist).
*/

var multiply = (num1, num2) => {
  let product = new Array(num1.length + num2.length).fill(0);
  for (let i = num1.length; i--; ) {
    var carry = 0;
    for (let j = num2.length; j--;) {
      product[1 + i + j] += carry + num1[j] * num2[i];
      carry = Math.floor(product[1 + i + j] / 10);
      product[i + 1 + j] = product[1 + i + j] % 10;
    }
    product[i] += carry;
  }
  return product.join("").replace(/^0*(\d)/, "$1");
};


console.log(multiply('11', '13'));