//Definition for singly-linked list.
 function ListNode(val) {
    this.val = val;
    this.next = null;
 }


//insertion Sort singly-linked list. 
 var insertionSortList = function(head) {
    if (!head) return null;
    var sorted = head;
    head = head.next;
    sorted.next = null;
    while (head) {
        var prev = null;
        var node = sorted;
        while (node && head.val > node.val) {
            prev = node;
            node = node.next;
        }
        var insert = head;
        head = head.next;
        insert.next = node;
        if (prev) {
            prev.next = insert;
        } else {
            sorted = insert;
        }
    }
    return sorted;
};