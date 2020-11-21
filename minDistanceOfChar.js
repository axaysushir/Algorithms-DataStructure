var shortDist = function(S, C) {
    const charIdx = []
    const res = []

    for (let i=0; i<S.length; i++){
        if (S[i] === C) charIdx.push(i)
    }
    for (let i=0; i<S.length; i++){
        let mindist = Infinity
        for (let j = 0; j <charIdx.length; j++) {
            const diff = Math.abs(charIdx[j]-i)
            mindist = Math.min(mindist, diff)
        }
        res.push(mindist)
    }
    return res
}

console.log(shortDist('HelloWorld', 'o'))