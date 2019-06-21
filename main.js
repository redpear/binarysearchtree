// constructor functions

function LinkedList() {
    this.head = null;
    this.tail = null;
}

    

function Node(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
}



// class LinkedList {
//     constructor() {
//       this.head = null;
//       this.tail = null;
//     }
// }


LinkedList.prototype.addToHead = function(value) {
    let newNode = new Node(value, this.head, null)

    //if the head exists
    if(this.head){
        this.head.prev = newNode;
    } else {    // no nodes and list is empty
        this.tail = newNode;
    }  
    this.head = newNode;
}

LinkedList.prototype.addToTail = function(value){
    let newNode = new Node(value, null, this.tail);
    if(this.tail)    //if the ll is not empty   // is the linked list empty or not
        this.tail.next = newNode;
    else
        this.head = newNode;    // if the ll is empty create a head node

        this.tail = newNode;    // return tail node
}

// class Node {
//     constructor(value, next, prev) {
//       this.value = value;
//       this.next = next;
//       this.prev = prev;
//     }
//   }

// LinkedList.prototype.addToHead = function(value) {
//     var newNode = new Node(value, this.head, null)

//     // if the head exists
//     if(this.head){
//         this.head.prev = newNode;
//     } else {    // no nodes and list is empty
//         this.tail = newNode;
//     }  
//     this.head = newNode;
// }


// test - 6 addToTail()
const linkedlist = new LinkedList();
linkedlist.addToTail(10);
linkedlist.addToHead(20);
linkedlist.addToHead(30);

console.log(linkedlist.head.next.prev);
console.log(linkedlist.tail.prev.next);
//console.log(link)

// test - 5 addToTail()
// const linkedlist = new LinkedList();
// linkedlist.addToTail(10);
// linkedlist.addToHead(20);

// console.log(linkedlist);

// test - 4 addToTail()
// const linkedlist = new LinkedList();
// linkedlist.addToTail(10);
// console.log(linkedlist);

// test - 3 addToHead()
// const linkedlist = new LinkedList();
// linkedlist.addToHead(100);
// linkedlist.addToHead(200);
// linkedlist.addToHead(300);
// console.log(linkedlist);

// test 2 - Test Node constructor function
//let node = new Node(100, 'node2', null); // first node, so no previous node
//console.log(node);

// test 1 - Test LinkedList constructor
// let linkedlist = new LinkedList();
// console.log(linkedlist);


  module.exports = { Node, LinkedList };
