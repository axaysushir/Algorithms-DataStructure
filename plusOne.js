/* Asked by Linkedin
Given a non-empty array where each element represents a digit of a non-negative integer, 
add one to the integer. The most significant digit is at the front of the array and each element 
in the array contains only one digit. Furthermore, the integer does not have leading zeros, except 
in the case of the number '0'. 

Example: 
Input: [2,3,4]
Output: [2,3,5]
class Solution():
  def plusOne(self, digits):
    # Fill this in.

num = [2, 9, 9]
print(Solution().plusOne(num))
# [3, 0, 0]
*/

var plusOne = digits => {
    for(let i= digits.length - 1; i >= 0; i--){
        if(digits[i] !== 9){ 
            digits[i]++       //increase the last digit by 1
            return digits
        } else {
        //if after increment last digit becomes 10
        //then make it 0 and in the next iteration, second last digit 
        //will be increased by 1 
            digits[i] = 0
        }
    }
    //this is for special case when all digits are 9 e.g [9,9,9] and
    //output should be [1,0,0,0]. So, above for loop will make all the digits zero
    //and unshift method will add 1 in the starting of the array
    digits.unshift(1)
    return digits
}
console.log(plusOne([1, 2, 9]));

//Python solution
//solution 1:

def plusOne(self, digits):
    str_digits = "".join([str(x) for x in digits])
    increment = str(int(str_digits) + 1)
    retrun [int(x) for x in increment]

//solution 2:

def plus(self, digits):
    res = []
    integer = int("".join(map(str, digits)))
    integer += 1
    for i in str(integer):
        res.append(int(i))
    return res

