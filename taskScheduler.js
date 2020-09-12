/*
Asked by AirBNB
We have a list of tasks to perform, with a cooldown period. We can do multiple of these at the same time, but we cannot run the same task simultaneously.

Given a list of tasks, find how long it will take to complete the tasks in the order they are input.
tasks = [1, 1, 2, 1]
cooldown = 2
output: 7 (order is 1 _ _ 1 2 _ 1)
*/

var leastInterval = (tasks, n) => {
    var count = {}
    var longest  = 0

    // count each task and find longest one
    for (let c of tasks) {
        if (count[c] == null) count[c] = 0
        count[c]++
        longest = Math.max(longest, count[c])
        // console.log(longest)
    }

    var longestCount = 0
    // count how many tasks which have longest.
    for (let c in count){
        if (count[c] == longest) longestCount++
    }
    // case 1:
    // AB...AB... = (max - 1) * (n + 1)
    // AB...AB...AB = (max - 1) * (n + 1) + count
    // case 2: tasks.length
    // (ABC)(ABD)(ABEF) 

    return Math.max((n + 1) * (longest - 1) + longestCount, tasks.length)
}

console.log(leastInterval([1,1,2,1], 0));

/*
Focus on explaining the formula (max-1)(n+1)+count.
First, we use the most frequently occurring tasks as the framework, for example, ["A","A","A","B","B","B","C","C"] will be written as
AB...AB...AB
Because the remaining tasks appear less frequently than A and B, just insert them between them.
We can divide this formula into two parts:
The first part (AB...AB...). According to the requirement of n, there are at least n tasks or idle between two A, so
(AB...AB...) = (max-1)(n+1)
The second part AB. This part is the number of tasks with the most occurrences count
So AB...AB...AB is at least (max-1)(n+1)+count
If the total number of tasks exceeds this number, it means that more than n tasks are inserted between the two A, and there is no need 
to insert idle at this time, so finally this value is compared with the total number of tasks and the larger one is returned.
*/

// Solution 2:

var leastInterval = (tasks, n) => {
    const arr = new Array(26).fill(0)

    for (let c of tasks) {
        arr[c.charCodeAt(0) - 'A'.charCodeAt(0)]++
    }
    arr.sort((a, b) => a - b)

    let i = 25
    while (i >= 0 && arr[i] === arr[25]) {
        i--
    }
    return Math.max((arr[25] - 1) * (n + 1) + (25 - i), tasks.length)
}