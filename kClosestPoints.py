# Given a list of points as a tuple (x, y) and an integer k, find the k closest points to the origin (0, 0).

def closePoint(points, k):
    points.sort(key = lambda k: k[0]** + k[1]**2)
    return points[:k]

print(closePoint([(0, 0), (1, 2), (-3, 4), (3, 1)], 2))
# [(1, 2), (0, 0)]
