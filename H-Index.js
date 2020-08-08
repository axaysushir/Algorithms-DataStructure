/**
Asked by Amazon:

The h-index is a metric that attempts to measure the productivity and citation impact of the publication of a scholar. The definition of the h-index is if a scholar has at least h of their papers cited h times. 

Given a list of publications of the number of citations a scholar has, find their h-index.

Example:
Input: [3, 5, 0, 1, 3]
Output: 3
Explanation:
There are 3 publications with 3 or more citations, hence the h-index is 3.

*/
// Solution 1
var hIndex = function(citations) {
    citations.sort((a, b) => b - a)
    let result = 0
    for (let [index, value] of citations.entries()) {
        const h = index + 1

        if (value < h) return result
        result = h
    }
    return result
}

// Solution 2
var hIndex = (citation) => {
    let pass = []
    for (let i= 0; i< citation.length; i++) {
        if (citation[i] > pass.length) {
            pass.push(citation[i])

            // (Math.min(...pass) < pass.length) removes paper less than the updated citations after push
            if (Math.min(...pass) < pass.length) {
                pass.splice(pass.indexOf(Math.min(...pass)))
            }
        }
    }
    return pass.length
}

// solution 3
// The time complexity is O(nlogn) where n is the length of citations array
// The space complexity is O(1) because we only use some variables

var hIndex = function(citaions) {
    citaions.sort((a, b) => a - b)
    // hIdx be 0 like [0]
    var hIdx = 0

    // for each citaion count, calculate author hidx
    for (let i=0; i < citaions.length; i++) {
        // helper return hIdx
        var temp = helper(citaions, i)
        //update the hIdx only if its better than the last one
        hIdx = hIdx > temp ? hIdx : temp
    }
    return hIdx
}

function helper(citaions, i){
//for current citation, we have at least one paper with number of citation count as citations[i]
    let count = 1
    //since the citation arr is sorted, all the paper after idx i have citation count >= citations[i]
    count = count + ((citaions.length - 1) - i)
   //if current count of citation is greater than citations value then return citation value
   if (count >= citaions[i]) return citaions[i]
   else {
    //    return number of count such as [10]
    return count
   }
}


citations = [3, 5, 0, 1, 3]
console.log(hIndex(citations));

var hIndex = function(citations) {
    // search i form 1 to n
    var n = citations.length; 
    citations.sort((a, b) => a - b)
    for (let i = 1; i<= n; i++) {
        if(citations[n - i] >= i && (n - i - 1 < 0 || citations[n - i - 1] <= i)){
            return i
        }
    }
    return 0
}
citations = [3,0,6,1,5]
console.log(hIndex(citations));