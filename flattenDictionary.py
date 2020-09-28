''' Asked by google
Given a nested dictionary, flatten the dictionary, where nested dictionary keys can be represented through dot notation.

Example:
Input: {
  'a': 1,
  'b': {
    'c': 2,
    'd': {
      'e': 3
    }
  }
}
Output: {
  'a': 1,
  'b.c': 2,
  'b.d.e': 3
}
'''

# Solution 1

def flattenDIct(dic, separator = '.', prefix = ''):
    return {prefix + separator + k if prefix else k : v
    for kk, vv in dic.items()
    for k, v in flattenDIct(vv, separator, kk).items()
    } if isinstance(dic, dict) else {prefix : dic}

input = {
  'a': 1,
  'b': {
    'c': 2,
    'd': {
      'e': 3
    }
  }
}

print(str(flattenDIct(input)))

# Solution 2 mutableMapping
from collections import MutableMapping

def convert(d, parentKey = '', sep= '.'):
    items = []
    for k, v in d,items():
        newkey = parentKey + sep + k if parentKey else k
    
        if isinstance(v, MutableMapping):
            items.extend(convert(v, newkey, sep = sep).items())
        else:
            items.append((newkey, v))
    
    return dict(items)


#  solution 3: Python generators
def flattenDictionary(pyobj, key=''):
    if type(pyobj) == dict:
        key = key + '.' if key else key
        for k in pyobj:
            yield from flattenDictionary(pyobj[k], key + str(k))
    
    else :
        yield key, pyobj

print("Input : %s\nOutput : %s\n\n" %
     (input, { k:v for k,v in flattenDictionary(input) })) 