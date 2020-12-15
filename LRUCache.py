# LRU cache is a cache data structure that has limited space, and once there are more items in the cache than available space, it will preempt the least recently used item. What counts as recently used is any item a key has 'get' or 'put' called on it.
# Implement an LRU cache class with the 2 functions 'put' and 'get'. 'put' should place a value mapped to a certain key, and preempt items if needed. 'get' should return the value for a given key if it exists in the cache, and return None if it doesn't exist.
# Solution using Hashmap + doule linked node

class doubleLinkNode:
    def __init__(self, prev = None, next=None, key=0, val=0):
        self.prev = prev
        self.next = next
        self.val = val
        self.key = key
        
class LRUCache:
    def __init__(self, space):
        self.space= space
        self.head = doubleLinkNode()
        self.tail = doubleLinkNode()
        self.head.next = self.tail
        self.tail.prev = self.head
        self.cache = {}

    def movetotail(self,p):
        p.next = self.tail
        p.prev = self.tail.prev
        p.prev.next = p
        p.next.prev = p
    
    def pop(self):
        nodetomove = self.head.next
        self.cache.pop(nodetomove.key)
        self.head.next = nodetomove.next
        nodetomove.next.prev = self.head

    def get(self, key):
        if key in self.cache:
            p = self.cache[key]
            p.prev.next = p.next
            p.next.prev = p.prev

            # remove
            self.movetotail(p)
            return p.val
        else:
            return -1

    def put(self, key, value):
        if key in self.cache:
            p = self.cache[key]
            p.val = value
            p.prev.next = p.next
            p.next.prev = p.prev

            self.movetotail(p)
        else:
            node = doubleLinkNode(key=key, val=value)
            self.cache[key] = node
            self.movetotail(node)
            
            if len(self.cache) > self.space:
                self.pop()

cache = LRUCache(2)

cache.put(3, 3)
cache.put(4, 4)
print(cache.get(3))
# 3
print(cache.get(2))
# None

cache.put(2, 2)

print(cache.get(4))
# None (pre-empted by 2)
print(cache.get(3))
# 3
