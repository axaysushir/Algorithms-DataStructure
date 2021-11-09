// 876. Middle of the Linked List

// Given the head of a singly linked list, return the middle node of the linked list.

// If there are two middle nodes, return the second middle node.
// Example 1:

// Input: head = [1,2,3,4,5]
// Output: [3,4,5]
// Explanation: The middle node of the list is node 3.

// Example 2:

// Input: head = [1,2,3,4,5,6]
// Output: [4,5,6]
// Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.

// Fast & slow pointer - Time - O(n) & space O(1)
// When traversing the list with a pointer slow, make another pointer fast that traverses twice as fast. When fast reaches the end of the list, slow must be in the middle.
var middleNode = function(head) {
    slow = fast = head;
    while (fast && fast.next){
        slow = slow.next
        fast = fast.next.next;
    }
    return slow
};

// Output to Arr: Time & space: O(N)
// Put every node into an array A in order. Then the middle node is just A[A.length // 2], since we can retrieve each node by index.
// We can initialize the array to be of length 100, as we're told in the problem description that the input contains between 1 and 100 nodes.
var middle = head => {
    let arr = [head]
    while (arr[arr.length-1].next !== null) {
        arr.push(arr[arr.length-1].next)
    }
    return arr[Math.trunc(arr.length/2)]
}