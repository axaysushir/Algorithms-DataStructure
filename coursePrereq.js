// You are given a hash table where the key is a course code,
//  and the value is a list of all the course codes that are prerequisites 
//  for the key. Return a valid ordering in which we can complete the courses. 
//  If no such ordering exists, return NULL.
// Time Complexity: O(N)O(N)O(N) considering there are NNN courses in all. We essentially perform a complete depth first search covering all the nodes in the forest. It's a forest and not a graph because not all nodes will be connected together. There can be disjoint components as well.
// Space Complexity: O(N)O(N)O(N), the space utilized by the recursion stack (not the stack we used to maintain the topologically sorted order) 
var findOrder = function(numCourses, prerequisites) {
    var graph = new Array(numCourses)
    for (var i=0; i< numCourses; i++) graph[i] = []
    var len = prerequisites.length;
    for (var i=0; i < len; i++) {
        var item = prerequisites[i];
        if (item[1] >= numCourses) return []
        graph[item[0]].push(item[1])
    }

    // empty other 1: visiting 2:visited
    var status = new Array(numCourses)
    var result = []
    var hasCircle = function(current) {
        if (status[current] === 1) return true;
        if (status[current] === 2) return false;

        status[current] = 1 // start visiting
        for (var next of graph[current]) {
            if (hasCircle(next)) return true;
        }
        status[current] = 2 // end visiting
        result.push(current)
    }
    for (var i=0; i<numCourses; i++) {
        if (hasCircle(i)) return []
    }
    return result
}
