# Given a matrix, transpose it. Transposing a matrix means the rows are now the column and vice-versa.


def transpose(A):
    res = []
    for i in range(len(A[0])):
        temp = []
        for j in range(len(A)):
            temp.append(A[j][i])
        res.append(temp)
    
    return res

mat = [
    [1, 2, 3],
    [4, 5, 6],
]

print(transpose(mat))
# [[1, 4], [2, 5], [3, 6]]