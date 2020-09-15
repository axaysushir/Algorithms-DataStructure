'''
Asked by Facebook:

Kaprekar's Constant is the number 6174. This number is special because it has the property where for any 4-digit number that has 2 or more unique digits, if you repeatedly apply a certain function it always reaches the number 6174. 

This certain function is as follows:
- Order the number in ascending form and descending form to create 2 numbers.
- Pad the descending number with zeros until it is 4 digits in length.
- Subtract the ascending number from the descending number.
- Repeat.

Given a number n, find the number of times the function needs to be applied to reach Kaprekar's constant. Here's some starter code:

'''

from itertools import count
from random import *

KAPREKAR_CONSTANT = 6174

def num_kaprekar_iterations(n):
    counter = 0
    for x in count():
        if n != KAPREKAR_CONSTANT:
            x = str(n)
            if len(x) < 4:
                y = int(n)
                n = ('%04d' % y)
                x = str(n)
            large = int(''.join(sorted(x,reverse = True)))
            small = int(''.join(sorted(x)))
            n = large - small
            counter += 1
        if n == KAPREKAR_CONSTANT:
            break
    return counter

print(num_kaprekar_iterations(123))