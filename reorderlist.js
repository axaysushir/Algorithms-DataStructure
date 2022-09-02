function reorderList(head) {
    let fast = slow = head

    while (fast && fast.next) {
        fast = fast.next.next
        slow = slow.next
    }
    // store second half
    let secondhalf = slow.next
    // make last node in left half equal to null
    slow.next = null;

    // rev right half
    let prev = null
    while (second) {
        let temp = secondhalf.next
        secondhalf.next = prev
        prev = second
        second = temp
    }

    let left = head, right = prev
    // alternate node
    while (right && left) {
        let templeft = left.next
        let tempright = right.next

        left.next = right
        right.next = templeft

        left = templeft
        right = tempright
    }
}