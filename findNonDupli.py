# find non duplicate item in array
# [1,2,3,4,2,4,1] return 4

def singleNumber(nums):
    n = len(nums)
    for i in range(n):
        j = 0
        while (j < n):
            if (i != j and nums[i] == nums[j]):
                break
            j += 1
            if (j == n):
                return nums[i]
    return -1


nums = [4, 3, 2, 4, 1, 3, 2]
print(singleNumber(nums))

#  If array has many duplicates, we can also store index in hash table,
# using a hash table where value is a pair. Now we only need to traverse keys in
# hash table (not complete array) to find first non repeating.


def singleNumber(nums):
    n = len(nums)
    map = {}  # insert all elements in hash
    for i in range(n):
        if nums[i] not in map:
            map[nums[i]] = 0
            map[nums[i]] += 1
    # Traverse through map only
    for x in map:
        if (map[x] == 1):
            return x


nums = [4, 3, 2, 4, 1, 5]
print(singleNumber(nums))
