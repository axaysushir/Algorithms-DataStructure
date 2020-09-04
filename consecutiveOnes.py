''' Asked by Microsoft
Return the longest run of 1s for a given integer n's binary representation.

Example:
Input: 242
Output: 4
242 in binary is 0b11110010, so the longest run of 1 is 4.

# Basic Solution:
One simple way would be to simply loop over the bits, and keep track of the number of consecutive 
set bits, and the maximum that this value has reached. In this approach, we need to convert it to 
binary (base-2) representation and then find and print the result.

# Bit operations solution:
if we AND a bit sequence with a shifted version of itself, we’re effectively removing the trailing 1 
from every sequence of consecutive 1s.
So the operation x = (x & (x << 1)) reduces length of every sequence of 1s by one in binary representation 
of x. If we keep doing this operation in a loop, we end up with x = 0. The number of iterations required 
to reach 0 is actually length of the longest consecutive sequence of 1s.

    11101111   (x)
&   11011110   (x << 1)
--------------
    11001110    (x & (x << 1))
      ^    ^    trailing 1 are removed
'''


def longest_run(n):
    # Initialize count
    count = 0
    # count the number of iteration to reach x = 0
    while (n != 0):
        # This operation reduce length of every sequence of 1's by one
        n = (n & (n << 1))
        count += 1
    return count


print(longest_run(2224545))
# Binary of 2224545 = ‭10 0001 1111 0001 1010 0001‬
# 5 - 1's in consecutive sequnce 

# JavaScript Solution
var countone = n => {
  let count = 0

  while (n !== 0) {
    n = (n & (n << 1))
    count++
  }
  return count
}

console.log(countone(2224545))