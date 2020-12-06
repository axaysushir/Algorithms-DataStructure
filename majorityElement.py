# A majority element is an element that appears more than half the time. Given a list with a majority element, find the majority element.

def majority_element(nums):
    maxCount = 0
    index = -1
    n = len(nums)
    for i in range(n):
        count = 0
        for j in range(n):
            if nums[i] == nums[j]:
                count += 1
        
        # update max count
        if count > maxCount:
            maxCount = count
            index = i

    if maxCount > n//2:
        return nums[index]


print(majority_element([3, 5, 3, 3, 2, 4, 3]))
print(majority_element([1, 1, 2, 1, 3, 5, 1] ))
# 3
