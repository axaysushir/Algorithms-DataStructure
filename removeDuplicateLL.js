// Asked by Amazon
// Given a sorted linked list of integers, remove all the duplicate elements in the linked list so that all elements in the linked list are unique.

var deleteDuplicates = function(head) {
    let current = head
    while (current !== null && current.next !== null){
        if (current.next.val === current.val){ // check value of curent ele with next ele
            current.next = current.next.next   // if both ele are same then skip that next ele
        } else{
            current = current.next
        }
    }
    return head
};


/*
Time complexity : O(n). Because each node in the list is checked exactly once to determine if it is a duplicate or not, the total run time is O(n)O(n)O(n), where nnn is the number of nodes in the list.

Space complexity : O(1). No additional space is used.
*/