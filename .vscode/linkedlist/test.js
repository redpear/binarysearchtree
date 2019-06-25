const L = require('./main'); 
const LinkedList = L.LinkedList;
const Node = L.Node;

// LinkedList constructor test
test('Tests the Constructor function for LinkedList', () => {
  expect(typeof LinkedList.prototype.constructor).toEqual('function');
});

// Node constructor test
test('Node is a class', () => {
    expect(typeof Node.prototype.constructor).toEqual('function');
  });

  
// test 3 addToHead
describe('Insert First node', () => {
    test('adds a new node, the one node is the head and the tail', () => {
      const linkedLlist = new LinkedList();
        linkedLlist.addToHead(100);
        linkedLlist.addToHead(200);
        
        expect(linkedLlist.head.value).toEqual(200)
        expect(linkedLlist.tail.value).toEqual(100);
    });
});

// test 4 addToHead
describe.skip('Insert a second node', () => {
    test('adds a new node to existing node, the two nodes: head and the tail', () => {
      const linkedLlist = new LinkedList();
      
      const headNode = new Node(300, 200, null);
    //   const headNext = new Node(200, 100, 300);
    //   const tailPrev = new Node(100, 300, 200);
      //const tailPrev = new Node(100, null, new Node(200, 100, 300));
      
      linkedlist.addToHead(100);
      linkedlist.addToHead(200);
      linkedlist.addToHead(300);
        

        // expect(linkedLlist.head.prev).toEqual(null);
        // expect(linkedLlist.head.next).toEqual(200);
        // expect(linkedLlist.head.value).toEqual(300);

        expected(linkedLlist.head).toEqual(headNode)
        
    });
});

describe('test to try this another way', () => {
    test('adds new nodes to the linkedlist', () => {
        const linkedLlist = new LinkedList();
        
        linkedLlist.addToHead(100)
        linkedLlist.addToHead(200)

        expect(linkedLlist.head.value).toEqual(200);
        expect(linkedLlist.tail.value).toEqual(100);
    });
});

// test 6 addToTail
describe('Insert tail node', () => {
    test('adds a tail node, the one node is the head and the tail', () => {
      const linkedLlist = new LinkedList();
        linkedLlist.addToTail(10);
        
        expect(linkedLlist.head.value).toEqual(10)
        
    });
});

// test 7 addToTail
describe('Insert tail node', () => {
    test('tests the addToTail()', () => {
      const linkedLlist = new LinkedList();

        linkedLlist.addToTail(10);
        //expect(linkedLlist.head).toEqual(new Node(null, null, 10));
        expect(linkedLlist.tail.value).toEqual(10);

        expect(linkedLlist.head).toEqual(new Node(10, null, null));
        expect(linkedLlist.tail).toEqual(new Node(10, null, null));
    });
});

// test 8 addToHead and addToTail
describe.skip('Insert a head node and a tail node', () => {
    test('tests addToHead and addToTail()', () => {
      const linkedLlist = new LinkedList();

        linkedLlist.addToHead(20);
        linkedLlist.addToTail(10);

        expect(linkedLlist.head.value).toEqual(20);
        expect(linkedLlist.tail.value).toEqual(10);

        expect(linkedLlist.head).toEqual(new Node(20, null, new Node(10, null, null)));
        expect(linkedLlist.tail).toEqual(new Node(10, null, null));
        
    });
});

