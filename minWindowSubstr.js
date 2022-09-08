function minWindow(s, t) {
    let hash = {}
    // add all ele to hash table
    t.split('').forEach(e => {
        hash[e] = (hash[e] || 0) + 1
    });

    let left = 0, right = 0, count = t.length
    let minWinsize = Number.MAX_VALUE
    let res = 0
    while (right < s.length) {
        if (hash[s[right++]]-- > 0 ) count--
        // update window size if smaller
        while (count === 0) {
            if (right - left < minWinsize) {
                minWinsize = right - left
                res = left
            }
            if (hash[s[left++]]++ === 0) {
                count++
            }
            
        }
    }
    // if window is not changed return ""
    return minWinsize == Number.MAX_VALUE ? '' : s.substr(res, minWinsize) 
}

let map = {};
  t.split('').forEach(c => map[c] = (map[c] || 0) + 1);

  let count = t.length;   // remaining matching count

  let l = 0;
  let r = 0;

  let start = 0;
  let minLen = Infinity;

  while (r < s.length) {
    if (map[s[r++]]-- > 0) count--;

    while (count === 0) {   // valid
      if (r - l < minLen) {
        minLen = r - l;
        start = l;
      }

      if (map[s[l++]]++ === 0) count++; // make it invalid
    }
  }

  return minLen === Infinity ? '' : s.substr(start, minLen);
