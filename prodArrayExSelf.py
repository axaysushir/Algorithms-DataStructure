# You are given an array of integers. Return an array of the same size where the element at each index is the product of all the elements in the original array except for the element at that index.
# BY AMAZON
# For example, an input of [1, 2, 3, 4, 5] should return [120, 60, 40, 30, 24].

# You cannot use division in this problem.

def product(nums):
    n = len(nums)
    if n == 1: return 0
    # allocate memory for temp array left and right
    left = [0] * n
    right = [0] * n
    # allocate memory fot product array
    prod = [0] * n
    # left most array is always 1
    left[0] = 1
    # right most ele of right arr is alos 1
    right[n-1] = 1
    # construct left arr
    for i in range(1, n):
        left[i] = nums[i-1] * left[i-1]
    # construct right arr
    for j in range(n-2, -1, -1):
        right[j] = nums[j +1] * right[j + 1]
    # construct prod array using left[] & right[]
    for i in range(n):
        prod[i] = left[i] *  right[i]
    for i in range(n):
        print(prod[i], end=' ')

nums = [1, 2, 3, 4, 5]
print(product(nums))