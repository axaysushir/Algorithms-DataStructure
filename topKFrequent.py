'''
Given a non-empty list of words, return the k most frequent words. The output should be sorted from highest to lowest frequency, and if two words have the same frequency, the word with lower alphabetical order comes first. Input will contain only lower-case letters.

Example: 
Input: ["daily", "interview", "pro", "pro", 
"for", "daily", "pro", "problems"], k = 2
Output: ["pro", "daily"]
'''

import heapq, collections

class Solution:
    def topKFrequent(self, words, k):
        counts = collections.Counter(words)

        res = []
        heap = []
        for key, v in counts.items():
            heapq.heappush(heap, (-v, key))
        for _ in range(k, 0, -1):
            res.append(heapq.heappop(heap)[1])
        return res

# Solution: Heap & hashmap

class Solution:
    def topKFrequentE(self, words, k: int):
        hash = {}

        for word in words:
            if word in hash:
                hash[word] += 1
            else:
                hash[word] = 1

        heap = []
        for key in hash:
            heapq.heappush(heap, (-hash[key], key))
        
        res = []
        for i in range(k):
            popped = heapq.heappop(heap)
            res.append(popped[1])
        return res

# O(n) to create hashmap, O(n log n) to create the heap, and O(n) space.
words = ["daily", "interview", "pro", "pro", "for", "daily", "pro", "problems"]
k = 3
x = Solution().topKFrequentE(words, k)
print(x)