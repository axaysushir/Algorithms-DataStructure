'''
Asked by Facebook
Given a list of building in the form of (left, right, height), return what the skyline should look like. 
The skyline should be in the form of a list of (x-axis, height), where x-axis is the next point where there is a change in height starting from 0, and height is the new height starting from the x-axis.

Here's some starter code:
def generate_skyline(buildings):
  # Fill this in.

#            2 2 2
#            2 2 2
#        1 1 2 2 2 1 1
#        1 1 2 2 2 1 1
#        1 1 2 2 2 1 1
# pos: 1 2 3 4 5 6 7 8 9
print generate_skyline([(2, 8, 3), (4, 6, 5)])
# [(2, 3), (4, 5), (6, 3), (8, 0)]

# Solution:
First, based on observation, we know the candidates of keypoints are either the Left or Right of a building.

Therefore, we only need to figure out these two cases at which the height is changed.

    Meet a higher building
    The building is no longer available (passed)

To be more specific:

    Higher: push a new maximum, happened at keypoint (L, R, H) --> Left-hand side of building
    Passed: popped existed maximum, happened at keypoint (R, 0, 0) -->Right-hand side of building

'''
from heapq import heappop, heappush

class Solution:
    def generate_skyline(self, buildings):
        position = set() # Use set to prevent duplicate
        for L, R, H in buildings:
            position.add((L, -H, R)) # -H - max heap\
            position.add((R, 0, 0)) # 0: ground
        
        buildings = [] #[height, x_position]
        sky = []       #[x_position, height]

        for x, h, R in sorted(position): # Iterate every possible candidate, i.e. (both Left and Right corner)
            # Based on R remove the out of date building if any
            while buildings and buildings[0][1] <= x: heappop(buildings)

            # IF this candidate is at left hand side of the bulding (have height)
            if H: heappush(buildings, (h, R))

            # get max element in heap: its height with negative sign
            currMaxheight = -buildings[0][0]

            # If anything changed either case 1 and case 2: max height increase or decrease 
            if not sky or sky[-1][1] != currMaxheight:
                sky.append([x, currMaxheight]) # we find a new keypoint
        
        return sky

print(Solution().generate_skyline([(2, 8, 3), (4, 6, 5)]))