''' ASked by Google:
Given two strings, find if there is a one-to-one mapping of characters between the two strings.

Example
Input: abc, def
Output: True # a -> d, b -> e, c -> f

Input: aab, def
Ouput: False # a can't map to d and e 
'''
class Solution:
    def has_character_map(self, s: str, t: str):
        strdict = {}
        for i in range(len(s)):
            if s[i] not in strdict.keys():
                if t[i] not in strdict.values():
                    strdict[s[i]] = t[i]
                else :
                    return False
            else:
                if strdict[s[i]] != t[i]:
                    return False
        
        return True
    

print(Solution().has_character_map('abc', 'def'))
# True
print(Solution().has_character_map('aac', 'def'))
# False
