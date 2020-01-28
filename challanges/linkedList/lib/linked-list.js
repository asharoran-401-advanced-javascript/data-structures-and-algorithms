'use strict';

const Node = require('../lib/node.js');

class LinkList {
    constructor(){
        this.head = null;
    }

//// we use insert() to add node at head of list /// I got some help from google to understand the conspet of insert
   insert(value){
       let node = new Node(value);
      node.next = this.head;
      this.head =node;
      // return the new list after insert values
      return this.head;
   } 

/// so in include we check if the value is in the list or not and return true/false depend of the result of checking 
   includes(value){
 let currentvalue = this.head;
 while(currentvalue){
     if(currentvalue.value === value){
         return true;
     }
     currentvalue = currentvalue.next;
 }
 return false;
   }

append(value){
  let node = new Node(value);  // add new node // the node equal the first node in the list 
  if(!this.head){ // if the node is empty
      this.head = node;
      return this.head;
  }  
  let currentNode = this.head;
//   console.log(' current value  type' , typeof currentNode);
  while(currentNode.next){
      currentNode = currentNode.next;
  }
  console.log('current nodeee' , currentNode)
  currentNode.next = node;
//   console.log('nodeee value' , node);
  return this.head;
}

}

module.exports = LinkList;