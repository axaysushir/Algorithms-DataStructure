# Maximum In A Stack by twitter
# Implement a class for a stack that supports all the regular functions (push, pop) and an additional function of max() which returns the maximum element in the stack (return None if the stack is empty). Each method should run in constant time.
# Time Complexity: O(N) for the popMax operation, and O(1)O(1)O(1) for the other operations, where NNN is the number of operations performed.
# Space Complexity: O(N), the maximum size of the stack.
# Two stack
# For peekMax, we remember the largest value we've seen on the side. For example if we add [2, 1, 5, 3, 9], we'll remember [2, 2, 5, 5, 9]. This works seamlessly with pop operations, and also it's easy to compute: it's just the maximum of the element we are adding and the previous maximum.
# For popMax, we know what the current maximum (peekMax) is. We can pop until we find that maximum, then push the popped elements back on the stack.
# Our implementation in Python will showcase extending the list class.
# Double linked list + trreMap

class MaxStack(list):
    def push(self, x):
        m = max(x, self[-1][1] if self else float('-inf'))
        self.append((x, m))

    def pop(self):
        return list.pop(self)[0]

    def top(self):
        return self[-1][0]

    def peekMax(self):
        return self[-1][1]

    def popMax(self):
        m = self[-1][1]
        b = []
        while self[-1][0] != m:
            b.append(self.pop())

        self.pop()
        map(self.push, reversed(b))
        return m


s = MaxStack()
s.push(2)
s.push(1)
s.push(3)
s.push(9)
s.pop()
s.pop()
print(s.popMax())
