// You are given an array of tuples (start, end) representing time intervals for lectures. 
//The intervals may be overlapping. Return the number of rooms that are required.

// For example. [(30, 75), (0, 50), (60, 150)] should return 2.

var meetingRooms = (intervals) => {
  let start = [],
    end = [];
  intervals.forEach((intervals) => {
    start.push(intervals.start);
    end.push(intervals.end);
  });
  start.sort((a, b) => a - b);
  end.sort((a, b) => a - b);

  let rooms = 0;
  let endpoint = 0;

  for (var i = 0; i < intervals.length; i++) {
    if (start[i] < end[endpoint]) rooms++;
    else endpoint++;
  }
  return rooms;
};

intervals = [
  { start: 0, end: 30 },
  { start: 5, end: 10 },
  { start: 15, end: 20 },
];
console.log(meetingRooms(intervals));


// lets try to solvet this way but not work correctly
function mergeRanges(meetings) {
  // sort by start times, slice will return a shallow copy of the array, not affecting original array
  var sortedMeetings = meetings.slice().sort(function (a, b) {
    return a.startTime > b.startTime ? 1 : -1;
  });

  // initialize mergedMeetings with the earliest meeting
  var mergedMeetings = [sortedMeetings[0]];

  for (var i = 1; i < sortedMeetings.length; i++) {
    var currentMeeting = sortedMeetings[i];
    var lastMergedMeeting = mergedMeetings[mergedMeetings.length - 1];

    // if the current and last meetings overlap, use the latest end time
    // objects, and arrays (which are objects) all are passed by reference. thus change will be recorded.
    if (currentMeeting.startTime <= lastMergedMeeting.endTime) {
      lastMergedMeeting.endTime = Math.max(
        lastMergedMeeting.endTime,
        currentMeeting.endTime
      );

      // add the current meeting since it doesn't overlap
    } else {
      mergedMeetings.push(currentMeeting);
    }
  }

  return mergedMeetings;
}

meetings = [
  { startTime: 0, endTime: 30 },
  { startTime: 5, endTime: 10 },
  { startTime: 15, endTime: 20 },
  {startTime: 10, endTime: 12},
  {startTime: 9,  endTime: 10},
];

//var res = meetings.slice();
var res = mergeRanges(meetings);
console.log(res);
