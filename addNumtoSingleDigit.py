# Given a number like 159, add the digits repeatedly until you get a single number.

# For instance, 1 + 5 + 9 = 15.
# 1 + 5 = 6.

# So the answer is 6.

# Solution using digital root:

class Solution(object):
    def addDigits(self, num):
        if num == 0:
            return 0
        if num % 9 == 0:
            return 9
        return num % 9

print(Solution().addDigits(159))
# 1 + 5 + 9 = 15
# 1 + 5 = 6
# 6

