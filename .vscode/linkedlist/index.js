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

LinkedList.prototype.removeHead = function() {
    if(!this.head)
        return null;
    let val = this.head.value;

        this.head = this.head.next;

        if(this.head)
            this.head.prev = null;
        else
            this.tail = null;

    return val;
};

LinkedList.prototype.removeTail = function() {
    if(!this.tail)
        return null;
    let val = this.tail.value;
    console.log(val);
    this.tail = this.tail.prev;
    if(this.tail)
       this.tail.next = null;
    else
        this.head = null;

    return val;
};

LinkedList.prototype.search = function(searchValue) {
    let currentNode = this.head;

    while(currentNode){
        if(currentNode.value === searchValue)
            return currentNode.value;
        currentNode = currentNode.next;
    }

    return null;

};

LinkedList.prototype.indexOf = function(value) {
    let indexes = [];
    currentIndex = 0;
    let currentNode = this.head;
    while(currentNode){
        if(currentNode.value === value)
            indexes.push(currentIndex);
        currentNode = currentNode.next;
        currentIndex++;
    }

    return indexes;
};

// test - 11 addToHead && addToTail
const linkedList = new LinkedList();

linkedList.addToTail(1);
linkedList.addToTail(5);
linkedList.addToTail(3);
linkedList.addToTail(5);
linkedList.addToTail(8);
linkedList.addToTail(7);
linkedList.addToTail(5);

console.log(linkedList.indexOf(7));


// test - 9 addToHead && addToTail
// const linkedList = new LinkedList();

// linkedList.addToHead('one');
// linkedList.addToHead('two');
// linkedList.addToHead('three');

// // linkedList.removeTail();
// console.log(linkedList.removeTail());

// test - 8 addToHead && addToTail
// const linkedList = new LinkedList();

// linkedList.addToHead(1000);
// linkedList.addToHead(2000);
// linkedList.addToTail(3000);

// linkedList.removeHead();
// console.log(linkedList.removeHead());


// test - 7 addToHead && addToTail
// const linkedList = new LinkedList();

// linkedList.addToTail(10);
// inkedList.addToTail(20);
// inkedList.addToTail(30);
// inkedList.addToHead(100);

// console.log(linkedList);

// test - 6 addToTail()
// const linkedlist = new LinkedList();
// linkedlist.addToTail(10);
// linkedlist.addToHead(20);
// linkedlist.addToHead(30);

// console.log(linkedlist.head.next.prev);
// console.log(linkedlist.tail.prev.next);

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
