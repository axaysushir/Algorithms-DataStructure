# Find the k-th largest number in a sequence of unsorted numbers.

def findKthLargest(arr, k):
    arr.sort()
    arr.reverse()
    return arr[k-1]
  
print(findKthLargest([8, 7, 2, 3, 4, 1, 5, 6, 9, 0], 3))
# 7

print(findKthLargest([3,2,3,1,2,4,5,5,6], 4))
# 4