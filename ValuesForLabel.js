var largestValueFromlabels = (values, numWanted, labels, uselimit) => {
    const n = values.length;
    const pairs = []

    for(let i=0; i<n; i++) {
        const value = values[i]
        const label = labels[i]
        pairs.push([value, label])
    }

    const map = new Map()
    pairs.sort((a,b) => a[0] - b[0])

    let sum = 0;.
    .   
    while (pairs.length > 0 && numWanted > 0) {
        const top = pairs.pop()
        const [value, label] = top;
        if (map.has(label) && map.get(label) === uselimit) continue;
        sum += value

        if (!map.has(label)) map.set(label, 0)
        map.set(label, map.get(label)+1)
        numWanted--
    }
    return sum
}