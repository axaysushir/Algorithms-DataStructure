'''
Given a directed graph, reverse the directed graph so all directed edges are reversed. 

Example:
Input:
A -> B, B -> C, A ->C

Output:
B->A, C -> B, C -> A
Here's a starting point:
'''
# Time complexity of the algorithm is O(V+E) where V is number of vertices of graph and E is the number of edges of the graph.

# function to add an edge from vertex source to vertex dest.
def addEdge(adj, src, dest):
    adj[src].append(dest)

def displayGraph(adj, v):
    for i in range(v):
        print(i, "-->", end = " ")
        for j in range(len(adj[i])):
            print(adj[i][j], end = " ")
        print()

# function to get reverse of graph taking adj list of given graph
def reverseGraph(adj, reverse, v):
    # traverse the adjacency list of given, graph and for each edge (u, v) add  
    # an edge (v, u) in the transpose graph's adjacency list 
    for i in range(v):
        for j in range(len(adj[i])):
            addEdge(reverse, adj[i][j], i)

# Driver code
if __name__ == '__main__':
    v = 4
    adj = [[] for i in range(v)]
    addEdge(adj, 0, 1)
    addEdge(adj, 0, 3)
    addEdge(adj, 1, 2)


    # find reverse of graph represented by adja. list adj[]
    reverse = [[] for i in range(v)]
    reverseGraph(adj, reverse, v)
    # display reverse
    displayGraph(reverse, v)

