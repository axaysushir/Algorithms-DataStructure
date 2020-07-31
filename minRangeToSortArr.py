'''Given a list of integers, return the bounds of the minimum range that must be sorted so that the whole list would be sorted.
Twitter
Example:
Input: [1, 7, 9, 5, 7, 8, 10]
Output: (1, 5)
Explanation:
The numbers between index 1 and 5 are out of order and need to be sorted.

Here's your starting point:
def findRange(nums):
  # Fill this in.

print findRange([1, 7, 9, 5, 7, 8, 10])
(1, 5)  '''

''' Solution:
1) Find the candidate unsorted subarray
a) Scan from left to right and find the first element which is greater than the next element. Let s be the index of such an element. In the above example 1, s is 3 (index of 30).
b) Scan from right to left and find the first element (first in right to left order) which is smaller than the next element (next in right to left order). Let e be the index of such an element. In the above example 1, e is 7 (index of 31).

2) Check whether sorting the candidate unsorted subarray makes the complete array sorted or not. If not, then include more elements in the subarray.
a) Find the minimum and maximum values in arr[s..e]. Let minimum and maximum values be min and max. min and max for [30, 25, 40, 32, 31] are 25 and 40 respectively.
b) Find the first element (if there is any) in arr[0..s-1] which is greater than min, change s to index of this element. There is no such element in above example 1.
c) Find the last element (if there is any) in arr[e+1..n-1] which is smaller than max, change e to index of this element. In the above example 1, e is changed to 8 (index of 35)

3) Print s and e. '''

def printUnsorted(arr, n):
    e = n - 1
    # step 1-a of above
    for s in range(0, n-1):
        if arr[s] > arr[s+1]:
            break
    if s == n-1:
        print('Array is sorted')
        exit()
    # step 1b of above
    e = n -1
    while e > 0:
        if arr[e] < arr[e-1]:
            break
        e -= 1
    # step2
    max= arr[s]
    min = arr[s]
    for i in range(s+1, e+1):
        if arr[i] > max:
            max = arr[i]
        if arr[i] < min:
            min = arr[i]
    
    # step 2-b
    for i in range(s):
        if arr[i] > min:
            s = i
            break

    # step2-c
    i = n-1
    while i >= e+1:
        if arr[i] < max:
            e= i
            break
        i -= 1

    # step3
    print((s, e))

arr = [1, 7, 9, 5, 7, 8, 10]
n = len(arr)
printUnsorted(arr, n)