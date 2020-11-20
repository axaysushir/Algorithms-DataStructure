# You are only allowed to perform 2 operations, multiply a number by 2, or subtract a number by 1. 
# Given a number x and a number y, find the minimum number of operations needed to go from x to y.

# SOlution:
# The idea is to use BFS for this. We run a BFS and create nodes by multiplying with 2 and subtracting by 1, thus we can obtain all possible numbers reachable from starting number.
# Important Points :
# 1) When we subtract 1 from a number and if it becomes < 0 i.e. Negative then there is no reason to create next node from it (As per input constraints, numbers x and y are positive).
# 2) Also, if we have already created a number then there is no reason to create it again. i.e. we maintain a visited array.

import queue

class node:
    def __init__(self, val, level):
        self.val = val
        self.level = level

def min_operations(x, y):
    visit = set()

    # create queue and enque x into it
    q = queue.Queue()
    n = node(x,0)
    q.put(n)

    # DO BFS starting from x
    while (not q.empty()):
        # remove an item from queue
        t = q.get()

        if t.val == y:
            return t.level
        
        # mrk deququed number as visited
        visit.add(t.val)
        # if we can reach y in one more step
        if t.val *2 == y or t.val -1 == y:
            return t.level + 1
        
        # insert childern of t if not visited
        if (t.val *2 not in visit):
            n.val = t.val * 2
            n.level = t.level + 1
            q.put(n)

print(min_operations(6, 20))
# (((6 - 1) * 2) * 2) = 20 : 3 operations needed only
# print 3

