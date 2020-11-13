# Given a positive integer n, find all primes less than n.

def isPrime(n):
    if n <= 1:
        return False
    
    # check from 2 to n
    for i in range(2, n):
        if n % i == 0:
            return False
    
    return True

def findPrime(n):
    for i in range(2, n + 1):
        if isPrime(i):
            print(i, end = ' ')

findPrime(14)

# Time complexity: O(n * n)
# one of the devisor is smaller then or equal to √n so check divisib. only till √n

# solution 2:
def is_Prime(n):
    if n <= 1:
        return False
    if n <= 3:
        return True

    if (n % 2 == 0 or n % 3 == 0):
        return False
    
    i = 5
    while i * i <= n:
        if n % i == 0 or n % (i + 2) == 0:
            return False
    
    return True

def find_prime(n):
    for i in range(2, n+1):
        if is_Prime(i):
            print(i, end = ' ')

find_prime(12)