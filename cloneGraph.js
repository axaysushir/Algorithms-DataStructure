// LeetCode: 113 - clone graph: Given a reference of a node in a connected undirected graph.
// Return a deep copy (clone) of the graph.
// Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.

// When encountering a graph problem you can usually solve it with a traversal algorithm like DFS or BFS.
// A recursive DFS solution is usually simpler to code and what we use here. When traversing through graphs,
// we need to make sure we use a visited set or hash table to make sure we don't enter an infinite loop revisiting nodes.
// We use a hash table here since we want to return the cloned node which we already visited.

// Perform a DFS where we return the cloned node if it's already visited. Else, create a copy of the current node and mark
// it as visited. We still need to clone its neighbors, so iterate though the list of neighbors,
// cloning each one and adding it to the current copy's neighbors list.

var cloneGraph = function(node) {
  return dfsPreOrder(node)
};

function dfsPreOrder(root, seen = new Map()){
  if(!root) return
  if(seen.has(root)) return seen.get(root)
  const newRoot = new Node(root.val)
  seen.set(root, newRoot)
  for(let c of root.neighbors){
    newRoot.neighbors.push(dfsPreOrder(c, seen))
  }
  return newRoot
}
