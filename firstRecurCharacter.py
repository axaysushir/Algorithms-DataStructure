'''
Asked by Amazon:
Given a string, return the first recurring letter that appears. If there are no recurring letters, return None.

Example:
Input: qwertty
Output: t

Input: qwerty
Output: None
'''
# Solution : O(N) time complexity

def first_recurring_char(s):
    hash = {}  # Create empty hash
    # Teaverse each char in str
    for char in s:
        # If char is already present in hash return it
        if char in hash:
            return char
        else:
            hash[char] = 0 # add char to hash
    
    return 0


print(first_recurring_char('qwertty'))
# t

print(first_recurring_char('qwerty'))
# 0
