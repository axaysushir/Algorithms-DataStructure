// leetcode: 204- Count prime numbers less then n
// Yes, the terminating loop condition can be p < √n, as all non-primes ≥ √n must have already been marked off. When the loop terminates, all the numbers in the table that are non-marked are prime.

// The Sieve of Eratosthenes uses an extra O(n) memory and its runtime complexity is O(n log log n)


var countPrimes = function(n) {
    let isPrime = []
    for (let i=2; i<n; i++) {
        isPrime[i] = true
    }
    // loop ending codition when i*i < n
    for(let i =2; i*i < n; i++) {
        if (!isPrime[i]) continue;
        for (let j= i*i; j < n; j+= i) {
            isPrime[j] = false;
        }
    }
    let count = 0
    for (let i=2; i<n; i++) {
        if (isPrime[i]) count++
    }
    return count
};

let count = n =>{ 
    // assume all num are prime
    let prime = new Array(n+1).fill(1)
    let count = 0
    for (let i=2; i<n; i++) {
        if (prime[i] === 1) count++
        for (let j=i*i; j<=n; j+=i) {
            prime[j] = 0
        }
    }
    return count
}
console.log(count(10));