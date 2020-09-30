'''
Given a list of words, for each word find the shortest unique prefix. You can assume a word will not be a substring of another word (ie play and playing won't be in the same words list)

Example
Input: ['joma', 'john', 'jack', 'techlead']
Output: ['jom', 'joh', 'ja', 't']

If we want to output the prefixes as the order of strings in the input array, 
we can store the string and its corresponding index in the hashmap. While adding 
the prefix to the result array, we can get the index of the corresponding string 
from the hashmap and add the prefix to that index.
'''

a=['dogs','dove','duck','zebra']


def shortest(word):
    r=[]
    j=0
    while (j < min(len(a[0]), len(a[1]))):
        if a[0][j] == a[1][j]:
            j += 1
        else:
            break

    i = 0
    r.append(a[0][0: j+1])
    x= a[1][0: j+1]

    for i in range(1, len(a) - 1):
        j= 0
        while (j < min(len(a[i]), len(a[i+1]))):
            if a[i][j] == a[i+1][j]:
                j+=1
            else :
                break
        
        y = a[i][0: j+1]
        if len(x) > len(y):
            r.append(x)
        else:
            r.append(y)
        x = a[i + 1][0: j+1]
    
    l = a[len(a) - 2]
    k = a[len(a) - 1]

    while (j < min(len(l), len(k))):
        if l[j] == k[j]:
            j+=1
        else:
            break
    r.append(k[0:j+1])

    for i in range(0, len(r)):
        print(r[i], end = ' ')

print(shortest(a))