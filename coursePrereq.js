// Leetocode: 207 - Course Schedule
// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array 
// prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
// Return true if you can finish all courses. Otherwise, return false.

// You are given a hash table where the key is a course code,
//  and the value is a list of all the course codes that are prerequisites
//  for the key. Return a valid ordering in which we can complete the courses.
//  If no such ordering exists, return NULL.
// Time Complexity: O(N) considering there are NNN courses in all. We essentially perform
// a complete depth first search covering all the nodes in the forest. It's a forest and not
// a graph because not all nodes will be connected together. There can be disjoint components as well.
// Space Complexity: O(N), the space utilized by the recursion stack (not the stack we used to maintain
// the topologically sorted order)

var findOrder = function (numCourses, prerequisites) {
  var graph = new Array(numCourses);
  for (var i = 0; i < numCourses; i++) graph[i] = [];
  var len = prerequisites.length;
  for (var i = 0; i < len; i++) {
    var item = prerequisites[i];
    if (item[1] >= numCourses) return [];
    graph[item[0]].push(item[1]);
  }

  // empty other 1: visiting 2:visited
  var status = new Array(numCourses);
  var result = [];
  var hasCircle = function (current) {
    if (status[current] === 1) return true;
    if (status[current] === 2) return false;

    status[current] = 1; // start visiting
    for (var next of graph[current]) {
      if (hasCircle(next)) return true;
    }
    status[current] = 2; // end visiting
    result.push(current);
  };
  for (var i = 0; i < numCourses; i++) {
    if (hasCircle(i)) return [];
  }
  return result;
};

console.log(findOrder(1, []));

function find(root, level, maxLev, res) {
  if (root !== null) {
    level += 1
    find(root.left, level, maxLev, res)
    if (level > maxLev[0]) {
      res[0] = root.val
      maxLev[0] = level
    }
    return find(root.right, level, maxLev, res)
  }
}

function deepest(root) {
  res = [-1]
  maxLev = [-1]
  find(root, 0, maxLev, res)
  return res[0]
}