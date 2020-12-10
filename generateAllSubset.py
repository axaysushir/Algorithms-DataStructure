# Given a list of unique numbers, generate all possible subsets without duplicates. This includes the empty set as well.

def subsetall(nums, subset, indx):
    print(*subset)
    for i in range(indx, len(nums)):
        # include the nums[i] in subset
        subset.append(nums[i])
        # move on to next ele
        subsetall(nums, subset, i + 1)
        # exclude the nums[i] from subset
        subset.pop(-1)
    return


def generateAllSubsets(nums):
  global res
  subset = []
  index = 0
  subsetall(nums, subset, index)

print(generateAllSubsets([1, 2, 3]))
# [[], [3], [2], [2, 3], [1], [1, 3], [1, 2], [1, 2, 3]]
