//console.log('hello?');

// array={'key1': 'value1',['key'+2]:'value2'};

class HashMap {
    constructor(key, value){
       this.key = key;
       this.value = value;
       this.root = null;
       this.left = null;
       this.right = null;
       this.collection = {
           ['top']: 'root'.toString(),
           ['apple']: 'sandwishes in the summer'.toString(),
           ['truck']: 'alphabet soup on a rainy day'.toString(),
           ['vendor']: 'banansplit sunday on a friday night'.toString(),
           ['quiz']: 'laughing in the springtime'.toString(),
           ['banana']: 'seven spinning tops'.toString(),
           ['carrots']: 'tables at picniques'.toString(),
           ['xylaphone']: 'rust is bad on bikes'.toString(),
        }
   }
}


class BinarySearchTree {
    constructor(){
        this.hash = new HashMap(['node', 'root']);
    }

    insert(key, value){
        for(let item in hash.collection){
            if(key < item && this.left){
                this.left.insert(this.collection= {['penguin']:'party'});

            }




            console.log("Key: " + ' ' + item + ' ' + "Value: " + ' ' + hash.collection[item]);
        }
    }
}

this.collection = {['random']: 'house'};
const bst = new BinarySearchTree();
console.log(bst.insert(this.collection));

//module.exports = BinarySearchTree, HashMap;

