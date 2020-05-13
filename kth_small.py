# function to return kth smallest num
#  O(N LOG N) TIME COMPLEXITY
def kthSmallest(arr, n, k):
    # sort the array
    arr.sort()

    # return kth element
    return arr[k-1]

if __name__ == '__main__':
    arr = [12, 15, 4, 3, 9]
    n = len(arr)
    k = 2
    print(kthSmallest(arr, n, k))

# This is an optimization over method 1 if QuickSort is used as a sorting algorithm in first step.
#  In QuickSort, we pick a pivot element, then move the pivot element to its correct position and 
# partition the array around it. The idea is, not to do complete quicksort, but stop at the point 
# where pivot itself is k’th smallest element. Also, not to recur for both left and right sides of pivot,
#  but recur for one of them according to the position of pivot. The worst case time complexity of this
#  method is O(n2), but it works in O(n) on average.
import sys

def kthSmallest1(arr, l, r, k):
    # if k is smaller then elemin arr
    if (k > 0, k <= r - l + 1):
        # partition the arr around last ele. and get pos. of pivot ele. in sorted arr.
        pos = partition(arr, l, r)

        # if pos is same as k
        if (pos - l == k - 1):
            return arr[pos]
        if (pos - l > k - 1): # if pos is more then recur for left subarray
            return kthSmallest1(arr, l, pos - 1 , k)
        # else recur for right subarray
        return kthSmallest1(arr, pos + 1, r, k - pos + l - 1)
    #  if k is more then number of ele. array
    return sys.maxsize

# Standard partition process of QuickSort(). It considers the last element as pivot and 
# moves all smaller element to left of it 
# and greater elements to right 
def partition(arr, l, r):
    x = arr[r]
    i = l
    for j in range(l, r):
        if (arr[j] <= x):
            arr[i], arr[j] = arr[j], arr[i]
            i += 1
    arr[i], arr[r] = arr[r], arr[i]
    return i


# driver
if __name__ == '__main__':
    arr = [12, 15, 2, 3, 9, 34, 16]
    n = len(arr)
    k = 6
    print(kthSmallest1(arr,0, n-1, k))

# In this post method 4 is discussed which is mainly an extension of method 3 (QuickSelect)
#  discussed in the previous post. The idea is to randomly pick a pivot element. To implement
#  randomized partition, we use a random function, rand() to generate index between l and r, 
# swap the element at randomly generated index with the last element, and finally call the standard 
# partition process which uses last element as pivot.
# Following is an implementation of the above Randomized QuickSelect. 
import random 

def kthSmallest(arr, l, r, k): 
      
    # If k is smaller than number of 
    # elements in array  
    if (k > 0 and k <= r - l + 1): 
          
        # Partition the array around a random  
        # element and get position of pivot  
        # element in sorted array  
        pos = randomPartition(arr, l, r)  
  
        # If position is same as k  
        if (pos - l == k - 1):  
            return arr[pos]  
        if (pos - l > k - 1): # If position is more,  
                            # recur for left subarray  
            return kthSmallest(arr, l, pos - 1, k)  
  
        # Else recur for right subarray  
        return kthSmallest(arr, pos + 1, r,  
                           k - pos + l - 1) 
  
    # If k is more than the number of  
    # elements in the array  
    return 999999999999
  
def swap(arr, a, b): 
    temp = arr[a] 
    arr[a] = arr[b] 
    arr[b] = temp 
  
# Standard partition process of QuickSort().  
# It considers the last element as pivot and 
# moves all smaller element to left of it and  
# greater elements to right. This function 
# is used by randomPartition()  
def partition(arr, l, r): 
    x = arr[r] 
    i = l 
    for j in range(l, r): 
        if (arr[j] <= x): 
            swap(arr, i, j)  
            i += 1
    swap(arr, i, r)  
    return i 
  
# Picks a random pivot element between l and r  
# and partitions arr[l..r] around the randomly 
# picked element using partition()  
def randomPartition(arr, l, r): 
    n = r - l + 1
    pivot = int(random.random() % n)  
    swap(arr, l + pivot, r)  
    return partition(arr, l, r) 
  
# Driver Code 
if __name__ == '__main__': 
  
    arr = [12, 3, 5, 7, 4, 19, 26]  
    n = len(arr) 
    k = 3
    print(kthSmallest(arr, 0, n - 1, k)) 


