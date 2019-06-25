function HashTable(size){
    this.buckets = Array(size);   // where the data is stored, this is the hashtable
    this.numOfbuckets = this.buckets.length

}

function HashNode(key, value, next){
    this.key = key;
    this.value = value;
    this.next = next || null;
}


HashTable.prototype.hash = function(key){
    let total = 0;
    for(let i = 0; i < key.length; i++){    // takes though every character in the key turn into acsii notation
        total += key.charCodeAt(i);
        console.log('total ' + total);       // key converted to numbers
    }

    let bucket = total % this.numOfbuckets;              // take the remainder to get a number between 0 and 29
    console.log('bucket ' + bucket);
    return bucket;
};

HashTable.prototype.insertHash = function(key, value){
    // first figure out what bucket the HashNode(key, value) goes into by the index of the array
    // get the index of the array
    let index = this.hash(key);  // bucket which is the index of the array

    // 2 scenarios: check if bucket is empty else bucket is not empty and go through the chain if ther
    // is a chain to the last node.
    if(!this.buckets[index]){     // if the hashtable is empty
        this.buckets[index] = new HashNode(key, value);      //make a new new node at that index. 
    } else if(this.buckets[index].key === key) {  // checks the first node, always checking the next node
            this.buckets[index].value = value; // will update the email address if they are at the first node in the bucket
    }
    
    else {    // if hash table not empty whether one node or a chain of nodes cycle through it add last node in hte chain
        let currentNode = this.buckets[index];  // if there is one node
        
        while(currentNode.next){ // while this is not the last node in the chain
            if(currentNode.next.key === key) {  // update the email address
                currentNode.next.value = value; // equal to the value passed in
                return;     // we want the method to stop running, checkcing the next node to get to the last node in the chain
            }
            currentNode = currentNode.next; // travel through the chain of hashNodes

        }
        currentNode.next = new HashNode(key, value); 
        
        console.log('currentNode.next ' + currentNode.next);
        //add our new hashNode to the end of the chain
    }
};
// take in a key and return the email address, if they do not exist return null;
HashTable.prototype.search = function(key) {
    let index = this.hash(key); // now we know what bucket to look inot
     // check if bucket is empty, then check if bucket is not empty
     if(!this.buckets[index])
        return null;
     else { // if not empty loop through current node or all the node if in a chain
            let currentNode = this.buckets[index];
               while(currentNode){  // not concerned with having a next node. just going through the nodes that laread exist
                    if(currentNode.key === key)
                        return currentNode.value;

                        currentNode = currentNode.next;
               } 

               return null; // if there is no match
     }
};

HashTable.prototype.retrieveAll = function() {
    // define an empty array to store all nodes
    let allNodes = [];

    for(let i = 0; i< this.numOfbuckets; i++){
        let currentNode = this.buckets[i];
        while(currentNode) {  // want to start at the first node in the bucket
            allNodes.push(currentNode);
            currentNode = currentNode.next; // will take us through the chain if htere is one
        }
    }
    return allNodes;
};

    




// test 7 - test the retrieve all hashnodes from the hashtable.
let ht = new HashTable(30);
ht.insertHash('Dean', 'dean@gmail.com');
ht.insertHash('Megan', 'megan@gmail.com');
ht.insertHash('Dane', 'dane@yahoo.com');
ht.insertHash('Dean', 'deandmachine@gmail.com');
ht.insertHash('Megan', 'megansmith@gmail.com');
ht.insertHash('Dane', 'dane1010@outlook.com');
ht.insertHash('Joe', 'joey@facebook.com');
ht.insertHash('Samantha', 'sammy@twitter.com');

console.log(ht.retrieveAll());



// test 6 - test the get method from the hash table.
// let ht = new HashTable(30);
// ht.insertHash('Dean', 'dean@gmail.com');
// ht.insertHash('Megan', 'megan@gmail.com');
// ht.insertHash('Dane', 'dane@yahoo.com');
// ht.insertHash('Dean', 'deandmachine@gmail.com');
// ht.insertHash('Megan', 'megansmith@gmail.com');
// ht.insertHash('Dane', 'dane1010@outlook.com');

// console.log(ht.search('Dean'));
// console.log(ht.search('Megan'));
// console.log(ht.search('Dane'));


// test 5 - test the update values in the insert  method into the hash table.
// let ht = new HashTable(30);
// ht.insertHash('Dean', 'dean@gmail.com');
// ht.insertHash('Megan', 'megan@gmail.com');
// ht.insertHash('Dane', 'dane@yahoo.com');
// ht.insertHash('Dean', 'deandmachine@gmail.com');
// ht.insertHash('Megan', 'megansmith@gmail.com');
// ht.insertHash('Dane', 'dane1010@outlook.com');

//  console.log(ht.buckets);

// test 4 - test the insert method into the hash table.
// let ht = new HashTable(30);
// ht.insertHash('Dean', 'dean@gmail.com');
// ht.insertHash('Megan', 'megan@gmail.com');
// ht.insertHash('Dane', 'dane@yahoo.com');

// console.log(ht.buckets);

// testt 3 - tests the insertHash method
// let ht = new HashTable(30);
// console.log('Hash function ' + ht.hash('Becca'));


// test 2 - tests the hash function
// let ht = new HashTable(30);
// console.log('Hash function ' + ht.hash('Becca'));
// console.log('Hash function ' + ht.hash('Angie'));


// test 1 - tests the HashTable contructor function
// let ht = new HashTable(30);
// console.log(ht);
