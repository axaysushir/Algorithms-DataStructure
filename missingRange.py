'''
Given a sorted list of numbers, and two integers low and high representing the 
lower and upper bound of a range, return a list of (inclusive) ranges where the 
numbers are missing. A range should be represented by a tuple in the format of 
(lower, upper).
'''

'''
Use Sorting : Sort the array, then do binary search for ‘low’. Once location of low 
is find, start traversing array from that location and keep printing all missing numbers.
'''
from bisect import bisect_left

def missing(arr, low, high):
    n = len(arr)
    arr.sort()

    ptr = bisect_left(arr, low)
    index = ptr

    # start from indee and linearly search arr
    i = index
    x = low
    while(i < n and x <= high):
        # if x not match with curr ele print it
        if arr[i] != x:
            print(x, end=' ')
        else:
            i = i + 1
        x = x + 1
    
    while x <= high:
        print(x, end= ' ')
        x = x + 1
    
missing([1, 3, 5, 10], 1, 10)

# Use Hashing : Create a hash table and insert all array items into the 
# hash table. Once all items are in hash table, traverse through the 
# range and print all missing elements. 
def printMissing(arr, n, low, high):
    n = len(arr)
    # insert all ele to set
    s = set(arr)
    # traverse through range find missing num
    for x in range(low, high+1):
        if x not in s:
            print(x, end=' ')

arr = [1, 3, 5, 4] 
n = len(arr) 
low, high = 1, 10
printMissing(arr, n, low, high) 