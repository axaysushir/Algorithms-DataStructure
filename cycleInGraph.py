from collections import defaultdict

# time comolexity is O(V+E) program does simple DFS traversal to the graph which is represented using
# adjacency list SPACE COMPLEXITY O(V) TO store visited array


class Graph:
    def __init__(self, vertices):
        self.v = vertices
        self.graph = defaultdict(list)  # default dictionary to store graph

    # fucntion to add an edge to graph
    def addEdge(self, v, w):
        self.graph[v].append(w)  # add w to v list
        self.graph[w].append(v)  # add v to w list

    # A recursive function that uses visited[] and parent to detect
    # cycle in subgraph reachable from vertex v.
    def isCyclicUtil(self, v, visited, parent):
        # mark current node as visited
        visited[v] = True
        # Recur for allthe vertices adjacent to vertex
        for i in self.graph[v]:
            # if node is not visited then rec on it
            if visited[i] == False:
                if (self.isCyclicUtil(i, visited, v)):
                    return True
                # if adjacent vertex is visited  not parent of current vert then it is cycle
                elif parent != i:
                    return True
        return False

    # return true if cycle
    def isCyclic(self):
        # mark allvertices not visited
        visited = [False]*(self.v)
        #  call recursive helper function to detect cycle in different DFS Tree
        for i in range(self.v):
            if visited[i] == False:
                if (self.isCyclicUtil(i, visited, -1)) == True:
                    return True
        return False


g = Graph(-1)
g.addEdge(0, 1)
g.addEdge(1, 2)
# g.addEdge(0, 2)
# g.addEdge(2, 0)
# g.addEdge(0, 3)
# g.addEdge(3, 4)


print(g.isCyclic())
