// Given an integer n, return a string array answer (1-indexed) where:

//     answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
//     answer[i] == "Fizz" if i is divisible by 3.
//     answer[i] == "Buzz" if i is divisible by 5.
//     answer[i] == i (as a string) if none of the above conditions are true.


var fizzBuzz = function(n) {
    let ans = []
    for (let i=1; i<=n; i++) {
        let div3 = (i%3 == 0)
        let div5 = (i%5 == 0) 
        if (div3 && div5) {
            ans.push("FizzBuzz")
        } else if (div3) {
            ans.push("Fizz")
        } else if (div5) {
            ans.push("Buzz")
        } else {
            ans.push(i.toString())
        }
    }
    return ans
};
console.log(fizzBuzz(12))