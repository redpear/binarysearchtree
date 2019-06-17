

let map = new Map();
map.set("root", "name")
map.set("simple", "dimple");
map.set("sally", "sunshine");
map.set("sandy","beach");
map.set("things", "apples");
map.set("uncles", "aunts");
map.set("windy", "town");

map.prototype.constructor.left;
map.prototype.constructor.right;
map.prototype.constructor.root;

class BinarySearchTree {
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



