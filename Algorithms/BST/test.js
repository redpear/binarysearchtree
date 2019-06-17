const Node = require('./index');

test('Node is a constructor', () => {
  expect(typeof Node.prototype.constructor).toEqual('function');
});

test('Node can insert correctly', () => {
  const map = new Map();
  const node = new Node(map);
    map.set('root', 'name');
    map.set('thing', 'thang');
    map.set('go', 'away');
    map.set('time', 'tells');
    
    node.insert();
    node.insert();
    node.insert();
    node.insert();

    expect(test1).toEqual('name');
    expect(test2).toEqual('thang');
    expect(test3).toEqual('away');
    expect(test4).toEqual('tells');
});

/*
test('Contains returns node with the same data', () => {
  const node = new Node(10);
  node.insert(5);
  node.insert(15);
  node.insert(20);
  node.insert(0);
  node.insert(-5);
  node.insert(3);

  const three = node.left.left.right;
  expect(node.contains(3)).toEqual(three);
});

test('Contains returns null if value not found', () => {
  const node = new Node(10);
  node.insert(5);
  node.insert(15);
  node.insert(20);
  node.insert(0);
  node.insert(-5);
  node.insert(3);

  expect(node.contains(9999)).toEqual(null);
});
*/