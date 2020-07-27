// # BY MICROSOFT
// # Given a time in the format of hour and minute, calculate the angle of the hour and minute hand on a clock.
// # def calcAngle(h, m):
// #   # Fill this in.

// # print calcAngle(3, 30)
// # # 75
// # print calcAngle(12, 30)
// # 165

// Each minute is 6 degrees (360/60)
// Each hour moves forward 5 minutes (60/12)
// The hour is offset depending on minutes (minutes/60)
// Answer asks for smallest angle difference (360-diff sometimes)

var angleClock = function(hour, minutes) {
    let angle = Math.abs((hour*30) + (minutes * 0.5) - minutes*6)
    return angle > 180 ? 360 - angle : angle;
}

console.log(angleClock(3, 30));