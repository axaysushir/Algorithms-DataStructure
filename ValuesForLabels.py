

# The main idea is to use the largest values as much as possible. It is strictly better to use a larger value of a particular label than to use a smaller value of same label.
# Track number of elements used and once you reached the max limit, return the sum of picked values.

class Solution:
    def largestValsFromLabels(self, values, labels, numWanted: int, useLimit: int):
        allInOne = [[values[i], labels[i]] for i in range(len(values))]
        allInOne.sort()
        print(allInOne)

        ans = 0
        usage = {}
        numUsed = 0
        for v, l in reversed(allInOne):
            if numUsed == numWanted:
                break

            if l not in usage:
                usage[l] = 0
            usage[l] +=1
            if usage[l] <= useLimit:
                numUsed += 1
                ans += v
            else:
                usage[l] -= 1
        return ans

values = [5,4,3,2,1]
labels = [1,1,2,2,3]
numWanted = 3
useLimit = 1
print(Solution.largestValsFromLabels(values, labels, numWanted, useLimit))