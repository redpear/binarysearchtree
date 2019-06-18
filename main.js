/*

    Map in a Binary Search Tree

*/

const map = new Map();
      map.set('root', 'name')
         .set('simple', 'dimple')
         .set('sally', 'sunshine')
         .set('sandy','beach')
         .set('things', 'apples')
         .set('uncles', 'aunts')
         .set('windy', 'town');

const iterator = map.entries();
//console.log(map.set(['root'], 'name'));

class BinarySearchTree {
    constructor(key, value){
        this.left = null;
        this.right = null;
        this.root = null;
        this.key = key;
        this.value = value;
    }

    insert(key, value) {
        //console.log(`Key passed in: ${key}  value: passed in ${value}`);
        for(let item of map.entries()){
                this.key = item[0];
                this.value = item[1];

                if(this.root === null){
                    this.root = item[0];
                    console.log('Root' + ' ' + this.root);
                }
                if(key < item[0] && this.left && this.root !== null){
                    
                    this.left = this.insert(this.key, this.value);
                    
                    console.log("this.left key: " + ' ' + item[0]);
                    console.log("this.left value: " + ' ' + item[1]);
                    console.log("insert left:" + ' ' +  map.set(this.key, this.value));
                    // this.insert(map.set(this.key, this.value)));

                } else if(key < item[0] && this.root !== null){
                
                    console.log("this.left 2 key" + ' ' + this.key);
                    console.log("this.value 2 value" + " " + this.value);

                this.left = map.set(this.key, this.value);
                
                console.log("this.left = " + ' ' + this.left);
                console.log('left new Node' + ' ' + map.set(this.key, this.value));
                 
             } else if(key > item[0] && this.right && this.root !== null){
                 
                 console.log(this.insert(map.set(this.key, this.value)));
                 console.log("this.right key" + ' ' + )
                 console.log('right insert node: ' + ' ' + map.set(this.key, this.value));

                 // this.right.insert(map.set(this.key, this.value
             } else if(key > item && this.root !== null){

                this.right = map.set(this.key, this.value);

                console.log("this.right: " + ' ' + this.right);
                console.log("new right node: " + ' ' + map.set(this.key, this.value));

             } else {
                 return null;
             }

            // for(let ent of map.entries()){
            //     console.log('Key' + ' ' + ent + ' ' + '' + 'Value: ' + ' ' + iterator.next().value);
            // }
        }
    }
}

const bst = new BinarySearchTree('root', 'name');
console.log(bst.insert('just', 'this story for the shelves'));





/*
    contains(key, value){
        for(let val of map.values()){
            if(val === value){
                return map.set(key,value);
            }

            if(val < value && this.right){
                return this.right.contains(map.set(key,value));
            } else if(val > value && this.left){
                return this.left.contains(map.set(key,value));
            } else {
                return null;
            }
        }
    }

    // I'm wondering if I can just use map.value
    // instead of looping through the values in 
    // every method? I've never used the map class
    // before. I'm going to test this with Jest seeing 
    // if I can get rid of the loops in the methods.
    validate(map, min = null, max = null){
        for(let val of map.values()){
            if(max !== null && map.value > max){
                return false;
        }
            if(min !== null && map.value < min){
                return false;
        }
            if(map.left && !this.validate(map.left, min, map.data)){
                return false;
            }

            if(map.right && !this.validate(map.right, max, map.data));
                return false;

        }
    }
}

module.exports = BinarySearchTree, Map;


*/
