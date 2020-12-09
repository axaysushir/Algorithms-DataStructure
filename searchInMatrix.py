# Given a matrix that is organized such that the numbers will always be sorted left to right, and the first number of each row will always be greater than the last element of the last row (mat[i][0] > mat[i - 1][-1]), search for a specific value in the matrix and return whether it exists.

def searchMatrix(matrix, value):
    for i in range(len(matrix)):
        for j in range(len(matrix)):
            if matrix[i][j] == value:
                return True
    
    return False


mat = [
    [1, 3, 5, 8],
    [10, 11, 15, 16],
    [24, 27, 30, 31],
]

print(searchMatrix(mat, 4))
# False

print(searchMatrix(mat, 10))
# True
print(searchMatrix(mat, 6))
