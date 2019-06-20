// constructor functions

// function LinkedList() {
//     this.head = null;
//     this.tail = null;
// }

    

function Node(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
}



class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }

    addToHead(value) {
        let newNode = new Node(value, this.head, null)

        //if the head exists
        if(this.head){
            this.head.prev = newNode;
        } else {    // no nodes and list is empty
            this.tail = newNode;
        }  
        this.head = newNode;
    }
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





// test - 3 
const linkedlist = new LinkedList();
linkedlist.addToHead(100);
console.log(linkedlist);

// test 2 - Test Node constructor function
//let node = new Node(100, 'node2', null); // first node, so no previous node
//console.log(node);

// test 1 - Test LinkedList constructor
// let linkedlist = new LinkedList();
// console.log(linkedlist);


  module.exports = { Node, LinkedList };
