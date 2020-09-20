'''
Asked by Apple
A fixed point in a list is where the value is equal to its index. 
So for example the list [-5, 1, 3, 4], 1 is a fixed point in the list 
since the index and value is the same. Find a fixed point (there can 
be many, just return 1) in a sorted list of distinct elements, or return 
None if it doesn't exist.

'''
# Solution1 : linear search where arrr[i] = i


def find_fixed_point(nums):
    n = len(nums)
    for i in range(n):
        if nums[i] is i:
            return i
    # if no fixed point
    return -1


print(find_fixed_point([-5, 1, 3, 4]))
# 1

# Solution 2: Method 2 (Binary Search)
# First check whether middle element is Fixed Point or not. If it is, then return it;
# otherwise check whether index of middle element is greater than value at the index.
# If index is greater, then Fixed Point(s) lies on the right side of the middle point
# (obviously only if there is a Fixed Point). Else the Fixed Point(s) lies on left side.


def binarySearch(arr, low, high):
    if high >= low:
        mid = (low + high)//2

    if mid is arr[mid]:
        return mid

    if mid > arr[mid]:
        return binarySearch(arr, (mid + 1), high)
    else:
        return binarySearch(arr, low, (mid - 1))

    return -1  # if no fix point in array


arr = [-10, -1, 0, 3, 10, 11, 30, 50, 100] 
n = len(arr)
print(binarySearch(arr, 0, n - 1))
