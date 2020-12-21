# Asked by Amazon
# Given a list of points, an interger k, and a point p, find the k closest points to p.
'''
The idea is to calculate the euclidean distance from the origin for every given point and sort the array according to the euclidean distance found. Print the first k closest points from the list.

Algorithm :
Consider two points with coordinates as (x1, y1) and (x2, y2) respectively. The euclidean distance between these two points will be:
√{(x2-x1)2 + (y2-y1)2}

    Sort the points by distance using Euclidean distance formula.
    Select first K points form the list
    Print the points obtained in any order.

'''

def closest_points(points, k, p):
  points.sort(key = lambda k: k[0] ** 2 + k[1] ** 2)
  return points[:k]

points = [
    (0, 0),
    (1, 1),
    (2, 2),
    (3, 3),
]
print(closest_points(points, 2, (0, 2)))
# [(0, 0), (1, 1)]

# Time Complexity: O(Nlog⁡N) where NNN is the length of points.
# Space Complexity: O(N). 

# Solution 2: heapq
import heapq

def euclideanDist(x):
    return -1*(x[0]**2) + (x[1]**2)

def kClosest(points, K):
    ans = []
    for i in points:
        if len(ans)<K:
            heapq.heappush(ans,(euclideanDist(i),i))
        else:
            heapq.heappushpop(ans,(euclideanDist(i),i))
    op = []
    for i in ans:
        op.append(i[1])
    return op

# print(kClosest(points, 1))

print(kClosest([[1, 1], [3, 3], [2, 2], [4, 4], [-1, -1]], 3))