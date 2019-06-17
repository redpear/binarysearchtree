//console.log('hello?');

class HashMap {
    constructor(key, value){
       this.key = key;
       this.value = value;
       this.root = null;
       this.left = null;
       this.right = null;
       this.collection = {
           ['top']: [root],
           ['key1']: ['sandwishes in the summer'],
           ['key2']: ['alphabet soup on a rainy day'.toString()],
           ['key3']: ['banansplit sunday on a friday night'.toString()],
           ['key4']: ['laughing in the springtime'.toString()],
           ['key5']: ['seven spinning tops'],
           ['key6']: ['tables at picniques'],
           ['key7']: ['rust is bad on bikes'],
        }
   }
}

const hash = new HashMap(['top', 'node']);
console.log(hash);


for(let i in hash.collection){
    console.log("Key" + ' ' + i + ' ' + hash[i]);
}

// const hash = new HashMap(['test'], 'node');
// hash['top'] = {['root']: 'name'};
// hash['item1'] = {['key1']: 'sandwishes in the summer'.toString()};
// hash['item2'] = {['key2']: 'alphabet soup on a rainy day'.toString()};
// hash['item3'] = {['key3']: 'banansplit sunday on a friday night'.toString()};
// hash['item4'] = {['key4']: 'laughing in the springtime'.toString()};
// hash['item5'] = {['key5']: 'kite festival all weekend'.toString()};

// array={'key1': 'value1',['key'+2]:'value2'};



/*
const hash = new HashMap(['test'], 'node');
hash = {['root']: 'name'};
hash = {['key1']: 'sandwishes in the summer'.toString()};
hash = {['key2']: 'alphabet soup on a rainy day'.toString()};
hash = {['key3']: 'banansplit sunday on a friday night'.toString()};
hash = {['key4']: 'laughing in the springtime'.toString()};
hash = {['key5']: 'kite festival all weekend'.toString()};

console.log(hash['top']);

*/

// this works to return the keys
// for(let i in hash){
//    console.log(`What is this ${i}, ${hash[i]}`);
// }

// for(let [key, val] in hash){
//     Logger.log(`The Key: ${key}`);
//     Logger.log(`The Value: ${val}`);
//  }


/*
hash.foreach(function(val){
   let root = val.top;
   let one = val.key1;
   let two = val.key2;
   let three = val.key3;
   let four = val.key4;
   let five = value.key5;

   console.log(root);
   console.log(one);
   console.log(two);
   console.log(three);
   console.log(four);
   console.log(five);

});
*/




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