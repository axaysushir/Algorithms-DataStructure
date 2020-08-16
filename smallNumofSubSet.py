''' Aksed by AirBnB
Given a sorted list of positive numbers, find the smallest positive number that cannot be a sum of any subset in the list.

Example:
Input: [1, 2, 3, 8, 9, 10]
Output: 7
Numbers 1 to 6 can all be summed by a subset of the list of numbers, but 7 cannot.
def findSmallest(nums):
  # Fill this in.

print findSmallest([1, 2, 3, 8, 9, 10])
# 7

Solution:
We can solve this problem in O(n) time using a simple loop. Let the input array be arr[0..n-1]. 
We initialize the result as 1 (smallest possible outcome) and traverse the given array. Let the 
smallest element that cannot be represented by elements at indexes from 0 to (i-1) be ‘res’, 
there are following two possibilities when we consider element at index i:

1) We decide that ‘res’ is the final result: If arr[i] is greater than ‘res’, then we found the 
gap which is ‘res’ because the elements after arr[i] are also going to be greater than ‘res’.

2) The value of ‘res’ is incremented after considering arr[i]: The value of ‘res’ is incremented 
by arr[i] (why? If elements from 0 to (i-1) can represent 1 to ‘res-1’, then elements from 0 to i 
can represent from 1 to ‘res + arr[i] – 1’ be adding ‘arr[i]’ to all subsets that represent 1 to ‘res’)

for example : start at first element 1
1+1 = 2 second element
2+1 = 3
7 + 1 = 8 if we want element at index 3 is 8 we have add [7 and 1]
8=1 = 9

'''

def findSmallest(arr):
    n = len(arr)
    res = 1 # initialize result as 1

    # Travese the array and increment res if arr[i] is smaller
    # then or equal to res
    for i in range(0, n):
        if arr[i] <= res:
            res = res + arr[i]
        else:
            break
    return res

arr = [1,2,3,8,9,10]
print(findSmallest(arr)) # 7

# JavaScript Solution
'''
var findSmallest = arr => {
  let n = arr.length
  let res = 1 // Inititalize res as 1

    // Traverse the array and increment 'res' if arr[i] is 
    // smaller than or equal to 'res'. 

  for (let i=0; i< n && arr[i] <= res; i++){
    res = res + arr[i]
  }
  return res
}
arr = [1,2,3,8,9,10]
console.log(findSmallest(arr)); //7
'''