# Hi, here's your problem today. This problem was recently asked by Google:
# By GOOGLE
# You are given a stream of numbers. Compute the median for each new element .

# Eg. Given [2, 1, 4, 7, 2, 0, 5], the algorithm should output [2, 1.5, 2, 3.0, 2, 2, 2]

# SortedList add() and __getitem__() run in approximately O(logN) time.
# The idea is we can use SortedList like an order statistic tree, since we have O(logN) access to any k-th indexed value. For this problem, we want
# k = middle index if there are an odd number of elements and two elements if there are an even number, k = middle index and k' = (middle index)-1. This gives us a nice and simple implementation with both add() and getMedian() running in O(logN).

from sorted_containers import SortedList

class MedianFinder:

    def __init__(self):
        self.sorted_container = SortedList()  

    def addNum(self, num: int) -> None:
        self.sorted_container.add(num)        

    def findMedian(self) -> float:
        length = len(self.sorted_container)
        if length % 2 == 1:
            return self.sorted_container[length >> 1]
        else:
            return (self.sorted_container[length >> 1] + 
                    self.sorted_container[length-1 >> 1]) * 0.5


#  Using heap
class MedianFinder:

    def __init__(self):
        self.a = []
        self.h = len(self.a) // 2
        

    def addNum(self, num: int) -> None:
        self.a.append(num)
        self.a.sort()
        self.h = len(self.a) // 2
        

    def findMedian(self) -> float:
        if len(self.a) == 0: 
            return 0
        
        if len(self.a) % 2 == 0:
            return (self.a[self.h] + self.a[self.h-1]) / 2
        
        return self.a[self.h]

# Your MedianFinder object will be instantiated and called as such:
num = [2, 1, 4, 7, 2, 0, 5]
obj = MedianFinder()
obj.addNum(num)
param_2 = obj.findMedian()
print(param_2)