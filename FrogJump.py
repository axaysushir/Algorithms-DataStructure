class Solution:
    def canCross(self, stones: List[int]) -> bool:
        hash = [set([1])]
        for i in range(1, len(stones)):
            n = set([])
            for j in range(i):
                if stones[i] - stones[j] in hash[j]:
                    n.add(stones[i] - stones[j] - 1)
                    n.add(stones[i] - stones[j])
                    n.add(stones[i] - stones[j] + 1)
        
            hash.append(n)
        
        return len(hash[-1])