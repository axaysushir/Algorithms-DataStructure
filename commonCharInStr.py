# Given a list of strings, find the list of characters that appear in all strings.

from collections import Counter

# Using hashtable

def findDuplicates(char1, char2):
        for i in char1:
            if i in char2:
                char1[i] = min(char1[i], char2[i])
            else:
                char1[i] = 0
        return char1

def findCommon(A):
    output = Counter(A[0])
    res = []
    for i in range(len(A) + 1 - 2):
        duplicate = findDuplicates(Counter(A[i]), Counter(A[i+1]))
        output = findDuplicates(output, duplicate)

    for i in output:
        if output[i] > 0:
            res += [i] * output[i]
    return res
            



print(findCommon(['google', 'facebook', 'youtube']))
# ['o', 'e']
