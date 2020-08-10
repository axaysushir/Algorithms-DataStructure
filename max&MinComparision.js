/* By Microsoft
Given a list of numbers of size n, where n is greater than 3, find the maximum and minimum of the list using less than 2 * (n - 1) comparisons.
Here's a start:
def find_min_max(nums):
  # Fill this in.

print find_min_max([3, 5, 1, 2, 4, 8])
# (1, 8)
*/

var minMax = (arr) => {
    if (arr == null || arr.length < 1) return
    var min, max

    // if only one element
    if (arr.length == 1) {
        max = arr[0]
        min = arr[0]
        return console.log(min, max);
    }

    if (arr[0] > arr[1]) {
        max = arr[0]
        min = arr[1]
    } else {
        max = arr[1]
        min = arr[0]
    }
    for (let i=0; i<= arr.length - 1; i++) {
        if (max < arr[i]) max = arr[i]
        else if (min > arr[i]) min = arr[i]
    }
    return console.log([min, max])
}
/*
# of comparisons in worst case: 1 + 2(n-2) = 2n -1
# of comparisons in best case: 1 + (n–2) = n -1
# of comparisons on average: 1.5n -1

In the above implementation, worst case occurs when elements are sorted in descending order, 
because every time max is greater than a[i] and the second condition always gets executed. 
The best case occurs when elements are sorted in ascending order, because every time max is 
less than a[i] and the second condition never gets executed.
*/

// Solution 2:

var MinMax = a => {
    if (a == null || a.legnth < 1) return 
    var min, max;

    // if only one element
    if (a.length == 1) {
        max = a[0]
        min = a[0]
        return ("Min: " + min + " Max: " + max)
    }
    if (a[0] > a[1]) {
        max = a[0]
        min = a[1]
    } else {
        max = a[1]
        min = a[0]
    }

    for (let i=2; i<= a.length-2;) {
        if (a[i] > a[i+1]){
            min = Math.min(min, a[i+1])
            max = Math.max(max, a[i])
        } else {
            min = Math.min(min, a[i])
            max = Math.max(max, a[i+1])
        }
        i= i+2
    }
    if (a.length % 2 == 1) {
        min = Math.max(min, a[a.length - 1])
        max = Math.max(max, a[a.length - 1])
    }
    return console.log([min, max])
}

/*
# of comparisons when n is even: 1 + 3 * ((n-2)/2) = 1.5n-2.
# of comparisons when n is odd: 1 + 3 * ((n-3)/2) + 2 = 1.5n
*/
arr = [3, 5, 1, 2, 4, 8, 2, 12, 13, 19, 14, 6]
minMax(arr)