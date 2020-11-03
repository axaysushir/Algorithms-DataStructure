# Given a list of undirected edges which represents a graph, find out the number of connected components.
class solution:
    def __init__(self, V):
        self.V = V
        self.adj = [[] for i in range(V)]

    def dfs(self, temp, v, visited):
        visited[v] = True
        temp.append(v)

        for i in self.adj[v]:
            if visited[i] == False:
                temp = self.dfs(temp, i, visited)
        
        return temp

    def addEdge(self, v, w):
        self.adj[v].append(w)
        self.adj[w].append(v)

    def num_connected_components(self):
        visited = []
        connect = []
        for i in range(self.V):
            visited.append(False)
        for v in range(self.V):
            if visited[v] == False:
                temp = []
                connect.append(self.dfs(temp, v, visited))
        return connect

if __name__=="__main__": 
      
    # Create a graph given in the above diagram 
    # 5 vertices numbered from 0 to 4 
    g = solution(5); 
    g.addEdge(1, 0) 
    g.addEdge(2, 3) 
    g.addEdge(3, 4) 
    cc = g.num_connected_components()

    print(cc)
