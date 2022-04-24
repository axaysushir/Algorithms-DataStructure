var reverseString = s => {
    if(s.length === 1) return s;
    let temp;
    for (let i=0, j=s.length-1; i<s.length/2; i++, j--){
        temp = s[i]
        s[i] = s[j]
        s[j] = temp
    }
    return s
}

let s = ['h', 'e', 'l', 'l', 'o']
console.log(reverseString(s));
