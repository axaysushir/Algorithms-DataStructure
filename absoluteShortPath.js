/*
Given a file path with folder names, '..' (Parent directory), and '.' (Current directory), return the shortest possible file path (Eliminate all the '..' and '.').

Example
Input: '/Users/Joma/Documents/../Desktop/./../'
Output: '/Users/Joma/'
def shortest_path(file_path):
  # Fill this in.

print shortest_path('/Users/Joma/Documents/../Desktop/./../')
# /Users/Joma/
*/

// Solution : Using stack

var simplifyPath = path => {
    var start = []
    path = path.split('/').filter(file => file.length && file != '.')
    for (let file of path) {
        if (file == '..') start.pop()
        else start.push(file)
    }
    return '/' + start.join('/')
}

var shortest_path = path => {
    const arr = path.split('/').filter(file => /\.\.|[^\s\.]/.test(file))
    const stack = []
    for (let file of arr) {
        if (file == '..') stack.pop()
        else stack.push(file)
    }
    return '/' + stack.join('/')
}
console.log(simplifyPath('/Users/Joma/Documents/../Desktop/./../'))


// Python solution: O(N) time complexity. 32ms

// class Solution:
//     def simplifyPath(self, path):
//         res = []
//         path = path.split('/')
        
//         for file in path:
//             if file == '' or file == '.':
//                 continue
//             elif file == '..':
//                 if len(res) >= 1:   #for case /../
//                     res.pop()
//             else:
//                 res.append(file)
//         return '/' + '/'.join(res)