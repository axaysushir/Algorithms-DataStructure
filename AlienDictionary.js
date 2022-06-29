

function order(words) {
    let map = {};

    for (let i=1; i<words.length; i++) {
        let prev = words[i-1];
        let curr = words[i]
        let shortest = Math.min(prev.length, curr.length)

        for (let k=0; k < shortest; k++) {
            if (prev[k] != curr[k]) {
                if (map[prev[k]]) {
                    map[prev[k]].push(curr[k])
                } else {
                    map[prev[k]] = [curr[k]]
                }
                break;
            }
        }
    }

    const visited = new Set();
    const sorted= [];
    for (vertex in map) {
        if (visited.has(vertex)) continue
        toposort(vertex)
    }
    function toposort(vertex) {
        visited.add(vertex)
        for (let adj of map[vertex] || []) {
            if (visited.has(adj)) continue;
            toposort(adj)
        }
        sorted.unshift(vertex)
    }
    return sorted
}

console.log(order(["wrt","wrf","er","ett","rftt"]));