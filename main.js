

// convert to using the contructor method

// figure out the has and the get

class HashNode {
    constructor(key, value, next) {
        this.key = key;
        this.value = value;
        this.next = next || null;
        this.left = null;
        this.right = null;
    }
}

class HashTable {
    constructor(size){
        this.buckets = Array(size);
        this.numOfbuckets = this.buckets.length;
    }

    hash(key) {  
        let total = 0;
        for(let i = 0; i < key.length; i++){ // takes though every character in the key turn into acsii notation
            total += key.charCodeAt(i);
            //console.log('total ' + total) // key converted to numbers
        }

        let bucket = total % this.numOfbuckets; // take the remainder to get a number between 0 and 29
        //console.log('bucket ' + bucket);

        return bucket; // index of the bucket the hash node goes into the hash table
    };

//     insertHash(key, value){
//         // first figure out what bucket the HashNode(key, value) goes into by the index of the array
//         // get the index of the array
//         let index = this.hash(key); // bucket which is the index of the array
//         // 2 scenarios: check if bucket is empty else bucket is not empty and go through the chain if ther
//         // is a chain to the last node.
//         if(!this.buckets[index]){     // if the hashtable is empty
//             this.buckets[index] = new HashNode(key, value);      //make a new new node at that index. 
//             let newNode = this.buckets[index];
//             //this.insertBst(newNode.key, newNode.value);
//         } else if(this.buckets[index].key === key) {  // checks the first node, always checking the next node
//             console.log('Key in insertHash ' + this.buckets[index].key);   
//             this.buckets[index].value = value; // will update the email address if they are at the first node in the bucket
//         }
        
//         else {    // if hash table not empty whether one node or a chain of nodes cycle through it add last node in hte chain
//             let currentNode = this.buckets[index];  // if there is one node
//             console.log('key in insertHash again ' + this.buckets[index].key)
//             while(currentNode.next){ // while this is not the last node in the chain
//                 console.log('hash insert currentNode.next ' + currentNode.next);
//                 console.log('hash insert currentNode.next.key  ' + currentNode.next.key);
//                 if(currentNode.next.key === key) {  // update the email address
//                     currentNode.next.value = value; // equal to the value passed in
//                     return;     // we want the method to stop running, checkcing the next node to get to the last node in the chain
//                 }
//                 currentNode = currentNode.next; // travel through the chain of hashNodes

//             }
//             currentNode.next = new HashNode(key, value); 
            
//             //console.log('currentNode.next ' + currentNode.next);
//             //add our new hashNode to the end of the chain
//             //this.insertBst();
        
//     };
// }

    // insertBst(key, value){
    //     console.log('key ' +  ' ' + key);
    //     let index = this.hash(key);// now we know what bucket to look into
    //     console.log('index ' + ' ' + index);
    //     //console.log('key ' + this.buckets[index].key)
    //     // if(!this.buckets[index]){     // if the hashtable is empty
    //     //     this.buckets[index] = new HashNode(key, value);  
    //     let currentNode = this.buckets[index];
    //        console.log('currentNode ' + currentNode.next);
    //     if(!currentNode){
    //         currentNode = new HashNode(key, value); 
    //             console.log('this.buckets ' + currentNode.key);
    //             console.log('left ' + currentNode.next);
    //           if(currentNode.key < currentNode.next && this.left){
    //             console.log('left ' + currentNode.key);
    //       }
    //     }

        // } else if(this.buckets[index].key < key && left){
        //     console.log('keyz ' + key);
        //     console.log('key2 ' + this.buckets[index].key);
        // }
        // } else { // if not empty loop through current node or all the node if in a chain
        //   let currentNode = this.buckets[index];
        //     while(currentNode){  // not concerned with having a next node. just going through the nodes that laread exist
        //           if(currentNode.key < key && this.left)
        //             console.log('search hello ' + currentNode.key);
                  //console.log('search hello ' + currentNode.key);
                     // return currentNode.value;

                     // currentNode = currentNode.next;
            //} 

           //return null;

         //console.log('currentNode ' = currentNode);
        // if(!currentNode.key === key)
        // currentNode = new HashNode(key, value);
        // else if(currentNode.key < key && this.left)
        //     this.left = insertBst(new HashNode(key, value));
        // else if (this.buckets[index].key < key){
        //     this.left = new HashNode(data);
        // } else if(this.buckets[index].key > key && this.right){
        //     this.right = insertBst(new HashNode(key, value));
        // } else if(this.buckets[index.key] > key){
        //     this.right = new HashNode(data);
        // } else if(this.left === null && this.right === null && this.buckets[index].key !== key) {
        //         return null;
        // } else{
        //     return null;
        // }
    //}
 // }

instbst(key, value){
        // first figure out what bucket the HashNode(key, value) goes into by the index of the array
        // get the index of the array
        let index = this.hash(key); // bucket which is the index of the array
        // 2 scenarios: check if bucket is empty else bucket is not empty and go through the chain if ther
        // is a chain to the last node.
        if(!this.buckets[index]){     // if the hashtable is empty
            this.buckets[index] = new HashNode(key, value);      //make a new new node at that index. 
            let newNode = this.buckets[index];
            //this.insertBst(newNode.key, newNode.value);
        } else if(this.buckets[index].key === key) {  // checks the first node, always checking the next node
            console.log('Key in instbst ' + this.buckets[index].key);   
            this.buckets[index].value = value; // will update the email address if they are at the first node in the bucket
        }
        
        else {    // if hash table not empty whether one node or a chain of nodes cycle through it add last node in hte chain
            let currentNode = this.buckets[index];  // if there is one node
            console.log('key in instbst again ' + this.buckets[index].key)
            while(currentNode.next){ // while this is not the last node in the chain

                //console.log('this.left ' + currentNode.key + ' ' + currentNode.next.key);
                if(currentNode.key < currentNode.next.key && this.left)
                {
                    console.log('this.left ' + currentNode.key + ' ' + currentNode.next.key);
                } else if(currentNode.key < currentNode.next.key){
                      console.log('hello 2');
                } else if(currentNode.key > currentNode.next.key && currentNode.right)
                {
                    console.log('hello 3');
                } else if(currentNode.key > currentNode.next.key){
                    console.log('hello 4 - this.right ' + currentNode.key + " " + 'greater than ' + currentNode.next.key );
                }else{
                  return null;
                }

                console.log('instbst currentNode.next ' + currentNode.next);
                console.log('instbst currentNode.next.key  ' + currentNode.next.key);
                if(currentNode.next.key === key) {  // update the email address
                    currentNode.next.value = value; // equal to the value passed in
                     console.log('instbst currentNode.next.value  ' + currentNode.next.value);
                    return;     // we want the method to stop running, checkcing the next node to get to the last node in the chain
                }
                currentNode = currentNode.next; // travel through the chain of hashNodes

            }
            currentNode.next = new HashNode(key, value); 
            
            //console.log('currentNode.next ' + currentNode.next);
            //add our new hashNode to the end of the chain
            //this.insertBst();
        
    };
}


//  instbst(key) {
//     let index = this.hash(key);// now we know what bucket to look inot
//     // check if bucket is empty, then check if bucket is not empty

//     if(!this.buckets[index]){
//         return null;
//     } else { // if not empty loop through current node or all the node if in a chain
//         let currentNode = this.buckets[index];
//            while(currentNode){  // not concerned with having a next node. just going through the nodes that laread exist
//                 if(currentNode.key === key)
//                 //console.log('search hello ' + currentNode.key);
//                     return currentNode.value;
//            console.log('currentNode.next ' + currentNode.next.key);
//                     currentNode = currentNode.next;
//            } 

//            return null; // if there is no match

//           // this.searchbst();
//  }
// };


// // take in a key and return the email address, if they do not exist return null;
search(key) {
    let index = this.hash(key);// now we know what bucket to look inot
    // check if bucket is empty, then check if bucket is not empty

    if(!this.buckets[index]){
        return null;
    } else { // if not empty loop through current node or all the node if in a chain
        let currentNode = this.buckets[index];
           while(currentNode){  // not concerned with having a next node. just going through the nodes that laread exist
                if(currentNode.key === key)
                //console.log('search hello ' + currentNode.key);
                    return currentNode.value;
           console.log('currentNode.next ' + currentNode.next);
                    currentNode = currentNode.next;
           } 

           return null; // if there is no match

          // this.searchbst();
 }
};

 //searchbst() {

    retrieveAll() {
        // define an empty array to store all nodes
        let allNodes = [];

        for(let i = 0; i < this.numOfbuckets; i++){

            let currentNode = this.buckets[i];
            while(currentNode){ //want to start at the first node in the bucket
                allNodes.push(currentNode);
                currentNode = currentNode.next; // will take us through the chain if there isn't one
            }
        }
        return allNodes;
    };
}

// test 9 -tst instbst
let ht = new HashTable(30);
 ht.instbst('Dean', 'dean@gmail.com');
 ht.instbst('Megan', 'megan@gmail.com');
 ht.instbst('Dane', 'dane@yahoo.com');
 ht.instbst('DeanMachine', 'deandmachine@gmail.com');
 ht.instbst('Megan', 'megansmith@gmail.com');
 ht.instbst('Dane', 'dane1010@outlook.com');
 ht.instbst('Joe', 'joey@facebook.com');
 ht.instbst('Samantha', 'sammy@twitter.com');

//console.log(ht.insertBst('Dean', 'april@gmail.com'));

// test 8 - tst insertBST
//  let ht = new HashTable(30);
//  ht.insertBst('Dean', 'dean@gmail.com');
//  ht.insertBst('Megan', 'megan@gmail.com');
//  ht.insertBst('Dane', 'dane@yahoo.com');
//  ht.insertBst('DeanMachine', 'deandmachine@gmail.com');
//  ht.insertBst('Megan', 'megansmith@gmail.com');
//  ht.insertBst('Dane', 'dane1010@outlook.com');
//  ht.insertBst('Joe', 'joey@facebook.com');
//  ht.insertBst('Samantha', 'sammy@twitter.com');

//console.log(ht.insertBst('Dean', 'april@gmail.com'));


// test 7 - test the retrieve all hashnodes from the hashtable.
//let ht = new HashTable(30);
// ht.insertHash('Dean', 'dean@gmail.com');
// ht.insertHash('Megan', 'megan@gmail.com');
// ht.insertHash('Dane', 'dane@yahoo.com');
// ht.insertHash('Dean', 'deandmachine@gmail.com');
// ht.insertHash('Megan', 'megansmith@gmail.com');
// ht.insertHash('Dane', 'dane1010@outlook.com');
// ht.insertHash('Joe', 'joey@facebook.com');
// ht.insertHash('Samantha', 'sammy@twitter.com');

// console.log(ht.retrieveAll());


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
 //let ht = new HashTable(30);
// ht.insertHash('Dean', 'dean@gmail.com');
// ht.insertHash('Megan', 'megan@gmail.com');
// ht.insertHash('Dane', 'dane@yahoo.com');
// ht.insertHash('Dean', 'deandmachine@gmail.com');
// ht.insertHash('Megan', 'megansmith@gmail.com');
// ht.insertHash('Dane', 'dane1010@outlook.com');

//   console.log(ht.buckets);

// test 4 - test the insert method into the hash table.
//let ht = new HashTable(30);
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
// let hn = new HashNode('hello','there');
// console.log(hn);

// let ht = new HashTable(30);
// console.log(ht);
