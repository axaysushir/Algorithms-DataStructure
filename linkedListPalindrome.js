/* Asked By Microsoft
You are given a doubly linked list. Determine if it is a palindrome. 

Can you do this for a singly linked list?
class Node(object):
  def __init__(self, val):
    self.val = val
    self.next = None
    self.prev = None

def is_palindrome(node):
  # Fill this in.

node = Node('a')
node.next = Node('b')
node.next.prev = node
node.next.next = Node('b')
node.next.next.prev = node.next
node.next.next.next = Node('a')
node.next.next.next.prev = node.next.next

print is_palindrome(node)
# True
*/

// SOLUTION : Two Pointers

var isPalindrome = head => {
    var fast = head
    var slow = head

    while (fast !== null && fast.next !== null) {
        slow = slow.next
        fast = fast.next.next
    }
    // since fast pointer is twice as fast as slow pointer, by the time fast pointer 
    //reached None, slow pointer will be at middle of the linked list
    fast = head          
    slow = reverse(slow) // reversed the second half of the linked list

    // by the time slow pointer reached None, we know that it is a palindrome
    // linked List. If not, if will be checked by "fast.val !== slow.val"
    while (slow !== null) {
        if (slow.val !== fast.val) {
            return false
        }
        slow = slow.next
        fast = fast.next
    }
    return true
}

var reverse = function(head){    //revisit reversed linked list question
    var prevNode = null

    while (head !== null) {
        var nextNode = head.next
        head.next = prevNode
        prevNode = head
        head = nextNode
    }
    return prevNode
}