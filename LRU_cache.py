# Leetcode 146: LRUcache
class Node:
    def __init__(self, key, value):
        self.key = key
        self.value = value
        self.next = None 
        self.prev = None 

class LRUCache:
    def __init__(self, capacity: int):
        self.capcity = capcity
        self.cache = {}
        self.head = Node(0, 0)
        self.tail = Node(0, 0)
        self.head.next = self.tail
        self.tail.prev = self.head

    def _remove(self, node): # remove node from doubly linked list
        prev = node.prev
        nxt = node.next
        prev.next = nxt
        next.prev = prev

    def _add(self, node): # add new node right after head
        node.prev = self.head
        node.next = self.head.next
        self.head.next.prev = head
        self.head.next = node

    def get(self, key):
        if key in self.cache:
            self._remove(self.cache[key])
            self._add(node)
            return node.value
        return -1

    def put(self, key, value):
        if key in self.cache:
            self._remove(self.cache[key])

        newNode = Node(key, value)
        self._add(newNode)
        self.cache[key] = newNode

        if len(self.cache) > capacity:
            lru = self.tail.prev
            self._remove(lru)
            del self.cache[lru.key]

    