'''
Given a phone number, return all valid words that can be created using that phone number.

For instance, given the phone number 364 
we can construct the words ['dog', 'fog'].
'''

validWords = ['dog', 'fish', 'cat', 'fog']

# Using backtrackng


def makeWords(digits):
    lettersMaps = {
        '1': [],
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z'],
        '0': []
    }
    result = []

    def backtrack(combination, nextDigit):
        # if there is no digits to check
        if len(nextDigit) == 0:
            result.append(combination)
        else:
            # if digits iterate over all letter which map to next availble digit
            for letter in lettersMaps[nextDigit[0]]:
                # append curr letter to ciombination
                backtrack(combination + letter, nextDigit[1:])

    if digits:
        backtrack("", digits)
    return result


print(makeWords('36'))
# ['dog', 'fog']
