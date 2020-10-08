// Given a linked list, swap the position of the 1st and 2nd node, then swap the position of the 3rd and 4th node etc.
function Node(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
var swapPairs = head => {
    return pairs(head)

    function pairs(node) {
        if (!node) return null
        const nextNode = node.next
        if (nextNode) {
            node.next = pairs(nextNode.next)
            nextNode.next = node
        }
        return nextNode ? nextNode: node 

    }
}
