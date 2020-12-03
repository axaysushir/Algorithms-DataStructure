# Given a sorted list with duplicates, and a target number n, find the range in which the number exists (represented as a tuple (low, high), both inclusive. If the number does not exist in the list, return (-1, -1)).
# Solution: O(n) time complexity
'''
1. Run a for loop and for i = 0 to n-1
2. Take first = -1 and last = -1 
3. When we find element first time then we update first = i 
4. We always update last=i whenever we find the element.
5. We print first and last.
'''
def find_num(nums, target):
    first = -1
    last = -1
    for i in range(0, len(nums)):
        if target != nums[i]:
            continue
        if first == -1:
            first = i
        last = i

    return (first, last)
    

print(find_num([1, 1, 3, 5, 7], 1))
# (0, 1)

print(find_num([1, 2, 3, 4], 5))
# (-1, -1)
