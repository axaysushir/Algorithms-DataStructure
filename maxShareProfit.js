// Say you have an array for which the ith element is the price of a given stock on day i.
// If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.
// Note that you cannot sell a stock before you buy one - asked by apple
// Input: [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
//  Not 7-1 = 6, as selling price needs to be larger than buying price.
// Input: [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transaction is done, i.e. max profit = 0.

// solution 1 O(n2) : find max differance between two num in given array and second number is large then first
// In formal terms, we need to find max⁡(prices[j]−prices[i]) for every i and j such that j>ij 
// solution 2: one pass O(n) single pass needed |  space: O(1) only two variable used
// Say the given array is: [7, 1, 5, 3, 6, 4] If we plot the numbers of the given array on a graph, we get:
// The points of interest are the peaks and valleys in the given graph. We need to find the largest peak following the smallest valley. We can maintain two variables - minprice and maxprofit corresponding to the smallest valley and maximum profit (maximum difference between selling price and minprice) obtained so far respectively.

var maxProfit = function(prices) {
    let minprice = Number.MAX_SAFE_INTEGER;
    let maxprofit = 0;
    for (let i=0; i< prices.length; i++) {
        if (prices[i] < minprice) minprice = prices[i]
        else if (prices[i] - minprice > maxprofit) 
            maxprofit = prices[i] - minprice;
    }
    return maxprofit;
}

prices = [7,1,5,3,6,4]
console.log(maxProfit(prices));
