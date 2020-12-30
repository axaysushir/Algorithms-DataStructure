// A Perfect Number is a positive integer that is equal to the sum of all its positive divisors except itself.

// For instance,
// 28 = 1 + 2 + 4 + 7 + 14

// Write a function to determine if a number is a perfect number.

var checkPerfectNumber = function(num) {
    if (num <= 0) return false
    let sum = 0
    for (let i=1; i<num; i++) {
      if (num % i === 0) sum += i
    }
    return sum === num
};

console.log(checkPerfectNumber(8128))

// improved solution then above O(n)

var checkNum = num => {
    if (num <=0 ) return false
    let sum = 0
    for (let i=1; i< num; i++) {
        if (num % i === 0) sum += i
        if (sum > num) return false
    }
    return sum === num
}

console.log(checkNum(8128));

// Python soluition
// def checkPerfectNumber(num):
//     if num<=1: return False
//     sum=1
//     for i in range(2,math.ceil(math.sqrt(num))):
//         if num%i==0:
//             sum=sum+i+num // i
//     return sum==num