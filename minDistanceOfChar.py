# Given a string s and a character c, find the distance for all characters in the string to the character c in the string s. You can assume that the character c will appear at least once in the string.
'''
When going left to right, we'll remember the index prev of the last character C we've seen. Then the answer is i - prev.

When going right to left, we'll remember the index prev of the last character C we've seen. Then the answer is prev - i.

We take the minimum of these two answers to create our final answer.
'''

def shortestDistance(S, C):
    prev = float('-inf')
    ans = []
    for i, x in enumerate(S):
        if x == C:
            prev = i
        ans.append(i - prev)

    prev = float('inf')
    for i in range(len(S) - 1, -1, -1):
        if S[i] == C:
            prev = i
        ans[i] = min(ans[i], prev - i)
    
    return ans

print(shortestDistance('HelloWorld', 'l'))

# Time complexity : O(n) - scan string twice ,space complexity: o(n)