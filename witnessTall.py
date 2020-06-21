'''
Witness of The Tall People
Hi, here's your problem today. This problem was recently asked by Google:
There are n people lined up, and each have a height represented as an integer. A murder has happened right in front of them, and only people who are taller than everyone in front of them are able to see what has happened. How many witnesses are there?
Example:
Input: [3, 6, 3, 4, 1]  
Output: 3
Explanation: Only [6, 4, 1] were able to see in front of them.
 #
 #
 # #
####
####
#####
36341                                 x (murder scene)
'''
def witness(heights):
    max_height = float('-inf')
    total = 0
    for i in range(len(heights) -1, -1, -1):
        if heights[i] > max_height:
            total += 1
        max_height = max(heights[i], max_height)
    return total

print(witness([3,6,3,4,1,9]))