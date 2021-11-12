# permutaio in str
class Solution:
    def checkInclusion(self, s1, s2):
        s1 = sorted(s1)
        for i in range(len(s2)-len(s1)+1):
            if s1 == sorted(s2[i:i+len(s1)]):
                return True
        return False