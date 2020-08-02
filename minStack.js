/** Design a simple stack that supports push, pop, top, and retrieving the minimum element in constant time.
BY Uber
push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.

Note: be sure that pop() and top() handle being called on an empty stack.
class minStack(object):
  def __init__(self):
    # Fill this in.

  def push(self, x):
    # Fill this in.

  def pop(self):
    # Fill this in.

  def top(self):
    # Fill this in.

  def getMin(self):
    # Fill this in.

x = minStack()
x.push(-2)
x.push(0)
x.push(-3)
print(x.getMin())
# -3
x.pop()
print(x.top())
# 0
print(x.getMin())
# -2
**/

var MinStack = function() {
    this.stack = []
}

// PUSH
MinStack.prototype.push = function(x) {
    this.stack.push(x)
}
//POP
MinStack.prototype.pop = function() {
    this.stack.pop()
}
// TOP ele
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1]
}
// GET Minimum
MinStack.prototype.getMin = function() {
    return Math.min(...this.stack)
}

// run function
var obj = new MinStack()
obj.push(-2)
obj.push(0)
obj.push(-3)
console.log(obj.getMin());  // -3

obj.pop()
var x = obj.top() // 0
console.log(x);
console.log(obj.getMin());  // -2