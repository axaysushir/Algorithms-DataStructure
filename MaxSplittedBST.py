# Max sum of splitted binary tree
# what split of binary tree means. If we have sum for one of splitted tree equal to x, then we know that sum of another tree will be A - x, where A is sum of all nodes. So, for each subtree we just need to find sum of nodes. We can do it using usual dfs.

#     If we reached None node, return 0.
#     In the opposite case, we return sum of elements to the left + to the right + value of current node.
#     We add this sum to res: list in which we keep all sums of subtrees.
#     Finally, we return this sum, so we can use it later for recursion.
#     Then we find maximum value in ans: it will be sum of all nodes, because we have only positive ones and find maximum among x*(A-x).

class Solution:
    def maxProduct(self, root):
        def dfs(node):
            if not node: return 0
            ans = dfs(node.left) + dfs(node.right) + node.val
            res.append(ans)
            return ans
        
        res = []
        dfs(root)
        sum = max(res)
        return max(i*(sum - i) for i in res) % (10**9 + 7)