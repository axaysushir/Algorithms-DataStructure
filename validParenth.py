# check valid open and closing parenthesis
# {()[]}, ([{}]()[]) etc 
# Time complexity : O(n)O(n)O(n) because we simply traverse the given string one character at a time and push and pop operations on a stack take O(1)O(1)O(1) time.
# Space complexity : O(n)O(n)O(n) as we push all opening brackets onto the stack and in the worst case, we will end up pushing all the brackets onto the stack. e.g. ((((((((((.


class Solution:
    def isValid(self, s: str) -> bool:
        while '()' in s or '{}' in s or '[]' in s:
            s = s.replace('()', '').replace('{}', '').replace('[]', '')
        return s == ''

x = Solution().isValid('()[{}]')
print(x)