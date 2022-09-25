'''
A rectangle is represented as a list [x1, y1, x2, y2], where (x1, y1) are the coordinates of its bottom-left corner, and (x2, y2) are the coordinates of its top-right corner.

Two rectangles overlap if the area of their intersection is positive.  To be clear, two rectangles that only touch at the corner or edges do not overlap.

Given two (axis-aligned) rectangles, return whether they overlap.

Input: rec1 = [0,0,2,2], rec2 = [1,1,3,3]
Output: true
Input: rec1 = [0,0,1,1], rec2 = [1,0,2,1]
Output: false

# solution 1:
If the rectangles do not overlap, then rec1 must either be higher, lower, to the left, or to the right of rec2.

The answer for whether they don't overlap is LEFT OR RIGHT OR UP OR DOWN, where OR is the logical OR, and 
LEFT is a boolean that represents whether rec1 is to the left of rec2. The answer for whether they do overlap
is the negation of this.

The condition "rec1 is to the left of rec2" is rec1[2] <= rec2[0], that is the right-most x-coordinate of rec1 
is left of the left-most x-coordinate of rec2. The other cases are similar.
'''
rec1 = [0, 0, 1, 1]
rec2 = [1, 0, 2, 1]


class Solution:
    def isRectangleOverlap(self, rec1, rec2):
        # Check right or left
        if rec1[0] >= rec2[2] or rec2[0] >= rec1[2]:
            return False
        # Check top and Bottom
        if rec1[1] >= rec2[3] or rec2[1] >= rec1[3]:
            return False

        return True


print(Solution().isRectangleOverlap(rec1, rec2))

# Time and Space Complexity: O(1)

# Solution 2: Using recursion


class Solution:
    def isRectangleOverlap(self, rec1, rec2):
        def intersect(pLeft, pRight, qLeft, qRight):
            return min(pRight, qRight) > max(pLeft, qLeft)

        return (intersect(rec1[0], rec1[2], rec2[0], rec2[2]) and  # width > 0
                intersect(rec1[1], rec1[3], rec2[1], rec2[3])  # height > 0
                )
print(Solution().isRectangleOverlap(rec1, rec2))