/*
Asksed by Twitter
Given an array of characters with repeats, compress it in place. The length after compression should be less than or equal to the original array.

Example:
Input: ['a', 'a', 'b', 'c', 'c', 'c']
Output: ['a', '2', 'b', 'c', '3']
Here's a starting point:
class Solution(object):
  def compress(self, chars):
    # Fill this in.

print Solution().compress(['a', 'a', 'b', 'c', 'c', 'c'])
# ['a', '2', 'b', 'c', '3']

*/

var compress = function(chars) {
	
	// var i is reading, var index is writing
    let  i = 0
    let index = 0
    
    while(i < chars.length){
	
        let j = i
        
		// counter for number of same letters
        while(j < chars.length && chars[i] === chars[j]) j++
        
		// write compress letter
        chars[index++] = chars[i]
        
		// write number for compressed letter
        if(j - i > 1){
		
			// if the number is >= 10 the string version will have a length of 2 instead of 1
            let num = (j - i).toString()  
            for(let k = 0; k < num.length; k++){
                chars[index++] = num[k]
            }
        }
		// Even though there are nested while loops the time is N because i is updated to j
        i = j
    }
	
	// Since the "compressing" is done in place index returns the updated version
    return index
};

//  Solution 2
/*
Given an string s, replace IN-PLACE duplicated values to it's number equivalent.
e.g. [a,a,b,a] => [a,2,b,a]
If a letter appear only once no need to add number.
e.g. [a,b,c] => [a,b,c]
If the number of duplicates is bigger than 9, each digit should be one place in the array. All characters on the array should be strings (not integers/numbers) of length 1.
[a,a,a,a,a,a,a,a,a,a] => [a,1,0] not ["a10"]
*/
function compress(s) {
    let write = 0;
    let offset = 0;
    for (let read = 0; read <= s.length; read++) {
        if (read > 0 && s[read] === s[read - 1]) continue;
        if (read > (write + offset)) {
        const compression = (read - write - offset + 1).toString();
        for (let i = 0; i < compression.length; i++) s[write++] = compression[i];
        offset = read - write;
        }
        if(s[read] !== undefined) s[write++] = s[read];
    }
    return write;
}
chars = ['a', 'a', 'b', 'c', 'c', 'c']
console.log(compress(chars));