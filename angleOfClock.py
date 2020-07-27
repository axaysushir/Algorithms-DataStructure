# BY MICROSOFT
# Given a time in the format of hour and minute, calculate the angle of the hour and minute hand on a clock.
# def calcAngle(h, m):
#   # Fill this in.

# print calcAngle(3, 30)
# # 75
# print calcAngle(12, 30)
# 165

# Each minute is 6 degrees (360/60)
# Each hour moves forward 5 minutes (60/12)
# The hour is offset depending on minutes (minutes/60)
# Answer asks for smallest angle difference (360-diff sometimes)
# 32 ms both
class Solution:
    def angleClock(self, hour, minutes):
        # angle coveres by minute hand
        min_degree = minutes * 6

        # angle covered by hour hand due to minute hand
        hour_degree_min = minutes * 0.5
        # calculate hour
        hour1 = hour % 12
        # we get the angle covered by the hour hand by adding the angle covered 
        # by the hour hand and the extra angle covered by the hour hand due to the minute hand
        hour_angle = (hour1 * 30) + hour_degree_min # hour angle = 360/12 = 30

        res = abs(hour_angle - min_degree)
        # return min angle ny taking the min between the angle we got and remaining angle
        return min(res, 360 - res)

print(Solution().angleClock(12, 30))

# solution 2:
class Solution:
    def clockAngle(self, hour, minutes):
        minAngle = 6 * minutes
        hourAngle = 6 * (5 * (hour + minutes / 60)) % 360
        return min(abs(hourAngle - minAngle), 360 - ab(hourAngle - minAngle))