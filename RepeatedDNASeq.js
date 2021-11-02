// The DNA sequence is composed of a series of nucleotides abbreviated as 'A', 'C', 'G', and 'T'.

//     For example, "ACGAATTCCG" is a DNA sequence.

// When studying DNA, it is useful to identify repeated sequences within the DNA.

// Given a string s that represents a DNA sequence, return all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule. You may return the answer in any order.

 

// Example 1:

// Input: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
// Output: ["AAAAACCCCC","CCCCCAAAAA"]

// Example 2:

// Input: s = "AAAAAAAAAAAAA"
// Output: ["AAAAAAAAAA"]

var findRepeatedDnaSequences = (s) => {
    let seen = new Set()
    let repeated = new Set()
  
    for (let i=0; i<s.length; i++) {
      let subseq = s.substring(i, i+10)
      if (subseq.length === 10) {
        if (seen.has(subseq)) repeated.add(subseq)
        seen.add(subseq)
      }
    }
    return [...repeated]
  }