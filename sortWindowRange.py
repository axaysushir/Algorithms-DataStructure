'''
Given a list of numbers, find the smallest window to sort such that the whole list will be sorted. 
If the list is already sorted return (0, 0). You can assume there will be no duplicate numbers.

Example:
Input: [2, 4, 7, 5, 6, 8, 9]
Output: (2, 4)
Explanation: Sorting the window (2, 4) which is [7, 5, 6] will also means that the whole list is sorted.

# Solution: 
1) Find the candidate unsorted subarray
a) Scan from left to right and find the first element which is greater than the next element. Let s be the index of such an element. 
In the above example 1, s is 3 (index of 30).
b) Scan from right to left and find the first element (first in right to left order) which is smaller than the next element 
(next in right to left order). Let e be the index of such an element. In the above example 1, e is 7 (index of 31).

2) Check whether sorting the candidate unsorted subarray makes the complete array sorted or not. If not, then include more elements in the subarray.
a) Find the minimum and maximum values in arr[s..e]. Let minimum and maximum values be min and max. min and max for [30, 25, 40, 32, 31] are 25 and 40 respectively.
b) Find the first element (if there is any) in arr[0..s-1] which is greater than min, change s to index of this element. There is no such element in above example 1.
c) Find the last element (if there is any) in arr[e+1..n-1] which is smaller than max, change e to index of this element. In the above example 1, e is changed to 8 (index of 35)

3) Print s and e.
'''

def minWindowSort(arr, n):
    e = n - 1
    # step 1 (a):
    for s in range(0, n-1):
        if arr[s] > arr[s + 1]:
            break

        if s == n - 1:
            print(0, 0)
            exit()
    # scan right to left
    while e > 0:
        if arr[e] < arr[e - 1]:
            break
        e -= 1
    
    # step 2(a)
    max = arr[s]
    min = arr[s]
    for i in range(s+1, e+1):
        if arr[i] > max:
            max= arr[i]
        if arr[i] < min:
            min = arr[i]
    
    # step 2b
    for i in range(s):
        if arr[i] > min:
            s = i
            break
    
    # step 2c
    i = n-1
    while i >= e + 1:
        if arr[i] < max:
            e = i
            break
        i -= 1
    
    return (s, e)

arr = [1,2,3,4,5,6]
n = len(arr)
print(minWindowSort(arr, n))