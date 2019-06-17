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
           ['top']: ['root'].toString(),
           ['key1']: 'sandwishes in the summer'.toString(),
           ['key2']: 'alphabet soup on a rainy day'.toString(),
           ['key3']: 'banansplit sunday on a friday night'.toString(),
           ['key4']: 'laughing in the springtime'.toString(),
           ['key5']: 'seven spinning tops',
           ['key6']: 'tables at picniques',
           ['key7']: 'rust is bad on bikes',
        }
   }
}

const hash = new HashMap(['top', 'node']);

for(let i in hash.collection){
    console.log("Key: " + ' ' + i + ' ' + "Value: " + ' ' + hash.collection[i]);
}


// for(let key in hash){
//    console.log(`Key  ${key}, ${hash[key].toString()}` );
// }

/*class BinarySearchTree {
   constructor(key, value){
       this.key = key;
       this.value = value;
   }

   insert(key, value){
       for(let val of map.values()){
           if(map.root === null){
               map.root = value;
           }
           else if(value < val && this.left){
               this.left.insert(map.set(key, value));     
           } else if(value < val){
               this.left = map.set(key, value);
           } else if(value > val && this.right){
               this.right.insert(map.set(key,value));
           } else if(value > val){
               this.right = map.set(key, value);
           } else {
               return null;
           }
       }
   }

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