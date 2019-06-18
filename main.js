//console.log('hello?');

/*let map = new Map();
map.set("root", "name")
map.set("simple", "dimple");
map.set("sally", "sunshine");
map.set("sandy","beach");
map.set("things", "apples");
map.set("uncles", "aunts");
map.set("windy", "town");
*/


//console.log(map.get('root'));
//console.log(map.get('simple'));

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
    constructor(){
        this.left = null;
        this.right = null;
        this.root = null;
    }

    insert(key, value) {
        console.log(`Key passed in: ${key}  value: passed in ${value}`);
        for(let item of map.entries()){
            
            if(this.root === null){
                this.root = item[0];
                console.log('Root' + ' ' + this.root);
                //console.log(`Item ${item}`);
            }
            if(key < this.root && this.left){
                console.log("Hello " + ' ' + this.insert(item));
                //console.log('Root ' + ' ' + this.root);
                //console.log('Insert Left: ' + ' ' + map.set(key, value));
                //console.log(`the insert left` + ' ' + this.left.insert(map.set(key, value)));
                console.log(item[0]);
             } else if(key < item[0]){
                 console.log("key" + ' ' + key);
                 console.log("this.key" + " " + item[0]);
                 //this.left = map.set(key, value);
             } else if(key > this.root && this.right){
                 console.log(this.right.insert(item));
             } //else if(key > item){
            //     this.right = map.set(key, value);
            // } else {
            //     return null;
            // }

            // for(let ent of map.entries()){
            //     console.log('Key' + ' ' + ent + ' ' + '' + 'Value: ' + ' ' + iterator.next().value);
            // }
        }
    }
}

const bst = new BinarySearchTree();
console.log(bst.insert('just', 'this story for the shelves'.toString()));





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
