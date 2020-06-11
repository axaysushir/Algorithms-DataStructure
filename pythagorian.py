# Find pythagorian triplet
# run three for loop O(n3)
import math

def triplet(arr, n):
    j = 0

    for i in range(n-2):
        for k in range(j+1, n):
            for j in range(i+1, n-1):
                x = arr[i] * arr[i]
                y = arr[j] * arr[j]
                z = arr[k] * arr[k]
                if (x == y+z or y == x+z or z == x+y):
                    return True
    return False


arr = [3, 1, 4, 6, 5]
n = len(arr)
print(triplet(arr, n))

# We can solve this in O(n2) time by sorting the array first.
# 1) Do square of every element in input array. This step takes O(n) time.
# 2) Sort the squared array in increasing order. This step takes O(nLogn) time.
# 3) To find a triplet (a, b, c) such that a2 = b2 + c2, do following.


def isTriplet(arr, n):
    for i in range(n):
        arr[i] = arr[i] * arr[i]

    arr.sort()
    # fix one element and find other two i go from n-1 to 2
    for i in range(n-1, 1, -1):
        j = 0
        k = i-1
        while (j < k):
            if arr[j] + arr[k] == arr[i]:
                return True
            else:
                if (arr[j] + arr[k] < arr[i]):
                    j = j+1
                else:
                    k = k - 1
    return False


arr = [3, 1, 4, 6, 5]
n = len(arr)
print(isTriplet(arr, n))

# Hash Table time complexity O(max * max)


def isTriplet(arr, n):
    maximum = 0

    for i in range(n):
        maximum = max(maximum, arr[i])

    hash = [0] * (maximum + 1)
    # Increase count of arr element in hash table
    for i in range(n):
        hash[arr[i]] += 1

    # iterate for all possible a
    for i in range(1, maximum+1):
        if (hash[i] == 0):
            continue
        # iterate for all possible b
        for j in range(1, maximum+1):
            # If a and b are same and there is only one a
            # or if there is no b in original array
            if ((i == j and hash[i] == 1) or hash[j] == 0):
                continue
            # find C
            val = int(math.sqrt(i * i + j * j))
            if ((val * val) != (i * i + j * j)):
                continue
            if (val > maximum):
                continue
            if (hash[val]):
                return True
    return False


arr = [3, 1, 4, 6, 5]
n = len(arr)
print(isTriplet(arr, n))
