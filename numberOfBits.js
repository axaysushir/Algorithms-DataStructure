// Given an integer, find the number of 1 bits it has.

// bit manipulation
var bit = n => {
  let sum = 0
  while(n !== 0){
    sum++
    n &= (n-1)
  }
  return sum
}

console.log(bit(23));
// 4


// not work
var hammingWeight = function(n) {
    let bits=0, mask = 1
    for (let i=0; i < 32; i++) {
      if ((n && mask) !== 0) bits++
      mask <<= 1
    }
    return bits
};
console.log(hammingWeight(13));