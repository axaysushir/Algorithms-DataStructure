'''
Asked by UBER
You are given a list of n numbers, where every number is at most k indexes away from its properly sorted index. Write a sorting algorithm (that will be given the number k) for this list that can solve this in O(n log k)

Example:
Input: [3, 2, 6, 5, 4], k=2
Output: [2, 3, 4, 5, 6]
As seen above, every number is at most 2 indexes away from its proper sorted index.
'''

# Sort using insertion sort

def sort_partially_sorted(nums, size):
    i, key, j = 0, 0, 0
    for i in range(size):
        key = nums[i]
        j = i - 1
        #Move elements of A[0..i-1], that are greater than key, to one position  
        # ahead of their current position.This loop will run at most k times 
        while j >= 0 and nums[i] > key:
            nums[j + 1] = nums[j]
            j = j - 1
        nums[j + 1] = key

'''
Solution: 2

1) Create a Min Heap of size k+1 with first k+1 elements. This will take O(k) time (See this GFact)
2) One by one remove min element from heap, put it in result array, and add a new element to heap from remaining elements.

Removing an element and adding a new element to min heap will take Logk time. So overall complexity will be O(k) + O((n-k)*logK)
'''

from heapq import heappop, heappush, heapify

def sort_partially_sorted(nums, k):
    n = len(nums)

    # List of first k + 1 items
    heap = nums[:k + 1]

    # using heapify convert list into heap
    heapify(heap)

    # removeEleIndex is index for remaining ele in array & targetIndex is
    # target index for current minimum element in Min Heap "heap". 
    targetIndex = 0
    for removeEleIndex in range(k + 1, n):
        nums[targetIndex] = heappop(heap)
        heappush(heap, nums[removeEleIndex])
        targetIndex += 1
    
    while heap:
        nums[targetIndex] = heappop(heap)
        targetIndex += 1

# Code runner
# print array elements
def print_array(nums: list): 
    for elem in nums: 
        print(elem, end = ' ') 

nums = [3, 2, 6, 5, 4]
k = 2
sort_partially_sorted(nums, k)

print_array(nums)

# The Min Heap based method takes O(nLogk) time and uses O(k) auxiliary space.