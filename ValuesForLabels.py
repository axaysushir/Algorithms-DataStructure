
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