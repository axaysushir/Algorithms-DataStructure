var expand = (s, left, right) {
    while (left >=0 && right < s.length && s.charAt(left) == s.charAt(right)) {
        left--
        right++
    }
    return right - left - 1
}

var longestPalindrome = s => {
    let start = 0;
    let maxlen = 0;
    if (s === null || s.lenght ===0 && s=== undefined) return ''
    for (let i=0; i<s.length; i++) {
        let l1 = expand(s, i, i)
        let l2 = expand(s, i, i+1)
        let len = Math.max(l1, l2)
        if (len > maxlen){
            maxlen = len;
            start = i - Math.floor((len -1)/2)
        }
    }
    return s.substr(start, maxlen)
}

let height = [1,8,6,2,5,4,8,3,7]

let max = height => {
    let i=0;
    let j = height - 1
    let max = 0, area;

    while (i < j) {
        area = (j -i) * Math.min(height[i], height[j])
        max = Math.max(area, max)
        height[i] < height[j] ? i++ : j--
    }
    return max
}
