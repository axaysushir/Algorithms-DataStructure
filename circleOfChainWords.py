'''Two words can be 'chained' if the last character of the first word is the same as the first character of the second word. 

Given a list of words, determine if there is a way to 'chain' all the words in a circle.

Example:
Input: ['eggs', 'karat', 'apple', 'snack', 'tuna']
Output: True
Explanation:
The words in the order of ['apple', 'eggs', 'snack', 'karat', 'tuna'] creates a circle of chained words.


1) Create a directed graph g with number of vertices equal to the size of alphabet. We have created a graph with 26 vertices in the below program.

2) Do following for every string in the given array of strings.
…..a) Add an edge from first character to last character of the given graph.

3) If the created graph has eulerian circuit, then return true, else return false.
'''
Chars = 26

class Graph(object):
    def __init__(self, v):
        self.v = v #  no. of verices
        self.adj = [[] for x in range(v)] #dynamic arr
        self.inp = [0] * v

    # function to add an edge to graph
    def addEdge(self, v, w):
        self.adj[v].append(w)
        self.inp[w] += 1

    # Method to check if this graph is Eulerian or not
    def isEulOrNot(self):
        # Mark all vertices are not visited
        visited = [False] * self.v

        # Find the first vertex with non-zero degree
        n = 0
        for n in range(self.v):
            if len(self.adj[n]) > 0:
                break
        # do DFS trav. start from first non-zero degree
        self.DFSUtil(n, visited)
        # if all vert is not visited in second dfs then return false
        for i in range(self.v):
            if len(self.adj[i]) > 0 and visited[i] == False:
                return False
        # create reverse graph
        gr = self.getTranspose()
        # mark all ver as not visited
        for i in range(self.v):
            visited[i] = False

        # Do DFS for reversed graph starting from first vertex. 
        # Staring Vertex must be same starting point of first DFS 
        gr.DFSUtil(n, visited)
        # if all vert is not visited in second dfs then return false
        for i in range(self.v):
            if len(self.adj[i]) > 0 and visited[i] == False:
                return False
        return True
        
    def isEulerianCycle(self):
        # check all non zero vertices are connected
        if self.isEulOrNot() == False:
            return False
        # check is in or out degree of every vertex is same
        for i in range(self.v):
            if len(self.adj[i]) != self.inp[i]:
                return False
        return True

    # DFS func
    def DFSUtil(self, v, visited):
        # mark current node as visited and mark true
        visited[v] = True
        # recir for all verices adj to this vertex
        for i in range(len(self.adj[v])):
            if not visited[self.adj[v][i]]:
                self.DFSUtil(self.adj[v][i], visited)

    # func that return reverse of this graph
    def getTranspose(self):
        g = Graph(self.v)
        for v in range(self.v):
            # recur for all vertices
            for i in range(len(self.adj[v])):
                g.adj[self.adj[v][i]].append(v)
                g.inp[v] += 1
        return g

# this return true or false
def canBeChained(arr, n):
    g = Graph(Chars)
    # create edge
    for i in range(n):
        s = arr[i]
        g.addEdge(ord(s[0]) - ord('a'), ord(s[len(s) - 1]) - ord('a'))

    return g.isEulerianCycle()

# run code
arr = ["for", "geek", "rig", "kaf"]
n = len(arr)
if canBeChained(arr, n):
    print(True)
else: print(False)