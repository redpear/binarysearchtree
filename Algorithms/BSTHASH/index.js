class Node {
    constructor(map){
      this.map = map;
      this.left = null;
      this.right = null;
      this.root = root;
      this.newNode = newNode;
    }
  
    insert() {
      //for(let value of map.values()){
        if(this.root === null){
          this.root = value;
           return;
        } else if(value < this.root && this.left){
            this.newNode = this.left.insert(value);
        } else if(value < this.newNode){
            this.left = new Node(value);
            this.newNode = new Node(value);
        } else if(value > this.newValue && this.right){
            this.right.insert(value);
        } else {
          return null;
        }
  
        //  console.log('Values' + ' ' + value);
        //console.log('new method' + ' ' + value);
      
    //}
  
  
    }
  }