# Given 2 strings s and p, find and return all indexes in string s where t is an anagram.
from collections import Counter
import string

# Solution 1: 128ms
def alphabetCounter(s):
    counter = Counter(s)
    for c in string.ascii_lowercase:
        if c not in counter:
            counter[c] = 0
    return counter

def findAnagram(s, t):
    l = []
    if len(s) < len(t):
        return l
    histogram = alphabetCounter(t)
    # current is moving window of histogram
    current = alphabetCounter(s[0:len(t)])
    for i in range(len(s) - len(t) + 1):
        # compare cur to histo
        if histogram == current:
            l.append(i)
        # if last iteration stop
        if i == len(s) - len(t):
            break
        # advance current
        current[s[i]] -= 1
        current[s[i + len(t)]] += 1
    
    return l

print(findAnagram('cbaebabacd', 'abc'))


# Solution 2:
def find_anagrams(s, p):
    l = len(p)
    res = []
    c = Counter(p)
    for i in range(len(s) - l+1):
        tmp = s[i:i+l]
        if c == Counter(tmp):
            res.append(i)
    
    return res

print(find_anagrams('cbaebabacd', 'abc'))
# [0, 6]


# Given a 32-bit integer, swap the 1st and 2nd bit, 3rd and 4th bit, up til the 31st and 32nd bit.
def swapBits(x):
    return (x & 0b10101010101010101010101010101010) >> 1 | (x & 0b01010101010101010101010101010101) << 1

print(f"0b{swapBits(0b10101010101010101010101010101010):032b}")
# 0b01010101010101010101010101010101

