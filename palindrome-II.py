# Given a string, determine if you can remove any character to create a palindrome.

# Basic solution
# For each index i in the given string, let's remove that character, then check if the resulting string is a palindrome. If it is, (or if the original string was a palindrome), then we'll return true
def palindrome(s):
    for i in range(len(s)):
        t = s[:i] + s[i+1:]
        if t == t[::-1]: 
            return True
    
    return s == s[::-1]


# Greedy solution
# If the beginning and end characters of a string are the same (ie. s[0] == s[s.length - 1]), then whether the inner characters are a palindrome (s[1], s[2], ..., s[s.length - 2]) uniquely determines whether the entire string is a palindrome.

# Algorithm

# Suppose we want to know whether s[i], s[i+1], ..., s[j] form a palindrome. If i >= j then we are done. 
# If s[i] == s[j] then we may take i++; j--. Otherwise, the palindrome must be either s[i+1], s[i+2], ..., s[j] 
# or s[i], s[i+1], ..., s[j-1], and we should check both cases.

def create_palindrome(s):
    def palindrome_range(i, j):
        return all(s[k] == s[j - k + i] for k in range(i, j))
    
    for i in range(len(s) // 2):
        if s[i] != s[~i]:
            j = len(s) - 1 - i
            return palindrome_range(i+1, j) or palindrome_range(i, j-1)
    return True

print(create_palindrome("abcdcbea"))
# True
print(create_palindrome("abccba"))
# True
print(create_palindrome("abccaa"))
# False

# Time Complexity: O(N)O(N)O(N) where NNN is the length of the string. Each of two checks of whether some substring is a palindrome is O(N)O(N)O(N).

# Space Complexity: O(1)O(1)O(1) additional complexity. Only pointers were stored in memory.
