const L = require('./index'); 
const LinkedList = L.LinkedList;
const Node = L.Node;

test('Tests the Constructor function for LinkedList', () => {
  expect(typeof LinkedList.prototype.constructor).toEqual('function');
});

test('Node is a class', () => {
    expect(typeof Node.prototype.constructor).toEqual('function');
  });

  // test - 3 
// const linkedlist = new LinkedList();
// linkedlist.addToHead(100);
// console.log(linkedlist);


describe('Insert First node', () => {
    test('adds a new node, the one node is the head and the tail', () => {
        const linkedLlist = new LinkedList();
        linkedLlist.addToHead(100);
        expect(linkedLlist.head.value).toEqual(100);
    });
});