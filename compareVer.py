# Asked by Amazon
# Version numbers are strings that are used to identify unique states of software products. 
# A version number is in the format a.b.c.d. and so on where a, b, etc. are numeric strings separated by dots. 
# These generally represent a hierarchy from major to minor changes. Given two version numbers version1 and 
# version2, conclude which is the latest version number. Your code should do the following: 
# If version1 > version2 return 1. 
# If version1 < version2 return -1.
# Otherwise return 0. 

# Compare two version numbers version1 and version2. LEETCODE 165
# If version1 > version2 return 1; if version1 < version2 return -1;otherwise return 0.
# Input: version1 = "0.1", version2 = "1.1"
# Output: -1
# Input: version1 = "1.0.1", version2 = "1"
# Output: 1
# Input: version1 = "7.5.2.4", version2 = "7.5.3"
# Output: -1
v1 = "7.5.3.4"
v2 = "7.5.3"

class Solution:
    def compareVersion(self, version1: str, version2: str) -> int:
        ver1 = version1.split('.')
        ver2 = version2.split('.')
        i,j = 0,0
        n,m = len(ver1), len(ver2)
        while i < n or j < m:
            x = int(ver1[i]) if i < n else 0
            y = int(ver2[i]) if j < m else 0
            if x < y:
                return -1
            elif x > y:
                return 1
            i += 1
            j += 1
        return 0

x = Solution().compareVersion(v1, v2)
print(x)
