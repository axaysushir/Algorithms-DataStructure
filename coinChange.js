function coinChanhge(coins, amount) {
    if (amount === 0) return 0;
    let min = solve(coins, amount, 0)
    return min >= 10001 ? -1 : min;
}

function solve(c, a, i) {
    let min = 10001;
    for (let j=i; j <c.length; j++) {
        if (a === c[j]) return 1;
        if (a < c[j]) continue;
        min = Math.min(min, 1+solve(c, a -c[j], j))
    }
    return min
}

console.log(coinChanhge([1,2,5], 11));

// using dp 
function change(c, a) {
    if (a == 0)return 0;
    let dp = new Array(a+1).fill(0)
    for (let i=1; i<= a; i++) {
        dp[i] = 10001;
    }
    for (let i=1; i<= a; i++) {
        for (let j=0; j<c.length; j++) {
            if (i >= c[j]) {
                dp[i] = Math.min(dp[i], 1 + dp[i - c[j]])
            }
        }
    }
    return dp[a] >= 10001 ? -1 : dp[a]
}

console.log(change([], 11));

