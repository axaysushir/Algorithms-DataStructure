# Asked by google
# Given a list of numbers, for each element find the next element that is larger than the current element. Return the answer as a list of indices. If there are no elements larger than the current element, then use -1 instead.

def larger_number(nums):
    for i in range(0, len(nums), 1):
        next = -1
        for j in range(i+1, len(nums), 1):
            if nums[i] < nums[j]:
                next = nums[j]
                break
        
        print(str(nums[i]) + '--' + str(next))
  
# print [2, 2, 3, 4, -1, -1]
print(larger_number([11,13,21,4]))

