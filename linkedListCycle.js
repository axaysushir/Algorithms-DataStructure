/* Asked by UBER
Given a linked list, determine if the linked list has a cycle in it. For notation purposes, we use an integer pos which represents the zero-indexed position where the tail connects to.

Example: 
Input: head = [4,3,2,1,0], pos = 1.  
Output: true
The example indicates a list where the tail connects to the second node.
*/

// Solution 1: using Hash table

var hasCycle = function(head) {
    let nodeSeen = new Set()
    while (head !== null) {
        if (nodeSeen.has(head)) {
            return true
        } else {
            nodeSeen.add(head)
        }
        head = head.next
    }
    return false
};


//Time complexity : O(n). We visit each of the nnn elements in the list at most once. Adding a node to the hash table costs only O(1)O(1)O(1) time.
// Space complexity: O(n). The space depends on the number of elements added to the hash table, which contains at most nnn elements. 


// Solution 2: Two pointers  fater by 93% for all online submission
/*
The space complexity can be reduced to O(1)O(1)O(1) by considering two pointers at different speed - a slow pointer and a fast pointer. The slow pointer moves one step at a time while the fast pointer moves two steps at a time.

If there is no cycle in the list, the fast pointer will eventually reach the end and we can return false in this case.

Now consider a cyclic list and imagine the slow and fast pointers are two runners racing around a circle track. The fast runner will eventually meet the slow runner. Why? Consider this case (we name it case A) - The fast runner is just one step behind the slow runner. In the next iteration, they both increment one and two steps respectively and meet each other.

How about other cases? For example, we have not considered cases where the fast runner is two or three steps behind the slow runner yet. This is simple, because in the next or next's next iteration, this case will be reduced to case A mentioned above.
*/
var hasCycle = function(head) {
    if (head === null || head.next === null) return false
    
    let slow = head;
    let fast = head.next;
    while (slow !== fast){
        if (fast === null || fast.next === null) {
            return false
        }
        slow = slow.next
        fast = fast.next.next
    }
    return true
}

// Time complexity: O(n) Space complexity: O(1)