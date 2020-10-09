#  Given a list of numbers and an integer k, partition/sort the list such that the all
#  numbers less than k occur before k, and all numbers greater than k occur after the number k.
'''
1) Create a Min Heap of size k+1 with first k+1 elements. This will take O(k) time (See this GFact)
2) One by one remove min element from heap, put it in result array, and add a new element to heap from remaining elements.
Removing an element and adding a new element to min heap will take Logk time. So overall complexity will be O(k) + O((n-k)*logK)
'''
from heapq import heappop, heappush, heapify

def partition_list(nums, k):
    n = len(nums)
    heap = nums[:k + 1] # first k + 1 items
    # convert list int0 heap
    heapify(heap)
    # "rem_elmnts_index" is index for remaining  
    # elements in arr and "target_index" is  
    # target index of for current minimum element  
    # in Min Heap "heap".
    target = 0
    for remIndex in range(k+1, n):
        nums[target] = heappop(heap)
        heappush(heap, nums[remIndex])
        target += 1
    while heap:
        nums[target] = heappop(heap)
        target += 1

# function to print array elements
def printNums(nums):
    for ele in nums:
        print(ele, end = ' ')

nums= [2, 2, 2, 5, 2, 2, 2, 2, 5]
k = 3
partition_list(nums, k)
printNums(nums)
# [2, 2, 2, 2, 2, 2, 2, 2, 5]

